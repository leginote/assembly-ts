import { callOpenApi } from '../functional';
import { PaginationType } from '../types/callOpenApi';
import {
  국회의원명,
  국회의원영문명,
  국회의원이메일주소,
  국회의원코드,
  국회의원한자명,
  국회의원홈페이지URL,
  당선대수,
  보좌관,
  비서,
  비서관,
  사무실호실,
  사진,
  생일구분코드,
  생일일자,
  선거구구분명,
  선거구명,
  성별,
  소속위원회명,
  약력,
  위원회명,
  재선구분명,
  전화번호,
  정당명,
  직책명,
} from '../constant';

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
  [국회의원코드]: v.NAAS_CD,
  [국회의원명]: v.NAAS_NM,
  [국회의원한자명]: v.NAAS_CH_NM,
  [국회의원영문명]: v.NAAS_EN_NM,
  [생일구분코드]: v.BIRDY_DIV_CD,
  [생일일자]: v.BIRDY_DT,
  [직책명]: v.DTY_NM,
  [정당명]: v.PLPT_NM,
  [선거구명]: v.ELECD_NM,
  [선거구구분명]: v.ELECD_DIV_NM,
  [위원회명]: v.CMIT_NM,
  [소속위원회명]: v.BLNG_CMIT_NM,
  [재선구분명]: v.RLCT_DIV_NM,
  [당선대수]: v.GTELT_ERACO, // 당선대수
  [성별]: v.NTR_DIV,
  [전화번호]: v.NAAS_TEL_NO,
  [국회의원이메일주소]: v.NAAS_EMAIL_ADDR,
  [국회의원홈페이지URL]: v.NAAS_HP_URL,
  [보좌관]: v.AIDE_NM,
  [비서관]: v.CHF_SCRT_NM,
  [비서]: v.SCRT_NM,
  [약력]: v.BRF_HST,
  [사무실호실]: v.OFFM_RNUM_NO,
  [사진]: v.NAAS_PIC,
});

/**
 * @description GTELT_ERACO mean `당선대수`, please contribute this library. I can't translate this word
 */
export const getLawmakerList = async ({ page, take, ...rest }: Argument) => {
  const { code: NAAS_CD, name: NAAS_NM, politicalPartyName: PLPT_NM, belongingCommitteeName: BLNG_CMIT_NM } = rest;
  const res = await callOpenApi<typeof command, Row>(
    command,
    { page, take },
    { NAAS_CD, NAAS_NM, PLPT_NM, BLNG_CMIT_NM }
  );

  return res[command][1].row.map(transform);
};
