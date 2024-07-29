import { describe, it, expect, beforeEach } from 'vitest';
import { setApiKey, getApiKey, ApiKeyNotFoundException } from './key';
import { Micro } from 'effect';

describe('Key Utility Functions', () => {
  beforeEach(() => {
    // Reset the key before each test
    setApiKey(null as unknown as string);
  });

  it('should set and get the API key correctly', () => {
    const testKey = 'test-api-key';
    setApiKey(testKey);
    expect(Micro.runSync(getApiKey())).toBe(testKey);
  });

  it('should throw an ApiKeyNotFoundException with the correct message if the API key is not set', () => {
    getApiKey().pipe(
      Micro.match({
        onSuccess: () => {
          throw new Error('Should not be called');
        },
        onFailure: (e) => {
          expect(e).toBeInstanceOf(ApiKeyNotFoundException);
          expect((e as ApiKeyNotFoundException).message).toContain('API key is not set');
        },
      })
    );
  });
});
