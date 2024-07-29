import { callOpenApi } from '../functional';
import { PaginationType } from '../types/callOpenApi';

interface Lawmaker {
  NAAS_CD: string; // 국회의원코드
  NAAS_NM: string; // 국회의원명
  NAAS_CH_NM: string; // 국회의원한자명
  NAAS_EN_NM: string; // 국회의원영문명
  BIRDY_DIV_CD: string; // 생일구분코드
  BIRDY_DT: string; // 생일일자
  DTY_NM: string; // 직책명
  PLPT_NM: string; // 정당명
  ELECD_NM: string; // 선거구명
  ELECD_DIV_NM: string; // 선거구구분명
  CMIT_NM: string; // 위원회명
  BLNG_CMIT_NM: string; // 소속위원회명
  RLCT_DIV_NM: string; // 재선구분명
  GTELT_ERACO: number; // 당선대수
  NTR_DIV: string; // 성별
  NAAS_TEL_NO: string; // 전화번호
  NAAS_EMAIL_ADDR: string; // 국회의원이메일주소
  NAAS_HP_URL: string; // 국회의원홈페이지URL
  AIDE_NM: string; // 보좌관
  CHF_SCRT_NM: string; // 비서관
  SCRT_NM: string; // 비서
  BRF_HST: string; // 약력
  OFFM_RNUM_NO: string; // 사무실 호실
  NAAS_PIC: string; // 국회의원사진
}

type Row = {
  [k in keyof Lawmaker]: Lawmaker[k] | null;
};

type Argument = {
  code?: string;
  name?: string;
  politicalPartyName?: string;
  belongingCommitteeName?: string;
} & PaginationType;

const command = 'ALLNAMEMBER';

const transform = (v: Row) => ({
  code: v.NAAS_CD,
  name: v.NAAS_NM,
  chineseName: v.NAAS_CH_NM,
  englishName: v.NAAS_EN_NM,
  birthdayDivisionCode: v.BIRDY_DIV_CD,
  birthday: v.BIRDY_DT,
  duty: v.DTY_NM,
  politicalParty: v.PLPT_NM,
  electoralDistrict: v.ELECD_NM,
  electoralDistrictDivision: v.ELECD_DIV_NM,
  committee: v.CMIT_NM,
  belongingCommitteeName: v.BLNG_CMIT_NM,
  're-electionClassificationDivision': v.RLCT_DIV_NM,
  // @TODO add this field
  // GTELT_ERACO: number; // 당선대수
  gender: v.NTR_DIV,
  phone: v.NAAS_TEL_NO,
  email: v.NAAS_EMAIL_ADDR,
  homepage: v.NAAS_HP_URL,
  aide: v.AIDE_NM,
  seniorSecretary: v.CHF_SCRT_NM,
  secretary: v.SCRT_NM,
  profile: v.BRF_HST,
  officeRoom: v.OFFM_RNUM_NO,
  picture: v.NAAS_PIC,
});

/**
 * @description if you want `당선대수` please contribute this library. I can't translate this word
 */
export const getLawmakerList = async ({ page, take, ...rest }: Argument) => {
  const { code: NAAS_CD, name: NAAS_NM, politicalPartyName: PLPT_NM, belongingCommitteeName: BLNG_CMIT_NM } = rest;
  const res = await callOpenApi<typeof command, Row>(
    command,
    { page, take },
    { NAAS_CD, NAAS_NM, PLPT_NM, BLNG_CMIT_NM }
  );

  return res.ALLNAMEMBER[1].row.map(transform);
};
