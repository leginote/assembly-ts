import { describe, it, expect, vi, beforeEach } from 'vitest';
import { callOpenApi, OpenApiResponseError } from './callOpenApi';
import { ApiCommand, OpenApiResponseKind, PaginationType } from '../types/callOpenApi';
import { setApiKey } from '../util/key';

// Mock the fetch function
global.fetch = vi.fn();

describe('callOpenApi', () => {
  const testApiKey = 'test-api-key';

  beforeEach(() => {
    setApiKey(testApiKey);
  });

  const mockCommand: ApiCommand = 'mockCommand' as string as ApiCommand;
  const mockPagination: PaginationType = { page: 1, take: 10 };
  const mockArgs: Record<string, string | undefined> = { arg1: 'value1', arg2: undefined };
  const mockRow = { id: 1, name: 'John Doe' };

  it('should make a successful API call', async () => {
    const mockResponse: any = {
      [mockCommand]: [
        {
          head: [{ list_total_count: 100 }, { RESULT: { CODE: 'INFO-000', MESSAGE: OpenApiResponseKind['INFO-000'] } }],
        },
        { row: [mockRow] },
      ],
    };

    (fetch as any).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    await callOpenApi(mockCommand, mockPagination, mockArgs).then((result) => {
      expect(fetch).toHaveBeenCalledWith(
        `https://open.assembly.go.kr/portal/openapi/${mockCommand}?type=json&key=${testApiKey}&pIndex=1&pSize=10&arg1=value1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      expect(result).toEqual(mockResponse);
    });
  });

  it('should throw an error for a failed API call', async () => {
    const mockResponse: any = {
      [mockCommand]: [
        {
          head: [{ list_total_count: 0 }, { RESULT: { CODE: 'ERROR-300', MESSAGE: OpenApiResponseKind['ERROR-300'] } }],
        },
        { row: [] },
      ],
    };

    (fetch as any).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    await expect(callOpenApi(mockCommand, mockPagination, mockArgs)).rejects.toThrowError(
      new OpenApiResponseError('ERROR-300')
    );
  });
});
