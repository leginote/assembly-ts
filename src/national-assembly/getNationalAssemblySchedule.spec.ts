import { describe, it, expect, vi } from 'vitest';
import { getNationalAssemblySchedule } from './getNationalAssemblySchedule';
import { callOpenApi } from '../functional';
import { translatedVariableDictionary } from '../constant';

vi.mock('../functional', () => ({
  callOpenApi: vi.fn(),
}));

describe('getNationalAssemblySchedule', () => {
  it('should return a list of national assembly schedules', async () => {
    const mockResponse = {
      ALLSCHEDULE: [
        null,
        {
          row: [
            {
              SCH_KIND: 'Meeting',
              SCH_CN: 'Committee Meeting',
              SCH_DT: '2023-05-01',
              SCH_TM: '09:00',
              CONF_DIV: 'Regular',
              CMIT_NM: 'Committee A',
              CONF_SESS: '1',
              CONF_DGR: '1',
              EV_INST_NM: 'National Assembly',
              EV_PLC: 'Room 123',
            },
          ],
        },
      ],
    };

    (callOpenApi as any).mockResolvedValueOnce(mockResponse);

    const schedules = await getNationalAssemblySchedule({ page: 1, take: 10 });

    expect(schedules).toHaveLength(1);
    expect(schedules[0]).toEqual({
      [translatedVariableDictionary['일정_종류']]: 'Meeting',
      [translatedVariableDictionary['일정_내용']]: 'Committee Meeting',
      [translatedVariableDictionary['일정_일자']]: '2023-05-01',
      [translatedVariableDictionary['일정_시간']]: '09:00',
      [translatedVariableDictionary['회의_구분']]: 'Regular',
      [translatedVariableDictionary['위원회명']]: 'Committee A',
      [translatedVariableDictionary['회의_회기']]: '1',
      [translatedVariableDictionary['회의_차수']]: '1',
      [translatedVariableDictionary['행사_주체자']]: 'National Assembly',
      [translatedVariableDictionary['행사_장소']]: 'Room 123',
    });
  });

  it('should return an empty list when no schedules are found', async () => {
    const mockResponse = {
      ALLSCHEDULE: [null, { row: [] }],
    };

    (callOpenApi as any).mockResolvedValueOnce(mockResponse);

    const schedules = await getNationalAssemblySchedule({ page: 1, take: 10 });

    expect(schedules).toHaveLength(0);
  });

  it('should throw an error when callOpenApi fails', async () => {
    const mockError = new Error('Failed to fetch schedules');
    (callOpenApi as any).mockRejectedValueOnce(mockError);

    await expect(getNationalAssemblySchedule({ page: 1, take: 10 })).rejects.toThrow('Failed to fetch schedules');
  });
});
