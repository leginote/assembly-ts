import { describe, it, expect, vi } from 'vitest';
import { getLawmakerList } from './getLawmakerList';
import { callOpenApi } from '../functional';

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
      lawmakerCode: '1234',
      lawmakerName: 'John Doe',
      lawmakerChineseName: '张三',
      lawmakerEnglishName: 'John Doe',
      birthdayDivisionCode: '1',
      birthday: '1990-01-01',
      dutyName: 'Lawmaker',
      politicalPartyName: 'Democratic Party',
      electoralDistrictName: 'District A',
      electoralDistrictDivisionName: 'District',
      committeeName: 'Committee A',
      belongingCommitteeName: 'Committee A',
      're-electionClassificationDivision': 'First-term',
      gender: 'Male',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      homepage: 'https://example.com/john-doe',
      aide: 'Jane Smith',
      seniorSecretary: 'Bob Johnson',
      secretary: 'Alice Williams',
      profile: 'John Doe is a lawmaker.',
      officeRoom: '123',
      picture: 'https://example.com/john-doe.jpg',
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
