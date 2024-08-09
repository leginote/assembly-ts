import { callOpenApi } from '../functional';
import { PaginationType } from '../types/callOpenApi';
import {
  대,
  대표발의자,
  대표발의자코드,
  법사위상정일,
  법사위처리결과,
  법사위처리일,
  법사위회부일,
  본회의심의결과,
  소관위,
  소관위상정일,
  소관위처리결과,
  소관위처리일,
  소관위코드,
  소관위회부일,
  위원회심사_처리일,
  의결일,
  의안ID,
  의안명,
  의안번호,
  의안상세정보_URL,
  제안일,
  제안자,
  제안자구분,
} from '../constant';

// https://open.assembly.go.kr/portal/data/service/selectAPIServicePage.do/O4K6HM0012064I15889
// 법률안 심사 및 처리(의안검색) 구현

interface Bill {
  BILL_ID: string; // 의안ID
  BILL_NO: string; // 의안번호
  AGE: string; // 대
  BILL_NAME: string; // 의안명(한글)
  PROPOSER: string; // 제안자
  PROPOSER_KIND: string; // 제안자구분
  PROPOSE_DT: string; // 제안일
  CURR_COMMITTEE_ID: string; // 소관위코드
  CURR_COMMITTEE: string; // 소관위
  COMMITTEE_DT: string; // 소관위회부일
  COMMITTEE_PROC_DT: string; // 위원회심사_처리일
  LINK_URL: string; // 의안상세정보_URL
  RST_PROPOSER: string; // 대표발의자
  LAW_PROC_RESULT_CD: string; // 법사위처리결과
  LAW_PROC_DT: string; // 법사위처리일
  LAW_PRESENT_DT: string; // 법사위상정일
  LAW_SUBMIT_DT: string; // 법사위회부일
  CMT_PROC_RESULT_CD: string; // 소관위처리결과
  CMT_PROC_DT: string; // 소관위처리일
  CMT_PRESENT_DT: string; // 소관위상정일
  RST_MONA_CD: string; // 대표발의자코드
  PROC_RESULT_CD: string; // 본회의심의결과
  PROC_DT: string; // 의결일
}

type Row = {
  [k in keyof Bill]: Bill[k] | null;
};

type Argument = {
  billID?: string; // 의안ID, 예시: BILL_ID='PRC_Z2Z1Z0Z3X2L4M0H9A2V6K5R0V7P2H1'
  billNumber?: string; // 의안번호, 예시: BILL_NO='2114286'
  age?: string; // 대, 예시: AGE='21'
  billName?: string; // 의안명(한글), 예시: BILL_NAME='의안명(한글) 검색어' (예시) BILL_NAME="80년
  proposer?: string; // 제안자, 예시: PROPOSER='제안자 검색어' (예시) PROPOSER=2012년
  proposerDivision?: string; // 제안자구분, 예시: PROPOSER_KIND='정부'
  jurisdictionCommitteeCode?: string; // 소관위코드, 예시: CURR_COMMITTEE_ID='B002368'
  jurisdictionCommittee?: string; // 소관위, 예시: CURR_COMMITTEE='소관위 검색어' (예시) CURR_COMMITTEE=2002
  plenarySessionReviewResult?: string; // 본회의심의결과, 예시: PROC_RESULT_CD='회기불계속폐기'
  resolutionDate?: string; // 의결일, 예시: PROC_DT='2021-12-31'
} & PaginationType;

const command = 'TVBPMBILL11';

const transform = (v: Row) => ({
  [의안ID]: v.BILL_ID,
  [의안번호]: v.BILL_NO,
  [대]: v.AGE,
  [의안명]: v.BILL_NAME,
  [제안자]: v.PROPOSER,
  [제안자구분]: v.PROPOSER_KIND,
  [제안일]: v.PROPOSE_DT,
  [소관위코드]: v.CURR_COMMITTEE_ID,
  [소관위]: v.CURR_COMMITTEE,
  [소관위회부일]: v.COMMITTEE_DT,
  [위원회심사_처리일]: v.COMMITTEE_PROC_DT,
  [의안상세정보_URL]: v.LINK_URL,
  [대표발의자]: v.RST_PROPOSER,
  [법사위처리결과]: v.LAW_PROC_RESULT_CD,
  [법사위처리일]: v.LAW_PROC_DT,
  [법사위상정일]: v.LAW_PRESENT_DT,
  [법사위회부일]: v.LAW_SUBMIT_DT,
  [소관위처리결과]: v.CMT_PROC_RESULT_CD,
  [소관위처리일]: v.CMT_PROC_DT,
  [소관위상정일]: v.CMT_PRESENT_DT,
  [대표발의자코드]: v.RST_MONA_CD,
  [본회의심의결과]: v.PROC_RESULT_CD,
  [의결일]: v.PROC_DT,
});

/**
 * @description implementation of 법률안 심사 및 처리 API
 */
export const getBillList = async ({ page, take, ...rest }: Argument) => {
  const res = await callOpenApi<typeof command, Row>(
    command,
    { page, take },
    {
      BILL_ID: rest.billID,
      BILL_NO: rest.billNumber,
      AGE: rest.age,
      BILL_NAME: rest.billName,
      PROPOSER: rest.proposer,
      PROPOSER_KIND: rest.proposerDivision,
      CURR_COMMITTEE_ID: rest.jurisdictionCommitteeCode,
      CURR_COMMITTEE: rest.jurisdictionCommittee,
      PROC_RESULT_CD: rest.plenarySessionReviewResult,
      PROC_DT: rest.resolutionDate,
    }
  );
  return res[command][1].row.map(transform);
};
