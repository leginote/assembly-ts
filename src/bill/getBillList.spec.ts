import { describe, it, expect, vi } from 'vitest';
import { getBillList } from './getBillList';
import { callOpenApi } from '../functional';
import { translatedVariableDictionary } from '../constant';

vi.mock('../functional', () => ({
  callOpenApi: vi.fn(),
}));

describe('getBillList', () => {
  it('should return a list of bills', async () => {
    const mockResponse = {
      TVBPMBILL11: [
        null,
        {
          row: [
            {
              BILL_ID: 'PRC_K2S4R0S4Q3P0L0K9J0J9I5Q7P2Q4O6',
              BILL_NO: '2126707',
              AGE: '21',
              BILL_NAME: '문화다양성의 보호와 증진에 관한 법률 일부개정법률안',
              PROPOSER: '이자스민의원 등 10인',
              PROPOSER_KIND: '의원',
              PROPOSE_DT: '2024-05-29',
              CURR_COMMITTEE_ID: '9700513',
              CURR_COMMITTEE: '문화체육관광위원회',
              COMMITTEE_DT: '2024-05-29',
              COMMITTEE_PROC_DT: null,
              LINK_URL: 'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_K2S4R0S4Q3P0L0K9J0J9I5Q7P2Q4O6',
              RST_PROPOSER: '이자스민',
              LAW_PROC_RESULT_CD: null,
              LAW_PROC_DT: null,
              LAW_PRESENT_DT: null,
              LAW_SUBMIT_DT: null,
              CMT_PROC_RESULT_CD: null,
              CMT_PROC_DT: null,
              CMT_PRESENT_DT: null,
              RST_MONA_CD: 'SZ51175J',
              PROC_RESULT_CD: '임기만료폐기',
              PROC_DT: '2024-05-29',
            },
          ],
        },
      ],
    };

    (callOpenApi as any).mockResolvedValueOnce(mockResponse);

    const bills = await getBillList({ page: 1, take: 10 });

    expect(bills).toHaveLength(1);
    expect(bills[0]).toEqual({
      [translatedVariableDictionary['의안ID']]: 'PRC_K2S4R0S4Q3P0L0K9J0J9I5Q7P2Q4O6',
      [translatedVariableDictionary['의안번호']]: '2126707',
      [translatedVariableDictionary['대']]: '21',
      [translatedVariableDictionary['의안명']]: '문화다양성의 보호와 증진에 관한 법률 일부개정법률안',
      [translatedVariableDictionary['제안자']]: '이자스민의원 등 10인',
      [translatedVariableDictionary['제안자구분']]: '의원',
      [translatedVariableDictionary['제안일']]: '2024-05-29',
      [translatedVariableDictionary['소관위코드']]: '9700513',
      [translatedVariableDictionary['소관위']]: '문화체육관광위원회',
      [translatedVariableDictionary['소관위회부일']]: '2024-05-29',
      [translatedVariableDictionary['위원회심사_처리일']]: null,
      [translatedVariableDictionary['의안상세정보_URL']]:
        'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_K2S4R0S4Q3P0L0K9J0J9I5Q7P2Q4O6',
      [translatedVariableDictionary['대표발의자']]: '이자스민',
      [translatedVariableDictionary['법사위처리결과']]: null,
      [translatedVariableDictionary['법사위처리일']]: null,
      [translatedVariableDictionary['법사위상정일']]: null,
      [translatedVariableDictionary['법사위회부일']]: null,
      [translatedVariableDictionary['소관위처리결과']]: null,
      [translatedVariableDictionary['소관위처리일']]: null,
      [translatedVariableDictionary['소관위상정일']]: null,
      [translatedVariableDictionary['대표발의자코드']]: 'SZ51175J',
      [translatedVariableDictionary['본회의심의결과']]: '임기만료폐기',
      [translatedVariableDictionary['의결일']]: '2024-05-29',
    });
  });

  it('should return an empty list when no bills are found', async () => {
    const mockResponse = {
      TVBPMBILL11: [null, { row: [] }],
    };

    (callOpenApi as any).mockResolvedValueOnce(mockResponse);

    const bills = await getBillList({ page: 1, take: 10 });

    expect(bills).toHaveLength(0);
  });

  it('should throw an error when callOpenApi fails', async () => {
    const mockError = new Error('Failed to fetch bills');
    (callOpenApi as any).mockRejectedValueOnce(mockError);

    await expect(getBillList({ page: 1, take: 10 })).rejects.toThrow('Failed to fetch bills');
  });
});
