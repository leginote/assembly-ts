import { describe, it, expect, vi } from 'vitest';
import { getLawmakerList } from './getLawmakerList';
import { callOpenApi } from '../functional';
import { variableTransferlatedDictionary } from '../constant';

vi.mock('../functional', () => ({
  callOpenApi: vi.fn(),
}));

describe('getLawmakerList', () => {
  it('should return a list of lawmakers', async () => {
    const mockResponse = {
      ALLNAMEMBER: [
        null,
        {
          row: [
            {
              NAAS_CD: '1234',
              NAAS_NM: 'John Doe',
              NAAS_CH_NM: '张三',
              NAAS_EN_NM: 'John Doe',
              BIRDY_DIV_CD: '1',
              BIRDY_DT: '1990-01-01',
              DTY_NM: 'Lawmaker',
              PLPT_NM: 'Democratic Party',
              ELECD_NM: 'District A',
              ELECD_DIV_NM: 'District',
              CMIT_NM: 'Committee A',
              BLNG_CMIT_NM: 'Committee A',
              RLCT_DIV_NM: 'First-term',
              NTR_DIV: 'Male',
              NAAS_TEL_NO: '123-456-7890',
              NAAS_EMAIL_ADDR: 'john.doe@example.com',
              NAAS_HP_URL: 'https://example.com/john-doe',
              AIDE_NM: 'Jane Smith',
              CHF_SCRT_NM: 'Bob Johnson',
              SCRT_NM: 'Alice Williams',
              BRF_HST: 'John Doe is a lawmaker.',
              OFFM_RNUM_NO: '123',
              NAAS_PIC: 'https://example.com/john-doe.jpg',
            },
          ],
        },
      ],
    };

    (callOpenApi as any).mockResolvedValueOnce(mockResponse);

    const lawmakers = await getLawmakerList({ page: 1, take: 10 });

    expect(lawmakers).toHaveLength(1);
    expect(lawmakers[0]).toEqual({
      [variableTransferlatedDictionary['국회의원코드']]: '1234',
      [variableTransferlatedDictionary['국회의원명']]: 'John Doe',
      [variableTransferlatedDictionary['국회의원한자명']]: '张三',
      [variableTransferlatedDictionary['국회의원영문명']]: 'John Doe',
      [variableTransferlatedDictionary['생일구분코드']]: '1',
      [variableTransferlatedDictionary['생일일자']]: '1990-01-01',
      [variableTransferlatedDictionary['직책명']]: 'Lawmaker',
      [variableTransferlatedDictionary['정당명']]: 'Democratic Party',
      [variableTransferlatedDictionary['선거구명']]: 'District A',
      [variableTransferlatedDictionary['선거구구분명']]: 'District',
      [variableTransferlatedDictionary['위원회명']]: 'Committee A',
      [variableTransferlatedDictionary['소속위원회명']]: 'Committee A',
      [variableTransferlatedDictionary['재선구분명']]: 'First-term',
      [variableTransferlatedDictionary['성별']]: 'Male',
      [variableTransferlatedDictionary['전화번호']]: '123-456-7890',
      [variableTransferlatedDictionary['국회의원이메일주소']]: 'john.doe@example.com',
      [variableTransferlatedDictionary['국회의원홈페이지URL']]: 'https://example.com/john-doe',
      [variableTransferlatedDictionary['보좌관']]: 'Jane Smith',
      [variableTransferlatedDictionary['비서관']]: 'Bob Johnson',
      [variableTransferlatedDictionary['비서']]: 'Alice Williams',
      [variableTransferlatedDictionary['약력']]: 'John Doe is a lawmaker.',
      [variableTransferlatedDictionary['사무실호실']]: '123',
      [variableTransferlatedDictionary['사진']]: 'https://example.com/john-doe.jpg',
    });
  });
  it('should return an empty list when no lawmakers are found', async () => {
    const mockResponse = {
      ALLNAMEMBER: [null, { row: [] }],
    };

    (callOpenApi as any).mockResolvedValueOnce(mockResponse);

    const lawmakers = await getLawmakerList({ page: 1, take: 10 });

    expect(lawmakers).toHaveLength(0);
  });
  it('should throw an error when callOpenApi fails', async () => {
    const mockError = new Error('Failed to fetch lawmakers');
    (callOpenApi as any).mockRejectedValueOnce(mockError);

    await expect(getLawmakerList({ page: 1, take: 10 })).rejects.toThrow('Failed to fetch lawmakers');
  });
});
