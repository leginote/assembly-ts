/**
 * 🏛️ 국회 OpenAPI 타입 정의
 * 
 * OpenAPI 스펙에서 자동 생성된 타입들입니다.
 */

// OpenAPI 설정 타입
export interface AssemblyAPIConfig {
  /** 국회 OpenAPI 인증키 */
  apiKey: string;
  /** 응답 형식 (기본값: json) */
  responseType?: 'xml' | 'json';
}

// API 응답 타입 (기존 assembly-ts와 호환)
export type APIResponse<K extends string = string, V extends object = any> = {
  [k in K]: [
    {
      head: [
        {
          list_total_count: number;
        },
        {
          RESULT: { 
            CODE: string; 
            MESSAGE: string; 
          };
        },
      ];
    },
    { row: V[] },
  ];
};

// 공통 파라미터 타입
export interface BaseParams {
  /** 인증키 */
  KEY?: string;
  /** 응답 형식 */
  Type?: 'xml' | 'json';
  /** 페이지 번호 */
  pIndex?: string;
  /** 페이지 크기 */
  pSize?: string;
}

export interface NATV_뉴스_의장단RowItem {
  /** 제목 */
  COMP_MAIN_TITLE?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
  /** 내용 */
  COMP_CONTENT?: string | null;
  /** 상세보기 */
  LINK_URL?: string | null;
}

export interface NATV_뉴스_의장단Response {
  ndkuweviadcqkbjdl?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NATV_뉴스_의장단RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의원친선협회_임회원_명단RowItem {
  /** 다운로드 */
  RPT_NO?: string | null;
  /** 제목 */
  RPT_TITLE?: string | null;
  /** 기준일자 */
  STND_DT?: string | null;
  /** 작성자 */
  WRT_NM?: string | null;
  /** 대별코드 */
  UNIT_CD?: string | null;
  /** 대 */
  UNIT_NM?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 의원친선협회_임회원_명단Response {
  nbicgazsalnfamoyp?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의원친선협회_임회원_명단RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 정보공개청구_행정심판_결과현황RowItem {
  /** 년도 */
  YR?: string | null;
  /** 기관 */
  INST_CD?: string | null;
  /** 일련번호 */
  SN?: string | null;
  /** 사건명 */
  IND_NM?: string | null;
  /** 의결(재결)일 */
  RSLN_DT?: string | null;
  /** 피청구인 */
  OJ_DEMD_PN?: string | null;
  /** 주문내용 */
  ORDG_RSON?: string | null;
  /** 청구취지 */
  DEMD_MEAN?: string | null;
  /** 이유(심판결과요지) */
  JUD_RSLT_MTH?: string | null;
}

export interface 정보공개청구_행정심판_결과현황Response {
  npryvxppapmxgwpxw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 정보공개청구_행정심판_결과현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_제공_자료_통합_APIRowItem {
  /** 발간자료구분 */
  MTR_DIV?: string | null;
  /** 발간자료제목 */
  MTR_TTL?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 국회도서관_제공_자료_통합_APIResponse {
  ALLNANETPBLM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_제공_자료_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회의원_위원회_경력RowItem {
  /** 구분코드 */
  PROFILE_CD?: string | null;
  /** 구분 */
  PROFILE_NM?: string | null;
  /** 의원이름(한글) */
  HG_NM?: string | null;
  /** 의원이름(한자) */
  HJ_NM?: string | null;
  /** 활동기간 */
  FRTO_DATE?: string | null;
  /** 위원회 경력 */
  PROFILE_SJ?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
  /** 경력대수코드 */
  PROFILE_UNIT_CD?: string | null;
  /** 경력대수 */
  PROFILE_UNIT_NM?: string | null;
}

export interface 역대_국회의원_위원회_경력Response {
  nqbeopthavwwfbekw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회의원_위원회_경력RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법률안_심사_및_처리처리의안RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 본회의심의결과 */
  PROC_RESULT_CD?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
  /** 의결일 */
  PROC_DT?: string | null;
  /** 의안상세정보_URL */
  LINK_URL?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위처리일 */
  LAW_PROC_DT?: string | null;
  /** 소관위처리결과 */
  CMT_PROC_RESULT_CD?: string | null;
  /** 법사위처리결과 */
  LAW_PROC_RESULT_CD?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 소관위처리일 */
  CMT_PROC_DT?: string | null;
}

export interface 법률안_심사_및_처리처리의안Response {
  nzpltgfqabtcpsmai?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법률안_심사_및_처리처리의안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_정당별_국회의원_선거결과RowItem {
  /** 대수 */
  ORD_NO?: string | null;
  /** 정당 / 단체 */
  PLPT_NM?: string | null;
  /** 득표율 */
  NFVP_RT?: string | null;
  /** 의석수 */
  PLMST_PSNCNT?: string | null;
  /** 비례대표수 */
  PRPRR_PSNCNT?: string | null;
}

export interface 역대_정당별_국회의원_선거결과Response {
  nedjqrnlavrvcycue?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_정당별_국회의원_선거결과RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 처리_의안통계발의주체별_법률안RowItem {
  /** 발의자구분명 */
  PRPSR_DIV_NM?: string | null;
  /** 접수건수 */
  RCP_CNT?: string | null;
  /** 처리건수 */
  PROC_CNT?: string | null;
  /** 반영소계 */
  REFT_SUBT?: string | null;
  /** 원안가결건수 */
  OBIL_PSSG_CNT?: string | null;
  /** 수정안가결건수 */
  AMND_PSSG_CNT?: string | null;
  /** 대안반영건수 */
  ALTPL_REFT_CNT?: string | null;
  /** 수정안반영건수 */
  AMND_REFT_CNT?: string | null;
  /** 미반영소계 */
  UN_REFT_SUBT?: string | null;
  /** 부결건수 */
  RJCTN_CNT?: string | null;
  /** 폐기건수 */
  DSU_CNT?: string | null;
  /** 철회건수 */
  WTHD_CNT?: string | null;
  /** 반려건수 */
  GVB_CNT?: string | null;
  /** 기타건수 */
  ETC_CNT?: string | null;
  /** 보류건수 */
  RSVT_CNT?: string | null;
}

export interface 처리_의안통계발의주체별_법률안Response {
  BILLCNTPRPSR?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 처리_의안통계발의주체별_법률안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회문화극장_공연_일정RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 관람예약 */
  RE_DT?: string | null;
  /** 일시 */
  DT?: string | null;
  /** 장소 */
  ETC_CHAR11?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
}

export interface 국회문화극장_공연_일정Response {
  npfoswpxawimahqlt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회문화극장_공연_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_의안_통계RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 제출(건) */
  SBM?: string | null;
  /** 가결(건) */
  DEAL_CN_PSSG?: string | null;
  /** 부결(건) */
  DEAL_CN_RJCTN?: string | null;
  /** 폐기(건) */
  DEAL_CN_DSU?: string | null;
  /** 철회(건) */
  DEAL_CN_WTHD?: string | null;
  /** 반려(건) */
  DEAL_CN_GVB?: string | null;
  /** 보류(건) */
  DEAL_CN_RSVT?: string | null;
  /** 임기만료폐기(건) */
  TERM_EXPR_DSU?: string | null;
}

export interface 역대_의안_통계Response {
  nzivskufaliivfhpb?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_의안_통계RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회_회의록RowItem {
  /** 회의번호 */
  CONFER_NUM?: string | null;
  /** 회의명 */
  TITLE?: string | null;
  /** 회의종류명 */
  CLASS_NAME?: string | null;
  /** 대수 */
  DAE_NUM?: string | null;
  /** 위원회명 */
  COMM_NAME?: string | null;
  /** 영상회의록 */
  VODCOMM_CODE?: string | null;
  /** 회의날짜 */
  CONF_DATE?: string | null;
  /** 안건명 */
  SUB_NAME?: string | null;
  /** 영상회의록 링크 */
  VOD_LINK_URL?: string | null;
  /** 요약정보 팝업 */
  CONF_LINK_URL?: string | null;
  /** PDF파일 링크 */
  PDF_LINK_URL?: string | null;
  /** 회의록 */
  PDF_FILE_ID?: string | null;
  /** 위원회코드 */
  DEPT_CD?: string | null;
}

export interface 위원회_회의록Response {
  ncwgseseafwbuheph?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 회의록_대별_위원회_목록RowItem {
  /** 대수 */
  TH?: string | null;
  /** 회의종류 */
  CLASS_ID?: string | null;
  /** 회의종류명 */
  CLASS_NM?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 소위원회코드 */
  SUB_CMIT_CD?: string | null;
  /** 소위원회명 */
  SUB_CMIT_NM?: string | null;
}

export interface 회의록_대별_위원회_목록Response {
  nkimylolanvseqagq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 회의록_대별_위원회_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국정조사_결과보고서RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 본회의 심의 상정일 */
  RGS_PRSNT_DT?: string | null;
  /** 본회의 심의 의결일 */
  RGS_RSLN_DT?: string | null;
  /** PDF 다운 URL */
  HWP_DWLD_URL?: string | null;
  /** HWP 다운 URL */
  PDF_DWLD_URL?: string | null;
}

export interface 국정조사_결과보고서Response {
  INVESTREPORTRESULT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국정조사_결과보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_업무추진비_집행현황RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회도서관_업무추진비_집행현황Response {
  ngqoyjbkaxutcpmot?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_업무추진비_집행현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회사무처_정보목록RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 첨부파일ID */
  FILE_ID?: string | null;
}

export interface 국회사무처_정보목록Response {
  ntmgtbxwaqrkrklzn?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회사무처_정보목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 종료된_입법예고RowItem {
  /** 의안 ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 법률안명 */
  BILL_NAME?: string | null;
  /** 대 */
  AGE?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND_CD?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 소관위원회 */
  CURR_COMMITTEE?: string | null;
  /** 게시종료일 */
  NOTI_ED_DT?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
  /** 소관위ID */
  CURR_COMMITTEE_ID?: string | null;
}

export interface 종료된_입법예고Response {
  nohgwtzsamojdozky?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 종료된_입법예고RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 토론회_결과보고서RowItem {
  /** 발간물 제목 */
  PBLM_TTL?: string | null;
  /** 작성부서 */
  WRT_DEPT?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 토론회_결과보고서Response {
  NABOPBLMDCSNREPORT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 토론회_결과보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법률안_심사_및_처리최근_본회의처리_의안RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 본회의심의결과 */
  PROC_RESULT_CD?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
  /** 의결일 */
  PROC_DT?: string | null;
  /** 의안상세정보 URL */
  LINK_URL?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위처리일 */
  LAW_PROC_DT?: string | null;
  /** 소관위처리결과 */
  CMT_PROC_RESULT_CD?: string | null;
  /** 법사위처리결과 */
  LAW_PROC_RESULT_CD?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 소관위처리일 */
  CMT_PROC_DT?: string | null;
}

export interface 법률안_심사_및_처리최근_본회의처리_의안Response {
  nxjuyqnxadtotdrbw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법률안_심사_및_처리최근_본회의처리_의안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_보좌진_이야기RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_보좌진_이야기Response {
  nepfnxudavtvchtlu?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_보좌진_이야기RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_발의법률안RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 법률안명 */
  BILL_NAME?: string | null;
  /** 소관위원회 */
  COMMITTEE?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 본회의심의결과 */
  PROC_RESULT?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 상세페이지 */
  DETAIL_LINK?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 제안자목록링크 */
  MEMBER_LIST?: string | null;
  /** 법사위처리일 */
  LAW_PROC_DT?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 소관위처리결과 */
  CMT_PROC_RESULT_CD?: string | null;
  /** 소관위처리일 */
  CMT_PROC_DT?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
  /** 의결일 */
  PROC_DT?: string | null;
  /** 소관위원회ID */
  COMMITTEE_ID?: string | null;
  /** 공동발의자 */
  PUBL_PROPOSER?: string | null;
  /** 법사위처리결과 */
  LAW_PROC_RESULT_CD?: string | null;
  /** 대표발의자 */
  RST_PROPOSER?: string | null;
}

export interface 국회의원_발의법률안Response {
  nzmimeepazxkubdpn?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_발의법률안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 연도별_연구단체_건수RowItem {
  /** 구분 */
  GUBUN?: string | null;
  /** 연도 */
  YEAR?: string | null;
  /** 단체수(개) */
  GROUP_CNT?: string | null;
}

export interface 연도별_연구단체_건수Response {
  nhllwdafacadantme?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 연도별_연구단체_건수RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 본회의_일정RowItem {
  /** 회기 */
  MEETINGSESSION?: string | null;
  /** 차수 */
  CHA?: string | null;
  /** 제목 */
  TITLE?: string | null;
  /** 일자 */
  MEETTING_DATE?: string | null;
  /** 일시 */
  MEETTING_TIME?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
  /** 대수 */
  UNIT_CD?: string | null;
  /** 대수 */
  UNIT_NM?: string | null;
  /** 안건정보 */
  CONTS?: string | null;
}

export interface 본회의_일정Response {
  nekcaiymatialqlxr?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 본회의_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의회외교_영문의회용어검색RowItem {
  /** 의회외교 단어 */
  DPLM_WORD?: string | null;
  /** 의회외교 영문단어 */
  DPLM_WORD_EN?: string | null;
}

export interface 의회외교_영문의회용어검색Response {
  DIPLOMACYWORD?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의회외교_영문의회용어검색RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안_심사정보예ㆍ결산_제외RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자구분 */
  PPSR_KIND?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 소관위원회명 */
  JRCMIT_NM?: string | null;
  /** 소관위원회 회부일 */
  BDG_CMMT_DT?: string | null;
  /** 소관위원회 상정일 */
  JRCMIT_PRSNT_DT?: string | null;
  /** 소관위원회 처리일 */
  JRCMIT_PROC_DT?: string | null;
  /** 소관위원회 처리결과 */
  JRCMIT_PROC_RSLT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 의안_심사정보예ㆍ결산_제외Response {
  BILLJUDGE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안_심사정보예ㆍ결산_제외RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_소규모_연구용역_결과보고서RowItem {
  /** 다운로드 */
  RPT_NO?: string | null;
  /** 년도 */
  YEAR?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
  /** 보고서제목 */
  RPT_TITLE?: string | null;
  /** 등록일 */
  RG_DE?: string | null;
  /** 대별코드 */
  UNIT_CD?: string | null;
  /** 대 */
  UNIT_NM?: string | null;
  /** 의원명 */
  ASBLM_NM?: string | null;
  /** 분기 */
  QUARTER?: string | null;
  /** 구분명 */
  DIV_NM?: string | null;
}

export interface 국회의원_소규모_연구용역_결과보고서Response {
  nfvmtaqoaldzhobsw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_소규모_연구용역_결과보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법률안_심사_및_처리계류의안RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
  /** 의안상세정보_URL */
  LINK_URL?: string | null;
  /** 소관위처리일 */
  CMT_PROC_DT?: string | null;
  /** 소관위처리결과 */
  CMT_PROC_RESULT_CD?: string | null;
  /** 대표발의자코드 */
  RST_MONA_CD?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위처리일 */
  LAW_PROC_DT?: string | null;
  /** 법사위처리결과 */
  LAW_PROC_RESULT_CD?: string | null;
  /** 대표발의자 */
  RST_PROPOSER?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
}

export interface 법률안_심사_및_처리계류의안Response {
  nwbqublzajtcqpdae?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법률안_심사_및_처리계류의안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법률안_심사_및_처리의안검색RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 대 */
  AGE?: string | null;
  /** 의안명(한글) */
  BILL_NAME?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
  /** 위원회심사_처리일 */
  COMMITTEE_PROC_DT?: string | null;
  /** 의안상세정보_URL */
  LINK_URL?: string | null;
  /** 대표발의자 */
  RST_PROPOSER?: string | null;
  /** 법사위처리결과 */
  LAW_PROC_RESULT_CD?: string | null;
  /** 법사위처리일 */
  LAW_PROC_DT?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 소관위처리결과 */
  CMT_PROC_RESULT_CD?: string | null;
  /** 소관위처리일 */
  CMT_PROC_DT?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 대표발의자코드 */
  RST_MONA_CD?: string | null;
  /** 본회의심의결과 */
  PROC_RESULT_CD?: string | null;
  /** 의결일 */
  PROC_DT?: string | null;
}

export interface 법률안_심사_및_처리의안검색Response {
  TVBPMBILL11?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법률안_심사_및_처리의안검색RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회별_소위원회_일정RowItem {
  /** 회의일자 */
  MEETING_DATE?: string | null;
  /** 시간 */
  MEETING_TIME?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DEGREE?: string | null;
  /** 구분 */
  TITLE?: string | null;
  /** 위원회 명 */
  COMMITTEE_NAME?: string | null;
  /** 상세_URL */
  LINK_URL2?: string | null;
  /** 대수 */
  UNIT_CD?: string | null;
  /** 대수 */
  UNIT_NM?: string | null;
  /** 위원회코드 */
  HR_DEPT_CD?: string | null;
  /** 안건 */
  ANGUN?: string | null;
}

export interface 위원회별_소위원회_일정Response {
  nrkqqbvfanfybishu?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회별_소위원회_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 아트갤러리_전시_일정RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 일시 */
  DT?: string | null;
  /** 장소 */
  ETC_CHAR11?: string | null;
  /** 내용 */
  ARTICLE_TEXT?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
}

export interface 아트갤러리_전시_일정Response {
  nptukpvcaxiaaaffa?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 아트갤러리_전시_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 시민의정연수RowItem {
  /** 연수명 */
  EDU_TITLE_NM?: string | null;
  /** 대상자 */
  EDU_OJR?: string | null;
  /** 장소 */
  EDU_PLC_NM?: string | null;
  /** 교육_대상자_구분코드 */
  EDU_GUBUN_CD?: string | null;
  /** 대상구분명 */
  EDU_GUBUN_NM?: string | null;
  /** 정원 */
  EDU_FXDNOPPL?: string | null;
  /** 작성일 */
  CRT_DT?: string | null;
  /** 연수기간 */
  EDU_DT?: string | null;
  /** 신청기간 */
  EDU_APL_DT?: string | null;
  /** 취소가능기간 */
  EDU_APL_CNC_DT?: string | null;
  /** 조회수 */
  EDU_INQ_CNT?: string | null;
}

export interface 시민의정연수Response {
  nmykqpjxamciskklk?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 시민의정연수RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NATV_뉴스_본회의RowItem {
  /** 제목 */
  COMP_MAIN_TITLE?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
  /** 내용 */
  COMP_CONTENT?: string | null;
  /** 상세보기 */
  LINK_URL?: string | null;
}

export interface NATV_뉴스_본회의Response {
  nufjqmgtawuzxhila?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NATV_뉴스_본회의RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서지표로_보는_이슈RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서지표로_보는_이슈Response {
  nduvpkzfatqsoonnc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서지표로_보는_이슈RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_정책연구용역자료RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_정책연구용역자료Response {
  nijtjlghaowvisahk?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_정책연구용역자료RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 계류의안_통계RowItem {
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 헌법개정안건수 */
  CONSTI_RFBIL_CNT?: string | null;
  /** 예산안건수 */
  DRFBD_CNT?: string | null;
  /** 결산건수 */
  STL_CNT?: string | null;
  /** 법률안의원발의건수 */
  LGSLB_ASBLM_PRPSR_CNT?: string | null;
  /** 법률안정부발의건수 */
  LGSLB_GVRN_PRPSR_CNT?: string | null;
  /** 법률안합계 */
  LGSLB_SUM?: string | null;
  /** 동의안건수 */
  AGMB_CNT?: string | null;
  /** 결의안건수 */
  RSLNB_CNT?: string | null;
  /** 건의안건수 */
  PRPSTB_CNT?: string | null;
  /** 규칙안 건수 */
  RULB_CNT?: string | null;
  /** 선출안 건수 */
  ELCTB_CNT?: string | null;
  /** 중요동의 건수 */
  IMPT_AGM_CNT?: string | null;
  /** 의원징계 건수 */
  CMTM_DSCP_CNT?: string | null;
  /** 의원자격심사 건수 */
  CMTM_QLF_INSC_CNT?: string | null;
  /** 기타건수 */
  ETC_CNT?: string | null;
  /** 위원회별합계 */
  CMIT_BY_SUM?: string | null;
}

export interface 계류의안_통계Response {
  BILLCNTRSVT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 계류의안_통계RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_정보_통합_APIRowItem {
  /** 국회의원코드 */
  NAAS_CD?: string | null;
  /** 국회의원명 */
  NAAS_NM?: string | null;
  /** 국회의원한자명 */
  NAAS_CH_NM?: string | null;
  /** 국회의원영문명 */
  NAAS_EN_NM?: string | null;
  /** 생일구분코드 */
  BIRDY_DIV_CD?: string | null;
  /** 생일일자 */
  BIRDY_DT?: string | null;
  /** 직책명 */
  DTY_NM?: string | null;
  /** 정당명 */
  PLPT_NM?: string | null;
  /** 선거구명 */
  ELECD_NM?: string | null;
  /** 선거구구분명 */
  ELECD_DIV_NM?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 소속위원회명 */
  BLNG_CMIT_NM?: string | null;
  /** 재선구분명 */
  RLCT_DIV_NM?: string | null;
  /** 당선대수 */
  GTELT_ERACO?: string | null;
  /** 성별 */
  NTR_DIV?: string | null;
  /** 전화번호 */
  NAAS_TEL_NO?: string | null;
  /** 국회의원이메일주소 */
  NAAS_EMAIL_ADDR?: string | null;
  /** 국회의원홈페이지URL */
  NAAS_HP_URL?: string | null;
  /** 보좌관 */
  AIDE_NM?: string | null;
  /** 비서관 */
  CHF_SCRT_NM?: string | null;
  /** 비서 */
  SCRT_NM?: string | null;
  /** 약력 */
  BRF_HST?: string | null;
  /** 사무실 호실 */
  OFFM_RNUM_NO?: string | null;
  /** 국회의원사진 */
  NAAS_PIC?: string | null;
}

export interface 국회의원_정보_통합_APIResponse {
  ALLNAMEMBER?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_정보_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의원실_행사_정보RowItem {
  /** 국회의원명 */
  NAAS_NM?: string | null;
  /** 행사 제목 */
  EV_TTL?: string | null;
  /** 행사 일시 */
  EV_DTM?: string | null;
  /** 행사 장소 */
  EV_PLC?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 의원실_행사_정보Response {
  NAMEMBEREVENT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의원실_행사_정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회채용정보RowItem {
  /** 소속기관명 */
  BLNG_INST_NM?: string | null;
  /** 제목 */
  BRDI_SJ?: string | null;
  /** 내용 */
  BRDI_CN?: string | null;
  /** 작성일자 */
  RDT?: string | null;
  /** 바로가기URL */
  HOME_URL?: string | null;
}

export interface 국회채용정보Response {
  nswsyvysaidgdhsch?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회채용정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_상임위_활동RowItem {
  /** 대수 */
  DAE_NUM?: string | null;
  /** 회기 */
  SES_NUM?: string | null;
  /** 차수 */
  DEGREE_NUM?: string | null;
  /** 위원회 */
  COMM_NAME?: string | null;
  /** 회의일 */
  CONF_DATE?: string | null;
  /** 안건보기 */
  BILL_URL?: string | null;
  /** 회의종류 */
  CLASS_NAME?: string | null;
}

export interface 국회의원_상임위_활동Response {
  nuvypcdgahexhvrjt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_상임위_활동RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안_위원회심사_회의정보_조회RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자 */
  PPSR?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 소관위원회 심사 회의명 */
  JRCMIT_CONF_NM?: string | null;
  /** 소관위원회 심사 회의일 */
  JRCMIT_CONF_DT?: string | null;
  /** 소관위원회 심사 회의결과 */
  JRCMIT_CONF_RSLT?: string | null;
}

export interface 의안_위원회심사_회의정보_조회Response {
  BILLJUDGECONF?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안_위원회심사_회의정보_조회RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_알림지국회입법조사처보RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_알림지국회입법조사처보Response {
  nezimfsfayvtciyvx?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_알림지국회입법조사처보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안별_회의록_목록RowItem {
  /** 의안 ID */
  BILL_ID?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 회의 종류 */
  CONF_KND?: string | null;
  /** 회의 ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 다운URL */
  DOWN_URL?: string | null;
}

export interface 의안별_회의록_목록Response {
  VCONFBILLCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안별_회의록_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_정보목록RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 첨부파일ID */
  FILE_ID?: string | null;
}

export interface 국회도서관_정보목록Response {
  nksbnuwbamgztpotg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_정보목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 특별위원회_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 특별위원회_회의록Response {
  VCONFSPCCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 특별위원회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회별_전체회의_일정RowItem {
  /** 회의일자 */
  MEETING_DATE?: string | null;
  /** 시간 */
  MEETING_TIME?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DEGREE?: string | null;
  /** 구분 */
  TITLE?: string | null;
  /** 위원회 명 */
  COMMITTEE_NAME?: string | null;
  /** 상세_URL */
  LINK_URL2?: string | null;
  /** 대수 */
  UNIT_CD?: string | null;
  /** 대수 */
  UNIT_NM?: string | null;
  /** 위원회코드 */
  HR_DEPT_CD?: string | null;
  /** 안건 */
  ANGUN?: string | null;
}

export interface 위원회별_전체회의_일정Response {
  nttmdfdcaakvibdar?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회별_전체회의_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NATV_뉴스_토론회세미나RowItem {
  /** 제목 */
  COMP_MAIN_TITLE?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
  /** 내용 */
  COMP_CONTENT?: string | null;
  /** 상세보기 */
  LINK_URL?: string | null;
}

export interface NATV_뉴스_토론회세미나Response {
  nzdppcljavkxnylqs?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NATV_뉴스_토론회세미나RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 수입징수현황수입항별RowItem {
  /** 회계년도 */
  FSCL_YY?: string | null;
  /** 회계월 */
  EXE_M?: string | null;
  /** 회계명 */
  FSCL_NM?: string | null;
  /** 수입관명 */
  IKWAN_NM?: string | null;
  /** 수입항명 */
  IHANG_NM?: string | null;
  /** 예산금액 */
  BDG_AMT?: string | null;
  /** 수납누계금액 */
  RC_AGGR_AMT?: string | null;
  /** 당월수납금액 */
  RC_AMT?: string | null;
}

export interface 수입징수현황수입항별Response {
  nryvgajaaeerxmdyb?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 수입징수현황수입항별RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_브리프형_심층분석_보고서RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 연구 책임자 */
  CHIEF_RESRCH?: string | null;
  /** 작성일 */
  REG_DTTM?: string | null;
  /** 상세 URL */
  DETAIL_URL?: string | null;
}

export interface 국회미래연구원_브리프형_심층분석_보고서Response {
  BRIEF?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_브리프형_심층분석_보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 최근_헌재결정과_개정대상_법률RowItem {
  /** 개정대상법률현황제목 */
  REV_LAW_SITU_TTLL?: string | null;
  /** 작성일자 */
  WRT_DT?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 최근_헌재결정과_개정대상_법률Response {
  CLAWLEGI?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 최근_헌재결정과_개정대상_법률RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_직무상_국외활동_신고_내역RowItem {
  /** 대별코드 */
  UNIT_CD?: string | null;
  /** 성명 */
  PN?: string | null;
  /** 목적사유 */
  PURP_RSON?: string | null;
  /** 일정 */
  SCH_DYS?: string | null;
  /** 목적지 */
  DSTN_NM?: string | null;
  /** 경비지원기관 */
  EXPNS_SUPPT_INST_NM?: string | null;
  /** 결과보고서 */
  REPORT_YN?: string | null;
  /** 대 */
  UNIT_NM?: string | null;
}

export interface 국회의원_직무상_국외활동_신고_내역Response {
  nasnutdbapnfphwyr?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_직무상_국외활동_신고_내역RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 지방의회_연수_교육일정RowItem {
  /** 연수명 */
  EDU_TITLE_NM?: string | null;
  /** 대상자 */
  EDU_OJR?: string | null;
  /** 장소 */
  EDU_PLC_NM?: string | null;
  /** 교육_대상자_구분코드 */
  EDU_GUBUN_CD?: string | null;
  /** 대상구분명 */
  EDU_GUBUN_NM?: string | null;
  /** 정원 */
  EDU_FXDNOPPL?: string | null;
  /** 작성일 */
  CRT_DT?: string | null;
  /** 연수비 */
  EDU_DPSTG_EXPENSE?: string | null;
  /** 연수기간 */
  EDU_DT?: string | null;
  /** 신청기간 */
  EDU_APL_DT?: string | null;
  /** 취소가능기간 */
  EDU_APL_CNC_DT?: string | null;
}

export interface 지방의회_연수_교육일정Response {
  nmkoorezaqwzfsixy?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 지방의회_연수_교육일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 연구단체_연구활동비_집행현황RowItem {
  /** 연도 */
  YEAR?: string | null;
  /** 분야 */
  MAJR?: string | null;
  /** 단체 */
  ORG_NM?: string | null;
  /** 일반수용비(원) */
  NOR_ENTERATM?: string | null;
  /** 사업추진비(원) */
  BUS_GOATM?: string | null;
  /** 특정업무경비(원) */
  SPE_WORKATM?: string | null;
  /** 정책연구비(원) */
  POLICY_RESRCH_ATM?: string | null;
}

export interface 연구단체_연구활동비_집행현황Response {
  nipnblofawwyxdhmx?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 연구단체_연구활동비_집행현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영상회의록_목록RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의시간 */
  CONF_PTM?: string | null;
  /** 회의명 */
  CONF_NM?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 영상회의록_목록Response {
  WEBCASTVCONF?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영상회의록_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_상임위본회의RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_상임위본회의Response {
  ngnldmexasfdsgjaa?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_상임위본회의RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_의원의_맛과멋RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_의원의_맛과멋Response {
  nzsmstfjaswvtbzii?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_의원의_맛과멋RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_겸직_결정_내역RowItem {
  /** 대수 */
  ORD_NUM?: string | null;
  /** 연도 */
  YR?: string | null;
  /** 공개날짜 */
  OPB_DAY?: string | null;
  /** 성명 */
  PN?: string | null;
  /** 겸직기관명 */
  CCOF_INST_NM?: string | null;
  /** 직위 */
  PSIT_NM?: string | null;
  /** 결정 내용 */
  CCOF_PSB_YN_CD?: string | null;
}

export interface 국회의원_겸직_결정_내역Response {
  nahfbzwvatmaxscwq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_겸직_결정_내역RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_위원회_의사일정RowItem {
  /** 일정종류 */
  SCH_KIND?: string | null;
  /** 일정내용 */
  SCH_CN?: string | null;
  /** 일자 */
  SCH_DT?: string | null;
  /** 시간 */
  SCH_TM?: string | null;
  /** 회의구분 */
  CONF_DIV?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 회의회기 */
  CONF_SESS?: string | null;
  /** 회의차수 */
  CONF_DGR?: string | null;
}

export interface 국회의원_위원회_의사일정Response {
  NAMEMBERCMITSCHEDULE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_위원회_의사일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 처리_의안통계위원회별RowItem {
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 접수건수 */
  RCP_CNT?: string | null;
  /** 처리건수 */
  PROC_CNT?: string | null;
  /** 보류건수 */
  RSVT_CNT?: string | null;
}

export interface 처리_의안통계위원회별Response {
  BILLCNTCMIT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 처리_의안통계위원회별RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국정조사_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 국정조사_회의록Response {
  VCONFPIPCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국정조사_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국정감사_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 국정감사_회의록Response {
  VCONFAPIGCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국정감사_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회방송_편성표RowItem {
  /** 부제 */
  ADD_DISCRIPT?: string | null;
  /** 방송프로그램 */
  PRO_TITLE?: string | null;
  /** 링크 */
  LINK_URL?: string | null;
  /** 방영시간 */
  FORMATION_TIME?: string | null;
  /** 방영일자 */
  FORMATION_DT?: string | null;
}

export interface 국회방송_편성표Response {
  noqtcnaiatcpgepvt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회방송_편성표RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회_보유_자산건물RowItem {
  /** 구분 */
  DIV_NM?: string | null;
  /** 건물 */
  BLDG_NM?: string | null;
  /** 면적(㎡) */
  ARE?: string | null;
  /** 면적(평) */
  FLSP?: string | null;
  /** 금액 */
  AMT?: string | null;
  /** 년도 */
  YR?: string | null;
}

export interface 국회_보유_자산건물Response {
  noahbdisawgzvhooq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회_보유_자산건물RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 퇴직_공직자_취업이력_공시RowItem {
  /** 연도 */
  YR?: string | null;
  /** 성명 */
  PN?: string | null;
  /** 퇴직일 */
  RTR_DT?: string | null;
  /** 퇴직 시 직위 */
  RTR_THEN_PSIT_NM?: string | null;
  /** 취업기관 */
  GETJOB_INST_NM?: string | null;
  /** 취업일 */
  GETJOB_DT?: string | null;
  /** 직위 */
  PSIT_NM?: string | null;
}

export interface 퇴직_공직자_취업이력_공시Response {
  nzkepuxpasyzvbrsu?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 퇴직_공직자_취업이력_공시RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서국정감사관련보고서RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서국정감사관련보고서Response {
  nlfmqyizaorhysrgf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서국정감사관련보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_경제ㆍ산업동향_이슈RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_경제ㆍ산업동향_이슈Response {
  nsenmxrjatgxxndrm?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_경제ㆍ산업동향_이슈RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 연차보고서RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 보고서제목명 */
  RPT_TTL?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 제출기관명 */
  SBM_INST_NM?: string | null;
  /** 접수일 */
  RCP_DT?: string | null;
  /** 이송일 */
  TRSF_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 연차보고서Response {
  BILLREPORT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 연차보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 현안외국에선RowItem {
  /** 발간물 제목 */
  PBLM_TTL?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 현안외국에선Response {
  NANETPBLMLEGI?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 현안외국에선RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 예결산특별위원회_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 예결산특별위원회_회의록Response {
  VCONFBUDGETCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 예결산특별위원회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 전원위원회_회의록RowItem {
  /** 회의번호 */
  CONFER_NUM?: string | null;
  /** 회의명 */
  TITLE?: string | null;
  /** 회의종류명 */
  CLASS_NAME?: string | null;
  /** 대수 */
  DAE_NUM?: string | null;
  /** 회의날짜 */
  CONF_DATE?: string | null;
  /** 안건명 */
  SUB_NAME?: string | null;
  /** 영상회의록 링크 */
  VOD_LINK_URL?: string | null;
  /** 요약정보 팝업 */
  CONF_LINK_URL?: string | null;
  /** PDF파일 링크 */
  PDF_LINK_URL?: string | null;
}

export interface 전원위원회_회의록Response {
  ngytonzwavydlbbha?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 전원위원회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회예산정책처_제공_자료_통합_APIRowItem {
  /** 발간자료구분 */
  MTR_DIV?: string | null;
  /** 발간자료제목 */
  MTR_TTL?: string | null;
  /** 작성부서 */
  WRT_DEPT?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 국회예산정책처_제공_자료_통합_APIResponse {
  ALLNABOPBLM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회예산정책처_제공_자료_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 예산춘추RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface 예산춘추Response {
  nbxjdyrjaommhkiza?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 예산춘추RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 입법고시5급_채용현황RowItem {
  /** 연도 */
  YR?: string | null;
  /** 직류 */
  JBTP_NM?: string | null;
  /** 채용인원 */
  ADPT_NOP?: string | null;
  /** 경쟁률 */
  CMPT_RT?: string | null;
}

export interface 입법고시5급_채용현황Response {
  nujtkaefaqkaqvsdm?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 입법고시5급_채용현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_의원실_행사RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_의원실_행사Response {
  nkulntiravezskrjd?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_의원실_행사RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_대한민국_공공기관RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_대한민국_공공기관Response {
  nmwywvbbajlawfrsk?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_대한민국_공공기관RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_행정정보_공표목록RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 분류항목코드 */
  CTGR_CD?: string | null;
  /** 분류항목 */
  CTGR_NM?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회도서관_행정정보_공표목록Response {
  ndauywbhawaofrtlq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_행정정보_공표목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 처리_의안통계위원회별_법률안RowItem {
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 헌법개정안건수 */
  RCP_CNT?: string | null;
  /** 예산안건수 */
  PROC_CNT?: string | null;
  /** 동의안건수 */
  REFT_SUBT?: string | null;
  /** 결산건수 */
  OBIL_PSSG_CNT?: string | null;
  /** 법률안의원발의건수 */
  AMND_PSSG_CNT?: string | null;
  /** 법률안정부발의건수 */
  ALTPL_REFT_CNT?: string | null;
  /** 법률안합계 */
  AMND_REFT_CNT?: string | null;
  /** 의원징계건수 */
  UN_REFT_SUBT?: string | null;
  /** 결의안건수 */
  RJCTN_CNT?: string | null;
  /** 건의안건수 */
  DSU_CNT?: string | null;
  /** 규칙안건수 */
  WTHD_CNT?: string | null;
  /** 선출안건수 */
  GVB_CNT?: string | null;
  /** 중요동의건수 */
  ETC_CNT?: string | null;
  /** 의원자격심사건수 */
  RSVT_CNT?: string | null;
}

export interface 처리_의안통계위원회별_법률안Response {
  BILLCNTLAWCMIT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 처리_의안통계위원회별_법률안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서NARS_현안분석RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서NARS_현안분석Response {
  nvkfeqbsacvlzjmea?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서NARS_현안분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_정보공개청구_처리현황_목록RowItem {
  /** 년도 */
  YR?: string | null;
  /** 일련번호 */
  SN?: string | null;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string | null;
  /** 청구사항>공개형태 */
  OPB_FOM_NM?: string | null;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string | null;
  /** 결정내용>결정구분 */
  DCS_DIV?: string | null;
  /** 결정내용>공개내용 */
  OPB_RSON?: string | null;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string | null;
  /** 결정내용>결정통지일자 */
  DCS_NTC_DT?: string | null;
  /** 처리사항>공개일자 */
  OPB_DT?: string | null;
  /** 처리사항>공개방법 */
  OPB_MTH?: string | null;
}

export interface 국회입법조사처_정보공개청구_처리현황_목록Response {
  nzygztwjapjjxayhe?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_정보공개청구_처리현황_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회사무처_업무추진비_집행현황RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회사무처_업무추진비_집행현황Response {
  nalacaiwauxiynsxt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회사무처_업무추진비_집행현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_연구단체_등록현황RowItem {
  /** 대수 */
  REGDAESU?: string | null;
  /** 분야별 */
  RE_TOPIC_NAME?: string | null;
  /** 연구단체 */
  RE_NAME?: string | null;
  /** 연구목적 */
  RE_OBJECTIVE?: string | null;
  /** 대표의원 */
  MAIN_MEM?: string | null;
  /** 연구책임의원 */
  RE_MEM?: string | null;
  /** 구성의원 */
  OBJ_MEM?: string | null;
  /** 구성인원 */
  MEMBER_CNT?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
}

export interface 국회의원_연구단체_등록현황Response {
  numwhtqhavaqssfle?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_연구단체_등록현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface grade_8급_공개경쟁_채용현황RowItem {
  /** 연도 */
  YR?: string | null;
  /** 직류 */
  JBTP_NM?: string | null;
  /** 채용인원 */
  ADPT_NOP?: string | null;
  /** 경쟁률 */
  CMPT_RT?: string | null;
}

export interface grade_8급_공개경쟁_채용현황Response {
  nlhssknfaoxiofyix?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: grade_8급_공개경쟁_채용현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회_계류법률안RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명(한글) */
  BILL_NAME?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 링크주소 */
  URL?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위처리일 */
  LAW_PROC_DT?: string | null;
  /** 법사위처리결과 */
  LAW_PROC_RESULT_CD?: string | null;
  /** 대표발의자 */
  RST_PROPOSER?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 소관위처리결과 */
  CMT_PROC_RESULT_CD?: string | null;
  /** 소관위처리일 */
  CMT_PROC_DT?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 대표발의자코드 */
  RST_MONA_CD?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 대(현) */
  AGE?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
}

export interface 위원회_계류법률안Response {
  ndiwuqmpambgvnfsj?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회_계류법률안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_기타자료RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_기타자료Response {
  ngsyzvtlaqffhhthc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_기타자료RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_기타_행정정보_공표RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 분류항목코드 */
  CTGR_CD?: string | null;
  /** 분류항목 */
  CTGR_NM?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회도서관_기타_행정정보_공표Response {
  ncfunqmvaeyhftgsq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_기타_행정정보_공표RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 인사청문회_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 인사청문회_회의록Response {
  VCONFCFRMCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 인사청문회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 회기정보RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 회기시작일 */
  SESS_BG_DT?: string | null;
  /** 회기종료일 */
  SESS_ED_DT?: string | null;
}

export interface 회기정보Response {
  BILLSESSPROD?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 회기정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영문위원회_정보RowItem {
  /** 위원회구분코드 */
  CMIT_DIV_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 위원장명 */
  CRMN_NM?: string | null;
  /** 위원회 의원정수 */
  CMTM_PSNUM?: string | null;
  /** 현위원수 */
  CMTM_CNT?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 영문위원회_정보Response {
  ENCMITINFO?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영문위원회_정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NATV_뉴스_정당RowItem {
  /** 제목 */
  COMP_MAIN_TITLE?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
  /** 내용 */
  COMP_CONTENT?: string | null;
  /** 상세보기 */
  LINK_URL?: string | null;
}

export interface NATV_뉴스_정당Response {
  nbzyjjyoamdqqjorw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NATV_뉴스_정당RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_본회의_의사일정RowItem {
  /** 일정종류 */
  SCH_KIND?: string | null;
  /** 일정내용 */
  SCH_CN?: string | null;
  /** 일자 */
  SCH_DT?: string | null;
  /** 시간 */
  SCH_TM?: string | null;
  /** 회의구분 */
  CONF_DIV?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 회의회기 */
  CONF_SESS?: string | null;
  /** 회의차수 */
  CONF_DGR?: string | null;
}

export interface 국회의원_본회의_의사일정Response {
  NAMEMBERLEGISCHEDULE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_본회의_의사일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_경제_정책_및_동향_분석RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_경제_정책_및_동향_분석Response {
  nlugechzaowgqlopk?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_경제_정책_및_동향_분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_미래생각RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 작성자 */
  WRITER?: string | null;
  /** 작성일 */
  REG_DTTM?: string | null;
  /** 상세 URL */
  DETAIL_URL?: string | null;
}

export interface 국회미래연구원_미래생각Response {
  THINKING?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_미래생각RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_인적사항RowItem {
  /** 이름 */
  HG_NM?: string | null;
  /** 한자명 */
  HJ_NM?: string | null;
  /** 영문명칭 */
  ENG_NM?: string | null;
  /** 음/양력 */
  BTH_GBN_NM?: string | null;
  /** 생년월일 */
  BTH_DATE?: string | null;
  /** 직책명 */
  JOB_RES_NM?: string | null;
  /** 정당명 */
  POLY_NM?: string | null;
  /** 선거구 */
  ORIG_NM?: string | null;
  /** 선거구구분 */
  ELECT_GBN_NM?: string | null;
  /** 대표 위원회 */
  CMIT_NM?: string | null;
  /** 소속 위원회 목록 */
  CMITS?: string | null;
  /** 재선 */
  REELE_GBN_NM?: string | null;
  /** 당선 */
  UNITS?: string | null;
  /** 성별 */
  SEX_GBN_NM?: string | null;
  /** 전화번호 */
  TEL_NO?: string | null;
  /** 이메일 */
  E_MAIL?: string | null;
  /** 홈페이지 */
  HOMEPAGE?: string | null;
  /** 보좌관 */
  STAFF?: string | null;
  /** 선임비서관 */
  SECRETARY?: string | null;
  /** 비서관 */
  SECRETARY2?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
  /** 약력 */
  MEM_TITLE?: string | null;
  /** 사무실 호실 */
  ASSEM_ADDR?: string | null;
}

export interface 국회의원_인적사항Response {
  nwvrqwxyaytdsfvhu?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_인적사항RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안_법사위_회의정보_조회RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자 */
  PPSR?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 법사위 회의명 */
  LWCMIT_CONF_NM?: string | null;
  /** 법사위 회의일 */
  LWCMIT_CONF_DT?: string | null;
  /** 법사위 회의결과 */
  LWCMIT_CONF_RSLT?: string | null;
}

export interface 의안_법사위_회의정보_조회Response {
  BILLLWJUDGECONF?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안_법사위_회의정보_조회RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_조세수첩RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_조세수첩Response {
  nfhoxrreafqmtsesg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_조세수첩RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 대한민국_조세RowItem {
  /** 발간물 제목 */
  PBLM_TTL?: string | null;
  /** 작성부서 */
  WRT_DEPT?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 대한민국_조세Response {
  NABOPBLMTAXGOV?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 대한민국_조세RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 예결산_예비심사_정보_조회RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자구분 */
  PPSR_KIND?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 예비심사 위원회명 */
  ADCMIT_NM?: string | null;
  /** 예비심사 회부일 */
  ADCMIT_CMMT_DT?: string | null;
  /** 예비심사 상정일 */
  ADCMIT_PRSNT_DT?: string | null;
  /** 예비심사 의결일 */
  ADCMIT_PROC_DT?: string | null;
  /** 예비심사 결과 */
  ADCMIT_PROC_RSLT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 예결산_예비심사_정보_조회Response {
  BUDGETADJUDGE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 예결산_예비심사_정보_조회RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 대통령취임연설_포함_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 대통령취임연설_포함_회의록Response {
  VCONFDNACONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 대통령취임연설_포함_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청원_심사정보RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 청원ID */
  PTT_ID?: string | null;
  /** 청원번호 */
  PTT_NO?: string | null;
  /** 청원명 */
  PTT_NM?: string | null;
  /** 청원종류 */
  PTT_KIND?: string | null;
  /** 청원자명 */
  PTTR_NM?: string | null;
  /** 소개의원명 */
  INTD_ASBLM_NM?: string | null;
  /** 국민동의건수 */
  CITZN_AGM_CNT?: string | null;
  /** 접수일 */
  RCP_DT?: string | null;
  /** 소관위원회명 */
  JRCMIT_NM?: string | null;
  /** 소관위원회 회부일 */
  JRCMIT_CMMT_DT?: string | null;
  /** 소관위원회 상정일 */
  JRCMIT_PRSNT_DT?: string | null;
  /** 소관위원회 처리일 */
  JRCMIT_PROC_DT?: string | null;
  /** 소관위원회 처리결과 */
  JRCMIT_PROC_RSLT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 청원_심사정보Response {
  PTTJUDGE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청원_심사정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_국회는_지금RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_국회는_지금Response {
  nkyhxppmamrzejhij?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_국회는_지금RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서입법영향분석보고서RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서입법영향분석보고서Response {
  nusxjbgeahffxfrzl?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서입법영향분석보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영문국회의원_정보RowItem {
  /** 국회의원 영문명 */
  NAAS_EN_NM?: string | null;
  /** 성별 */
  NTR_DIV?: string | null;
  /** 생일구분코드 */
  BTH_GBN_NM?: string | null;
  /** 생일일자 */
  BIRDY_DT?: string | null;
  /** 정당명 */
  PLPT_NM?: string | null;
  /** 선거구명 */
  ELECD_NM?: string | null;
  /** 선거구구분명 */
  ELECD_DIV_NM?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 위원회 직책명 */
  CMIT_DTY_NM?: string | null;
  /** 소속위원회명 */
  BLNG_CMIT_NM?: string | null;
  /** 재선구분명 */
  RLCT_DIV_NM?: string | null;
  /** 당선횟수 */
  GTELT_TMS?: string | null;
  /** 국회의원전화번호 */
  NAAS_TEL_NO?: string | null;
  /** 국회의원이메일주소 */
  NAAS_EMAIL_ADDR?: string | null;
  /** 국회의원홈페이지URL */
  NAAS_HP_URL?: string | null;
}

export interface 영문국회의원_정보Response {
  ENNAMEMBER?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영문국회의원_정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법률안_심사_및_처리본회의부의안건RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 의결일 */
  PROC_DT?: string | null;
  /** 소관위처리결과 */
  COMMITTEE_RESULT?: string | null;
  /** 상세정보_URL */
  LINK_URL?: string | null;
  /** 소관위처리일 */
  COMMITTEE_PROC_DT?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위처리일 */
  LAW_PROC_DT?: string | null;
  /** 법사위처리결과 */
  LAW_PROC_RESULT_CD?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
}

export interface 법률안_심사_및_처리본회의부의안건Response {
  nayjnliqaexiioauy?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법률안_심사_및_처리본회의부의안건RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청원_상세정보RowItem {
  /** 청원ID */
  PTT_ID?: string | null;
  /** 청원번호 */
  PTT_NO?: string | null;
  /** 청원명 */
  PTT_NM?: string | null;
  /** 청원종류 */
  PTT_KIND?: string | null;
  /** 청원자명 */
  PTTR_NM?: string | null;
  /** 소개의원명 */
  INTD_ASBLM_NM?: string | null;
  /** 국민동의건수 */
  CITZN_AGM_CNT?: string | null;
  /** 접수일 */
  RCP_DT?: string | null;
  /** 소관위원회명 */
  JRCMIT_NM?: string | null;
  /** 소관위원회 회부일 */
  JRCMIT_CMMT_DT?: string | null;
  /** 소관위원회 상정일 */
  JRCMIT_PRSNT_DT?: string | null;
  /** 소관위원회 처리일 */
  JRCMIT_PROC_DT?: string | null;
  /** 소관위원회 처리결과 */
  JRCMIT_PROC_RSLT?: string | null;
  /** 본회의 심의 상정일 */
  RGS_PRSNT_DT?: string | null;
  /** 본회의 심의 의결일 */
  RGS_RSLN_DT?: string | null;
  /** 본회의 심의 회의명 */
  RGS_CONF_NM?: string | null;
  /** 본회의 심의결과 */
  RGS_CONF_RSLT?: string | null;
  /** 정부 이송일 */
  GVRN_TRSF_DT?: string | null;
  /** 정부 부처명 */
  GVRN_OC_NM?: string | null;
  /** 정부처리결과 보고일 */
  GVRN_RSLT_DT?: string | null;
  /** 처리 통지일 */
  PROC_NTC_DT?: string | null;
  /** 달성도 */
  ACHV_RATIO?: string | null;
}

export interface 청원_상세정보Response {
  PTTINFODETAIL?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청원_상세정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회_정당별_국회의원_지역분포RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 정당명 */
  PLPT_NM?: string | null;
  /** 서울 */
  SEOUL?: string | null;
  /** 부산 */
  BUSAN?: string | null;
  /** 대구 */
  DEAGU?: string | null;
  /** 인천 */
  INCHUN?: string | null;
  /** 광주 */
  GWANGJU?: string | null;
  /** 대전 */
  DEAJUN?: string | null;
  /** 울산 */
  ULSAN?: string | null;
  /** 세종 */
  SEJONG?: string | null;
  /** 경기 */
  GYUNGGI?: string | null;
  /** 강원 */
  GANGWON?: string | null;
  /** 충북 */
  CHUNGBUK?: string | null;
  /** 충남 */
  CHUNGNAM?: string | null;
  /** 전북 */
  JUNBUK?: string | null;
  /** 전남 */
  JUNNAM?: string | null;
  /** 경북 */
  KYUNGBUK?: string | null;
  /** 경남 */
  KYUNGNAM?: string | null;
  /** 제주 */
  JEJU?: string | null;
  /** 통일주체국민회의 */
  TNCFUCT?: string | null;
  /** 비례 */
  PRPR?: string | null;
  /** 합계 */
  SUM?: string | null;
  /** 비고 */
  RMK?: string | null;
}

export interface 역대_국회_정당별_국회의원_지역분포Response {
  nvarpwrqaklzxcmmp?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회_정당별_국회의원_지역분포RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 서면질의답변서_목록RowItem {
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의ID */
  CONF_ID?: string | null;
  /** 파일종류 */
  FILE_KND?: string | null;
  /** 파일설명 */
  FILE_CN?: string | null;
  /** 다운URL */
  DOWN_URL?: string | null;
}

export interface 서면질의답변서_목록Response {
  VCONFATTQNALIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 서면질의답변서_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회문화극장_영화_일정RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 관람예약 */
  RE_DT?: string | null;
  /** 일시 */
  DT?: string | null;
  /** 장소 */
  ETC_CHAR11?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
}

export interface 국회문화극장_영화_일정Response {
  nfzxkpetatunooatq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회문화극장_영화_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_발행물_및_보고서RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_발행물_및_보고서Response {
  nyazvvwaarapcotdp?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_발행물_및_보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 지출집행현황단위사업별RowItem {
  /** 회계년도 */
  FSCL_YY?: string | null;
  /** 집행월 */
  EXE_M?: string | null;
  /** 회계명 */
  FSCL_NM?: string | null;
  /** 분야명 */
  FLD_NM?: string | null;
  /** 부문명 */
  SECT_NM?: string | null;
  /** 프로그램명 */
  PGM_NM?: string | null;
  /** 단위사업명 */
  ACTV_NM?: string | null;
  /** 예산 */
  ANEXP_BDG_CAMT?: string | null;
  /** 당월집행액 */
  EP_AMT?: string | null;
  /** 누계집행액 */
  THISM_AGGR_EP_AMT?: string | null;
}

export interface 지출집행현황단위사업별Response {
  nqflguqiachajqpaq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 지출집행현황단위사업별RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영문최신_처리_의안RowItem {
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자구분명 */
  PPSR_KIND_NM?: string | null;
  /** 제안일자 */
  PPSL_DT?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 본회의의결일자 */
  MSESS_RSLN_DT?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 영문최신_처리_의안Response {
  ENBCONFBILL?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영문최신_처리_의안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 본회의_처리안건_결산RowItem {
  /** 대수 */
  AGE?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 의안활동구분 */
  BILL_KIND?: string | null;
  /** 의결결과 */
  PROC_RESULT_CD?: string | null;
  /** 총투표수 */
  VOTE_TCNT?: string | null;
  /** 찬성표수 */
  YES_TCNT?: string | null;
  /** 반대수 */
  NO_TCNT?: string | null;
  /** 기권수 */
  BLANK_TCNT?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 예결위심사_회부일 */
  BDG_SUBMIT_DT?: string | null;
  /** 예결위심사_상정일 */
  BDG_PRESENT_DT?: string | null;
  /** 예결위심사_의결일 */
  BDG_PROC_DT?: string | null;
  /** 본회의심의_상정일 */
  RGS_PRESENT_DT?: string | null;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string | null;
  /** 정부이송일 */
  CURR_TRANS_DT?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위원회 */
  COMMITTEE_NM?: string | null;
}

export interface 본회의_처리안건_결산Response {
  nkalemivaqmoibxro?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 본회의_처리안건_결산RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회별_개정대상_법률_현황RowItem {
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 위헌 개수 */
  UNCS_CNT?: string | null;
  /** 헌법 불일치 개수 */
  CLAW_MIS_CNT?: string | null;
  /** 헌법 불일치 개정시한 경과 개수 */
  OVER_CLAW_MIS_CNT?: string | null;
}

export interface 위원회별_개정대상_법률_현황Response {
  CLAWSTATE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회별_개정대상_법률_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 시정_및_처리_요구사항에_대한_결과보고서RowItem {
  /** 보고서 년도 */
  RPT_YR?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 보고서 제목 */
  RPT_TTL?: string | null;
  /** PDF 다운 URL */
  PDF_DWLD_URL?: string | null;
  /** HWP 다운 URL */
  HWP_DWLD_URL?: string | null;
}

export interface 시정_및_처리_요구사항에_대한_결과보고서Response {
  AUDITREPORTVISIBILITY?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 시정_및_처리_요구사항에_대한_결과보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_제공_자료_통합_APIRowItem {
  /** 발간자료구분 */
  MTR_DIV?: string | null;
  /** 발간자료제목 */
  MTR_TTL?: string | null;
  /** 출판사 */
  PUBLCO_NM?: string | null;
  /** 출판년도 */
  PUBLCO_YEAR?: string | null;
  /** 담당자 */
  AUT_NM?: string | null;
  /** 미래포럼 패널 */
  FRUM_PANL_NM?: string | null;
  /** 미래포럼 개최일 */
  FRUM_OPB_DT?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 국회미래연구원_제공_자료_통합_APIResponse {
  ALLNAFIPBLM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_제공_자료_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 예결산_종합심사_회의정보_조회RowItem {
  /** 종합심사 회의결과 */
  BDG_CONF_RSLT?: string | null;
  /** 종합심사 회의일 */
  BDG_CONF_DT?: string | null;
  /** 종합심사 회의명 */
  BDG_CONF_NM?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 제안자 */
  PPSR?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
}

export interface 예결산_종합심사_회의정보_조회Response {
  BUDGETJUDGECONF?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 예결산_종합심사_회의정보_조회RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회별_공청회_일정RowItem {
  /** 회의일자 */
  MEETING_DATE?: string | null;
  /** 시간 */
  MEETING_TIME?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DEGREE?: string | null;
  /** 구분 */
  TITLE?: string | null;
  /** 위원회 명 */
  COMMITTEE_NAME?: string | null;
  /** 상세_URL */
  LINK_URL2?: string | null;
  /** 대수 */
  UNIT_CD?: string | null;
  /** 대수 */
  UNIT_NM?: string | null;
  /** 위원회코드 */
  HR_DEPT_CD?: string | null;
  /** 안건 */
  ANGUN?: string | null;
}

export interface 위원회별_공청회_일정Response {
  napvpafracrdkxmoq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회별_공청회_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안정보_통합_APIRowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안종류 */
  BILL_KND?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자구분 */
  PPSR_KND?: string | null;
  /** 제안자명 */
  PPSR_NM?: string | null;
  /** 제안회기 */
  PPSL_SESS?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 소관위원회명 */
  JRCMIT_NM?: string | null;
  /** 소관위원회 회부일 */
  JRCMIT_CMMT_DT?: string | null;
  /** 소관위원회 상정일 */
  JRCMIT_PRSNT_DT?: string | null;
  /** 소관위원회 처리일 */
  JRCMIT_PROC_DT?: string | null;
  /** 소관위원회 처리결과 */
  JRCMIT_PROC_RSLT?: string | null;
  /** 법사위 체계자구심사 회부일 */
  LAW_CMMT_DT?: string | null;
  /** 법사위 체계자구심사 상정일 */
  LAW_PRSNT_DT?: string | null;
  /** 법사위 체계자구심사 처리일 */
  LAW_PROC_DT?: string | null;
  /** 법사위 체계자구심사 처리결과 */
  LAW_PROC_RSLT?: string | null;
  /** 본회의 심의 상정일 */
  RGS_PRSNT_DT?: string | null;
  /** 본회의 심의 의결일 */
  RGS_RSLN_DT?: string | null;
  /** 본회의 심의 회의명 */
  RGS_CONF_NM?: string | null;
  /** 본회의 심의결과 */
  RGS_CONF_RSLT?: string | null;
  /** 정부 이송일 */
  GVRN_TRSF_DT?: string | null;
  /** 공포 법률명 */
  PROM_LAW_NM?: string | null;
  /** 공포일 */
  PROM_DT?: string | null;
  /** 공포번호 */
  PROM_NO?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 의안정보_통합_APIResponse {
  ALLBILL?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안정보_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회박물관_행사_일정RowItem {
  /** 행사제목 */
  ARTC_TTL?: string | null;
  /** 행사 시작 일자 */
  AVDV_START_DT?: string | null;
  /** 행사 종료 일자 */
  AVDV_END_DT?: string | null;
  /** 장소명 */
  PLC_NM?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 국회박물관_행사_일정Response {
  EVENTSCHEDULEMUSEUM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회박물관_행사_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 본회의_처리안건_예산안RowItem {
  /** 대수 */
  AGE?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 의안활동구분 */
  BILL_KIND?: string | null;
  /** 의결결과 */
  PROC_RESULT_CD?: string | null;
  /** 총투표수 */
  VOTE_TCNT?: string | null;
  /** 찬성표수 */
  YES_TCNT?: string | null;
  /** 반대수 */
  NO_TCNT?: string | null;
  /** 기권수 */
  BLANK_TCNT?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 예결위심사_회부일 */
  BDG_SUBMIT_DT?: string | null;
  /** 예결위심사_상정일 */
  BDG_PRESENT_DT?: string | null;
  /** 예결위심사_의결일 */
  BDG_PROC_DT?: string | null;
  /** 본회의심의_상정일 */
  RGS_PRESENT_DT?: string | null;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string | null;
  /** 정부이송일 */
  CURR_TRANS_DT?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위원회 */
  COMMITTEE_NM?: string | null;
}

export interface 본회의_처리안건_예산안Response {
  nzgjnvnraowulzqwl?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 본회의_처리안건_예산안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_정책_세미나_개최_현황RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 구분 */
  SEMINAR_DIV_CODE?: string | null;
  /** 개최일시 */
  HOST_DT?: string | null;
  /** 장소 */
  HOST_PLACE_NAME?: string | null;
  /** 주최 */
  HOST_INS_NAME?: string | null;
  /** 발제자 */
  ATTENDANCE_NAME1?: string | null;
  /** 토론자 */
  ATTENDANCE_NAME2?: string | null;
  /** 상세보기URL */
  DETAIL_VIEW_URL?: string | null;
}

export interface 국회의원_정책_세미나_개최_현황Response {
  nbqbmccpamsvwebkn?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_정책_세미나_개최_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 실시간_의사중계_현황RowItem {
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 회의명 */
  CONF_NM?: string | null;
  /** 생중계상태 */
  LBRD_STAT?: string | null;
}

export interface 실시간_의사중계_현황Response {
  WEBCASTREALTIEM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 실시간_의사중계_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_청원현황RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 청원번호 */
  PTT_NO?: string | null;
  /** 청원제목 */
  PTT_TTL?: string | null;
  /** 청원자명 */
  PTTR_NM?: string | null;
  /** 소개의원명 */
  INTD_ASBLM_NM?: string | null;
  /** 접수일자 */
  RCP_DT?: string | null;
  /** 소관위원회회부일 */
  JRCMIT_CMMT_DT?: string | null;
  /** 소관위원회명 */
  JRCMIT_NM?: string | null;
  /** 의결일자 */
  RSLN_DT?: string | null;
  /** 의결결과 */
  RSLN_RSLT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 국회의원_청원현황Response {
  NAMEMBERLEGIPTT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_청원현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국정감사_결과보고서RowItem {
  /** 보고서 년도 */
  RPT_YR?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 보고서 제목 */
  RPT_TTL?: string | null;
  /** PDF 다운 URL */
  PDF_DWLD_URL?: string | null;
  /** HWP 다운 URL */
  HWP_DWLD_URL?: string | null;
}

export interface 국정감사_결과보고서Response {
  AUDITREPORTRESULT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국정감사_결과보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 외빈연설_포함_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 외빈연설_포함_회의록Response {
  VCONFFDCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 외빈연설_포함_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법제실_발간자료RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 작성자 */
  WRITER_NM?: string | null;
  /** 분류번호 */
  CATEGORY_ID?: string | null;
  /** 구분 */
  CATEGORY_NM?: string | null;
  /** 등록일 */
  CREATE_DT?: string | null;
  /** 상세보기URL */
  LINK_URL?: string | null;
}

export interface 법제실_발간자료Response {
  npvzeftnakulkqsfg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법제실_발간자료RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회발간물_통합_APIRowItem {
  /** 발간자료구분 */
  MTR_DIV?: string | null;
  /** 발간자료제목 */
  MTR_TTL?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 국회발간물_통합_APIResponse {
  ALLNASPBLM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회발간물_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_미래칼럼RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 작성자 */
  WRITER?: string | null;
  /** 작성일 */
  REG_DTTM?: string | null;
  /** 상세 URL */
  DETAIL_URL?: string | null;
}

export interface 국회미래연구원_미래칼럼Response {
  COLUMN?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_미래칼럼RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_행정감시_행정정보_공표RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 분류항목코드 */
  CTGR_CD?: string | null;
  /** 분류항목 */
  CTGR_NM?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회도서관_행정감시_행정정보_공표Response {
  nmpmwlsxaavvjbizm?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_행정감시_행정정보_공표RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 처리_의안통계의안종류별ㆍ위원회별RowItem {
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 예산안건수 */
  DRFBD_CNT?: string | null;
  /** 결산건수 */
  STL_CNT?: string | null;
  /** 법률안의원발의건수 */
  LGSLB_ASBLM_PRPSR_CNT?: string | null;
  /** 법률안정부발의건수 */
  LGSLB_GVRN_PRPSR_CNT?: string | null;
  /** 법률안합계 */
  LGSLB_SUM?: string | null;
  /** 동의안건수 */
  AGMB_CNT?: string | null;
  /** 결의안 일반 건수 */
  RSLNB_GN_CNT?: string | null;
  /** 결의안 감사요구 건수 */
  RSLNB_ADIT_REQ_CNT?: string | null;
  /** 결의안 소계 */
  RSLNB_SUBT?: string | null;
  /** 건의안건수 */
  PRPSTB_CNT?: string | null;
  /** 규칙안 건수 */
  RULB_CNT?: string | null;
  /** 선출안 건수 */
  ELCTB_CNT?: string | null;
  /** 중요동의 건수 */
  IMPT_AGM_CNT?: string | null;
  /** 의원징계 건수 */
  CMTM_DSCP_CNT?: string | null;
  /** 의원자격심사 건수 */
  CMTM_QLF_INSC_CNT?: string | null;
  /** 위원회별합계 */
  CMIT_BY_SUM?: string | null;
}

export interface 처리_의안통계의안종류별ㆍ위원회별Response {
  BILLCNTLAWDIV?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 처리_의안통계의안종류별ㆍ위원회별RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회_기자회견장_사용현황RowItem {
  /** 일시 */
  USE_START_DT?: string | null;
  /** 사용권자 */
  USER_NM?: string | null;
  /** 당명 */
  POLY_NM?: string | null;
  /** 내용 */
  CONT?: string | null;
}

export interface 국회_기자회견장_사용현황Response {
  TBPRESSCONF?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회_기자회견장_사용현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회예산정책처_연차보고서RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 분야 */
  ETC_CATE2?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface 국회예산정책처_연차보고서Response {
  nkcyfxwnanwqvlysg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회예산정책처_연차보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청원_계류현황RowItem {
  /** 청원번호 */
  BILL_NO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 대 */
  AGE?: string | null;
  /** 청원명 */
  BILL_NAME?: string | null;
  /** 청원인 */
  PROPOSER?: string | null;
  /** 소개의원 */
  APPROVER?: string | null;
  /** 접수일자 */
  PROPOSE_DT?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 위원회회부일 */
  COMMITTEE_DT?: string | null;
  /** 상세보기URL */
  LINK_URL?: string | null;
}

export interface 청원_계류현황Response {
  nvqbafvaajdiqhehi?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청원_계류현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의원연맹별_보조금_예산RowItem {
  /** 년도 */
  YR?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 예산총액 */
  BDG_TAMT?: string | null;
}

export interface 의원연맹별_보조금_예산Response {
  nvnqdhtcagefwecad?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의원연맹별_보조금_예산RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 사업별_예산_편성_규모RowItem {
  /** 년도 */
  YR?: string | null;
  /** 사업명 */
  BZ_NM?: string | null;
  /** 예산총액(원) */
  BDG_TAMT?: string | null;
}

export interface 사업별_예산_편성_규모Response {
  nztwkhgzakucszgls?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 사업별_예산_편성_규모RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회의원_의원이력RowItem {
  /** 의원이름(한글) */
  HG_NM?: string | null;
  /** 의원이름(한자) */
  HJ_NM?: string | null;
  /** 활동기간 */
  FRTO_DATE?: string | null;
  /** 의원이력 */
  PROFILE_SJ?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
  /** 경력대수코드 */
  PROFILE_UNIT_CD?: string | null;
  /** 경력대수 */
  PROFILE_UNIT_NM?: string | null;
}

export interface 역대_국회의원_의원이력Response {
  nfzegpkvaclgtscxt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회의원_의원이력RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회사무처_2천만원_이상_수의계약_현황RowItem {
  /** 계약일자 */
  CTR_RDT?: string | null;
  /** 계약건명 */
  CTR_NM?: string | null;
  /** 계약금액 */
  CTR_AMT?: string | null;
  /** 계약상대자 */
  CTR_OJ_NM?: string | null;
  /** 계약방법 */
  CTR_MTH?: string | null;
  /** 수의계약사유 */
  PRVCTRT_RSON?: string | null;
}

export interface 국회사무처_2천만원_이상_수의계약_현황Response {
  niqfwqfuaazozqwrj?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회사무처_2천만원_이상_수의계약_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_경제전망RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_경제전망Response {
  npmbwjybaffxwvbbk?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_경제전망RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의회외교_동향과_분석RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 의회외교_동향과_분석Response {
  nlpoxcnfacjeiankg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의회외교_동향과_분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_추계_세제_이슈RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_추계_세제_이슈Response {
  njnuvjckavvwaohhj?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_추계_세제_이슈RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의회외교_해외주요법률_제개정RowItem {
  /** 해외주요법률 제개정 제목 */
  FR_LAW_REV_TTL?: string | null;
  /** 작성자 */
  WRT_NM?: string | null;
  /** 작성일자 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 의회외교_해외주요법률_제개정Response {
  DIPLOMACYREVLAW?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의회외교_해외주요법률_제개정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 회의별_안건목록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 안건 번호 */
  BLL_NO?: string | null;
  /** 안건명 */
  BLL_NM?: string | null;
  /** 안건 레벨 */
  BLL_LV?: string | null;
}

export interface 회의별_안건목록Response {
  VCONFBLLLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 회의별_안건목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_정책에_관한_행정정보_공표RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 분류항목코드 */
  CTGR_CD?: string | null;
  /** 분류항목 */
  CTGR_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회도서관_정책에_관한_행정정보_공표Response {
  nxycgjkkayfqaynjz?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_정책에_관한_행정정보_공표RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_부의장동향RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_부의장동향Response {
  ncnyddauatqkofnfe?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_부의장동향RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_연구보고서RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 연구 책임자 */
  CHIEF_RESRCH?: string | null;
  /** 작성일 */
  REG_DTTM?: string | null;
  /** 상세 URL */
  DETAIL_URL?: string | null;
}

export interface 국회미래연구원_연구보고서Response {
  RESREPORT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_연구보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_FocusRowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_FocusResponse {
  npbizvcmabezbhcez?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_FocusRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 주요정치일정RowItem {
  /** 제목 */
  NOTICE_TITLE?: string | null;
  /** 부서명 */
  DEPT_NAME?: string | null;
  /** 작성일 */
  WRITE_DATE?: string | null;
  /** 구분명 */
  NOTICE_NM?: string | null;
  /** 내용 */
  CONTENT?: string | null;
  /** PDF첨부파일경로 */
  PDF_FILE_URL?: string | null;
  /** 첨부파일경로 */
  ATTACH_FILE_URL?: string | null;
}

export interface 주요정치일정Response {
  nkhynxdkagqtlgsqg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 주요정치일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법률안_심사_및_처리위원회안_대안RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 소관위회부일 */
  COMMITTEE_DT?: string | null;
  /** 의안상세정보 URL */
  LINK_URL?: string | null;
  /** 소관위처리결과 */
  COMMITTEE_RESULT?: string | null;
  /** 소관위처리일 */
  COMMITTEE_PROC_DT?: string | null;
  /** 소관위상정일 */
  CMT_PRESENT_DT?: string | null;
  /** 법사위회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 법사위상정일 */
  LAW_PRESENT_DT?: string | null;
}

export interface 법률안_심사_및_처리위원회안_대안Response {
  nxtkyptyaolzcbfwl?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법률안_심사_및_처리위원회안_대안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 날짜별_의정활동RowItem {
  /** 순번 */
  SEQ?: string | null;
  /** 일자 */
  DT?: string | null;
  /** 의안구분 */
  BILL_KIND?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 단계 */
  STAGE?: string | null;
  /** 세부단계 */
  DTL_STAGE?: string | null;
  /** 소관위원회 */
  COMMITTEE?: string | null;
  /** 활동상태 */
  ACT_STATUS?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
  /** 소관위원회ID */
  COMMITTEE_ID?: string | null;
}

export interface 날짜별_의정활동Response {
  nqfvrbsdafrmuzixe?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 날짜별_의정활동RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의회외교_실시내역RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 작성자 */
  WRITER_NM?: string | null;
  /** 구분2 */
  CATEGORY_NM?: string | null;
  /** 작성일 */
  UPDATE_DT?: string | null;
  /** 구분1 */
  MASTER_NM?: string | null;
  /** 상세보기URL */
  LINK_URL?: string | null;
}

export interface 의회외교_실시내역Response {
  nzhjpcyhahczgglqc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의회외교_실시내역RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_위원회_경력RowItem {
  /** 의원이름(한글) */
  HG_NM?: string | null;
  /** 의원이름(한자) */
  HJ_NM?: string | null;
  /** 활동기간 */
  FRTO_DATE?: string | null;
  /** 위원회 경력 */
  PROFILE_SJ?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
  /** 경력대수코드 */
  PROFILE_UNIT_CD?: string | null;
  /** 경력대수 */
  PROFILE_UNIT_NM?: string | null;
}

export interface 국회의원_위원회_경력Response {
  nyzrglyvagmrypezq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_위원회_경력RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서외국입법_동향과_분석RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서외국입법_동향과_분석Response {
  ncydhlphalaqvuzph?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서외국입법_동향과_분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_의장동향RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_의장동향Response {
  nknsekyoahvonwlll?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_의장동향RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의장_주요일정RowItem {
  /** 내용 */
  CONTENTS?: string | null;
  /** 날짜 */
  SCHEDULEDATE?: string | null;
  /** 시간 */
  SCHEDULETIME?: string | null;
}

export interface 국회의장_주요일정Response {
  nhedurlwawoquyxwn?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의장_주요일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 시정조치_결과보고서_목록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 파일설명 */
  FILE_CN?: string | null;
  /** 다운URL */
  DOWN_URL?: string | null;
}

export interface 시정조치_결과보고서_목록Response {
  VCONFATTATBLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 시정조치_결과보고서_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_업무추진비_집행현황RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회입법조사처_업무추진비_집행현황Response {
  nlmqzojlayoicbxhw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_업무추진비_집행현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 보도자료RowItem {
  /** 게시물번호 */
  NUM?: string | null;
  /** 제목 */
  TITLE?: string | null;
  /** 작성일 */
  WRITE_DATE?: string | null;
  /** 내용 */
  CONTENT?: string | null;
  /** 상세내용URL */
  CONTENT_URL?: string | null;
  /** 구분 */
  BBS_TITLE?: string | null;
}

export interface 보도자료Response {
  ninnagrlaelvtzfnt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 보도자료RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_세미나간담회RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_세미나간담회Response {
  nyapimeoaczouxzhb?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_세미나간담회RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_본회의_표결정보RowItem {
  /** 의원 */
  HG_NM?: string | null;
  /** 한자명 */
  HJ_NM?: string | null;
  /** 정당 */
  POLY_NM?: string | null;
  /** 선거구 */
  ORIG_NM?: string | null;
  /** 의원번호 */
  MEMBER_NO?: string | null;
  /** 소속정당코드 */
  POLY_CD?: string | null;
  /** 선거구코드 */
  ORIG_CD?: string | null;
  /** 의결일자 */
  VOTE_DATE?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 법률명 */
  LAW_TITLE?: string | null;
  /** 소관위원회 */
  CURR_COMMITTEE?: string | null;
  /** 표결결과 */
  RESULT_VOTE_MOD?: string | null;
  /** 부서코드(사용안함) */
  DEPT_CD?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 표시정렬순서 */
  DISP_ORDER?: string | null;
  /** 의안URL */
  BILL_URL?: string | null;
  /** 의안링크 */
  BILL_NAME_URL?: string | null;
  /** 회기 */
  SESSION_CD?: string | null;
  /** 차수 */
  CURRENTS_CD?: string | null;
  /** 대 */
  AGE?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
}

export interface 국회의원_본회의_표결정보Response {
  nojepdqqaweusdfbi?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_본회의_표결정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 수입징수현황수입목별RowItem {
  /** 회계년도 */
  FSCL_YY?: string | null;
  /** 회계월 */
  EXE_M?: string | null;
  /** 회계명 */
  FSCL_NM?: string | null;
  /** 수입관명 */
  IKWAN_NM?: string | null;
  /** 수입항명 */
  IHANG_NM?: string | null;
  /** 수입목명 */
  IMOK_NM?: string | null;
  /** 예산 */
  BDG_CAMT?: string | null;
  /** 수납본월금액 */
  RC_AMT?: string | null;
  /** 수납누계금액 */
  RC_AGGR_AMT?: string | null;
}

export interface 수입징수현황수입목별Response {
  ndaabdwcatyjpopzn?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 수입징수현황수입목별RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_영상회의록발언영상RowItem {
  /** 대수 */
  CT1?: string | null;
  /** 회 */
  CT2?: string | null;
  /** 차 */
  CT3?: string | null;
  /** 회의일자 */
  TAKING_DATE?: string | null;
  /** 회의제목 */
  TITLE?: string | null;
  /** 발언자 */
  ESSENTIAL_PERSON?: string | null;
  /** 재생시간 */
  REC_TIME?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
}

export interface 국회의원_영상회의록발언영상Response {
  npeslxqbanwkimebr?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_영상회의록발언영상RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의회외교포럼_활동보고RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 작성자 */
  WRITER_NM?: string | null;
  /** 작성일 */
  UPDATE_DT?: string | null;
}

export interface 의회외교포럼_활동보고Response {
  nlcqadrmachptelsf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의회외교포럼_활동보고RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회의원_인적사항RowItem {
  /** 국회의원코드 */
  MONA_CD?: string | null;
  /** 이름 */
  HG_NM?: string | null;
  /** 한자명 */
  HJ_NM?: string | null;
  /** 영문명칭 */
  ENG_NM?: string | null;
  /** 음/양력 */
  BTH_GBN_NM?: string | null;
  /** 생년월일 */
  BTH_DATE?: string | null;
  /** 성별 */
  SEX_GBN_NM?: string | null;
  /** 재선 */
  REELE_GBN_NM?: string | null;
  /** 당선 */
  UNITS?: string | null;
  /** 대별코드 */
  UNIT_CD?: string | null;
  /** 대 */
  UNIT_NM?: string | null;
  /** 정당명 */
  POLY_NM?: string | null;
  /** 선거구 */
  ORIG_NM?: string | null;
  /** 선거구구분 */
  ELECT_GBN_NM?: string | null;
}

export interface 역대_국회의원_인적사항Response {
  npffdutiapkzbfyvr?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회의원_인적사항RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 법제사례_연구발표RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 작성자 */
  WRITER_NM?: string | null;
  /** 분류번호 */
  CATEGORY_ID?: string | null;
  /** 구분 */
  CATEGORY_NM?: string | null;
  /** 등록일 */
  CREATE_DT?: string | null;
  /** 상세보기URL */
  LINK_URL?: string | null;
}

export interface 법제사례_연구발표Response {
  nljgwkpgacamiyjod?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 법제사례_연구발표RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청문회_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 청문회_회의록Response {
  VCONFCHCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청문회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 본회의_회의록RowItem {
  /** 회의번호 */
  CONFER_NUM?: string | null;
  /** 회의명 */
  TITLE?: string | null;
  /** 회의종류명 */
  CLASS_NAME?: string | null;
  /** 대수 */
  DAE_NUM?: string | null;
  /** 회의날짜 */
  CONF_DATE?: string | null;
  /** 안건명 */
  SUB_NAME?: string | null;
  /** 영상회의록 링크 */
  VOD_LINK_URL?: string | null;
  /** 요약정보 팝업 */
  CONF_LINK_URL?: string | null;
  /** PDF파일 링크 */
  PDF_LINK_URL?: string | null;
}

export interface 본회의_회의록Response {
  nzbyfwhwaoanttzje?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 본회의_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_정책자료실RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 발행처 */
  PUBLISHER?: string | null;
  /** 상세보기URL */
  DETAIL_VIEW_URL?: string | null;
  /** 수정일 */
  UPDATE_DT?: string | null;
  /** 발행년 */
  PUBLISH_DT?: string | null;
}

export interface 국회의원_정책자료실Response {
  npggiwnfaihlruyso?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_정책자료실RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 본회의_처리안건_법률안RowItem {
  /** 대수 */
  AGE?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 의안활동구분 */
  BILL_KIND?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 소관위원회 */
  COMMITTEE_NM?: string | null;
  /** 의결결과 */
  PROC_RESULT_CD?: string | null;
  /** 총투표수 */
  VOTE_TCNT?: string | null;
  /** 찬성 */
  YES_TCNT?: string | null;
  /** 반대 */
  NO_TCNT?: string | null;
  /** 기권 */
  BLANK_TCNT?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 위원회심사_회부일 */
  COMMITTEE_SUBMIT_DT?: string | null;
  /** 위원회심사_상정일 */
  COMMITTEE_PRESENT_DT?: string | null;
  /** 위원회심사_의결일 */
  COMMITTEE_PROC_DT?: string | null;
  /** 법사위체계자구심사_회부일 */
  LAW_SUBMIT_DT?: string | null;
  /** 법사위체계자구심사_상정일 */
  LAW_PRESENT_DT?: string | null;
  /** 법사위체계자구심사_의결일 */
  LAW_PROC_DT?: string | null;
  /** 본회의심의_상정일 */
  RGS_PRESENT_DT?: string | null;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string | null;
  /** 정부이송일 */
  CURR_TRANS_DT?: string | null;
  /** 공포일 */
  ANNOUNCE_DT?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string | null;
}

export interface 본회의_처리안건_법률안Response {
  nwbpacrgavhjryiph?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 본회의_처리안건_법률안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회_위원_명단RowItem {
  /** 위원회코드 */
  DEPT_CD?: string | null;
  /** 위원회명 */
  DEPT_NM?: string | null;
  /** 구성 */
  JOB_RES_NM?: string | null;
  /** 위원명 */
  HG_NM?: string | null;
  /** 선거구 */
  ORIG_NM?: string | null;
  /** 정당 */
  POLY_NM?: string | null;
  /** 전화번호 */
  ASSEM_TEL?: string | null;
  /** 이메일 */
  ASSEM_EMAIL?: string | null;
  /** 위원명(한자) */
  HJ_NM?: string | null;
  /** 호실 */
  ROOM_NO?: string | null;
  /** 보좌관 */
  STAFF?: string | null;
  /** 비서관 */
  SECRETARY?: string | null;
  /** 비서 */
  SECRETARY2?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
}

export interface 위원회_위원_명단Response {
  nktulghcadyhmiqxi?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회_위원_명단RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_SNS정보RowItem {
  /** 이름 */
  HG_NM?: string | null;
  /** 트위터 URL */
  T_URL?: string | null;
  /** 페이스북 URL */
  F_URL?: string | null;
  /** 유튜브 URL */
  Y_URL?: string | null;
  /** 블로그 URL */
  B_URL?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
}

export interface 국회의원_SNS정보Response {
  negnlnyvatsjwocar?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_SNS정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_기자회견RowItem {
  /** 회견일 */
  TAKING_DATE?: string | null;
  /** 회견시각 */
  OPEN_TIME?: string | null;
  /** 제목 */
  TITLE?: string | null;
  /** 발언자 */
  PERSON?: string | null;
  /** 재생시간 */
  REC_TIME?: string | null;
  /** 영상 바로보기 */
  LINK_URL?: string | null;
}

export interface 국회의원_기자회견Response {
  npbzvuwvasdqldskm?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_기자회견RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_연간보고서RowItem {
  /** 발간물 제목 */
  PBLM_TTL?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  DWLD_URL?: string | null;
}

export interface 국회도서관_연간보고서Response {
  NANETPBLMYEAR?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_연간보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의회외교_동향RowItem {
  /** 의회외교 동향 제목 */
  DPLM_TRD_TTL?: string | null;
  /** 작성일자 */
  WRT_DT?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 의회외교_동향Response {
  DIPLOMACYTREND?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의회외교_동향RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 최신외국입법정보RowItem {
  /** 발간물 제목 */
  PBLM_TTL?: string | null;
  /** 작성일 */
  PBL_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 최신외국입법정보Response {
  NANETPBLMLEGINEW?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 최신외국입법정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서이슈와_논점RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서이슈와_논점Response {
  nxlcxbbkapsrjayur?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서이슈와_논점RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 시청각자료_목록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 파일설명 */
  FILE_CN?: string | null;
  /** 다운URL */
  DOWN_URL?: string | null;
}

export interface 시청각자료_목록Response {
  VCONFATTACRCLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 시청각자료_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회_보유_자산전체RowItem {
  /** 수량 */
  ARE?: string | null;
  /** 금액(원) */
  AMT?: string | null;
  /** 년도 */
  YR?: string | null;
  /** 구분 */
  DIV_NM?: string | null;
}

export interface 국회_보유_자산전체Response {
  nujvlukkawoxnwvmg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회_보유_자산전체RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_세미나_일정RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 의원실링크 */
  LINK?: string | null;
  /** 설명 */
  DESCRIPTION?: string | null;
  /** 개최일 */
  SDATE?: string | null;
  /** 개최시간 */
  STIME?: string | null;
  /** 주최기관 */
  NAME?: string | null;
  /** 개최장소 */
  LOCATION?: string | null;
}

export interface 국회의원_세미나_일정Response {
  nfcoioopazrwmjrgs?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_세미나_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회의원_재선_현황RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 구분 */
  DIV?: string | null;
  /** 초선 */
  NEWELCT?: string | null;
  /** 2선 */
  TWOTERM?: string | null;
  /** 3선 */
  THRTERM?: string | null;
  /** 4선 */
  FOURTERM?: string | null;
  /** 5선 */
  FIVTERM?: string | null;
  /** 6선 */
  SIXTERM?: string | null;
  /** 7선 */
  SEVTERM?: string | null;
  /** 8선 */
  EIGTERM?: string | null;
  /** 9선 */
  NINTERM?: string | null;
  /** 연인원수 */
  YEARPECT?: string | null;
}

export interface 역대_국회의원_재선_현황Response {
  ngdeoqgoablceakpp?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회의원_재선_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의사일정공지RowItem {
  /** 제목 */
  NOTICE_TITLE?: string | null;
  /** 부서명 */
  DEPT_NAME?: string | null;
  /** 작성일 */
  WRITE_DATE?: string | null;
  /** 내용 */
  CONTENT?: string | null;
  /** PDF_FILE_URL */
  PDF_FILE_URL?: string | null;
  /** 첨부파일경로 */
  ATTACH_FILE_URL?: string | null;
}

export interface 의사일정공지Response {
  njlyptmbatwuwjtxf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의사일정공지RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청원_통계RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 접수 건수 */
  RCP_CNT?: string | null;
  /** 채택 건수 */
  ACP_CNT?: string | null;
  /** 본회의불부의 건수 */
  NOT_SUBMIT_CNT?: string | null;
  /** 철회 건수 */
  WTHD_CNT?: string | null;
  /** 폐기 건수 */
  DSU_CNT?: string | null;
  /** 처리건수 소계 */
  REFT_SUBT?: string | null;
  /** 계류 건수 */
  NOT_FINISH_CNT?: string | null;
}

export interface 청원_통계Response {
  PTTCNTMAIN?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청원_통계RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_정보목록RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 첨부파일ID */
  FILE_ID?: string | null;
}

export interface 국회입법조사처_정보목록Response {
  nyrggptbaislycxyt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_정보목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 대통령시정연설_포함_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 대통령시정연설_포함_회의록Response {
  VCONFSNACONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 대통령시정연설_포함_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 회의록별_상세정보RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 소위원회명 */
  SB_CMIT_NM?: string | null;
  /** 회의장소 */
  CONF_PLC?: string | null;
  /** 시작시간 */
  BG_PTM?: string | null;
  /** 종료시간 */
  ED_PTM?: string | null;
  /** 회의시간 */
  CONF_PTM?: string | null;
  /** 인사청문회여부 */
  HR_HRG_YN?: string | null;
  /** 공청회여부 */
  PBHRG_YN?: string | null;
  /** 청문회여부 */
  HRG_YN?: string | null;
  /** 연석회의여부 */
  SITG_YN?: string | null;
  /** 대통령위임연설여부 */
  RMND_SPH_YN?: string | null;
  /** 대통령시정연설여부 */
  RDJM_SPH_YN?: string | null;
  /** 외빈연설여부 */
  FRNGUS_SPH_YN?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 회의록별_상세정보Response {
  VCONFDETAIL?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 회의록별_상세정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안_제안자정보RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 제안자구분 */
  PPSR_KIND?: string | null;
  /** 제안자설명 */
  PPSR_CN?: string | null;
  /** 제안자정당명 */
  PPSR_POLY_NM?: string | null;
  /** 제안자명 */
  PPSR_NM?: string | null;
  /** 제안자한자명 */
  PPSR_CH_NM?: string | null;
  /** 대표발의 구분 */
  REP_DIV?: string | null;
}

export interface 의안_제안자정보Response {
  BILLINFOPPSR?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안_제안자정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 회의별_의안목록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 의안 ID */
  BILL_ID?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 회의별_의안목록Response {
  VCONFBILLLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 회의별_의안목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회사무처_1억원_이상_계약_현황RowItem {
  /** 계약일자 */
  CTR_RDT?: string | null;
  /** 계약건명 */
  CTR_NM?: string | null;
  /** 계약금액(원) */
  CTR_AMT?: string | null;
  /** 계약상대자 */
  CTR_OJ_NM?: string | null;
  /** 계약방법 */
  CTR_MTH?: string | null;
}

export interface 국회사무처_1억원_이상_계약_현황Response {
  nwaglmniarckeuvuh?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회사무처_1억원_이상_계약_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_의원이력RowItem {
  /** 의원이름(한글) */
  HG_NM?: string | null;
  /** 의원이름(한자) */
  HJ_NM?: string | null;
  /** 활동기간 */
  FRTO_DATE?: string | null;
  /** 의원이력 */
  PROFILE_SJ?: string | null;
  /** 국회의원코드 */
  MONA_CD?: string | null;
  /** 대수코드 */
  UNIT_CD?: string | null;
  /** 대수 */
  UNIT_NM?: string | null;
}

export interface 국회의원_의원이력Response {
  nexgtxtmaamffofof?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_의원이력RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회_시설물_안내RowItem {
  /** 시설물명 */
  FCLT_NM?: string | null;
  /** 연면적 */
  YY_ARE?: string | null;
  /** 건축면적 */
  ARCTC_ARE?: string | null;
  /** 층수(지상/지하) */
  FLOR_SZ?: string | null;
  /** 준공년월일 */
  COMPLTN_DYS?: string | null;
  /** 비고 */
  RMK?: string | null;
}

export interface 국회_시설물_안내Response {
  nabhvpvoadjjlckgw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회_시설물_안내RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_여성_국회의원_현황RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 지역구여성의원수 */
  LCST_FMLAWMKCT?: string | null;
  /** 지역구여성의원명 */
  LCST_FMLAWMKNM?: string | null;
  /** 전국구여성의원수 */
  NATION_FMLAWMKCT?: string | null;
  /** 전국구여성의원명 */
  NATION_FMLAWMKNM?: string | null;
  /** 합계 */
  SUM?: string | null;
  /** 비고 */
  RMK?: string | null;
}

export interface 역대_여성_국회의원_현황Response {
  nmkjkjpwaxfhwdnjl?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_여성_국회의원_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_제공_자료_통합_APIRowItem {
  /** 발간자료구분 */
  MTR_DIV?: string | null;
  /** 발간자료제목 */
  MTR_TTL?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 국회입법조사처_제공_자료_통합_APIResponse {
  ALLNARSPBLM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_제공_자료_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 우수연구단체_현황RowItem {
  /** 연도 */
  YEAR?: string | null;
  /** 구분 */
  DIV?: string | null;
  /** 분야 */
  FLD?: string | null;
  /** 단체 */
  GRP?: string | null;
  /** 대표의원 */
  LAWMAKER?: string | null;
  /** 상금액 */
  PRZ_MONEY?: string | null;
}

export interface 우수연구단체_현황Response {
  nvbqusufapyxesqek?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 우수연구단체_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_정보공개청구_처리현황_목록RowItem {
  /** 년도 */
  YR?: string | null;
  /** 일련번호 */
  SN?: string | null;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string | null;
  /** 청구사항>공개형태 */
  OPB_FOM_NM?: string | null;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string | null;
  /** 결정내용>결정구분 */
  DCS_DIV?: string | null;
  /** 결정내용>공개내용 */
  OPB_RSON?: string | null;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string | null;
  /** 결정내용>결정통지일자 */
  DCS_NTC_DT?: string | null;
  /** 처리사항>공개일자 */
  OPB_DT?: string | null;
  /** 처리사항>공개방법 */
  OPB_MTH?: string | null;
}

export interface 국회도서관_정보공개청구_처리현황_목록Response {
  nbtkkkcoaffclmwoc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_정보공개청구_처리현황_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 소위원회_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 소위원회코드 */
  SB_CMIT_CD?: string | null;
  /** 소위원회명 */
  SB_CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 소위원회_회의록Response {
  VCONFSUBCCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 소위원회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회개방행사_일정RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 일시 */
  DT?: string | null;
  /** 장소 */
  ETC_CHAR11?: string | null;
  /** 내용 */
  ARTICLE_TEXT?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
  /** 첨부파일URL */
  ATTACH_URL?: string | null;
  /** 구분명 */
  CATEGORY_NM?: string | null;
}

export interface 국회개방행사_일정Response {
  nneiozjtawpqhaidq?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회개방행사_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_미래서평RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 저자 */
  WRITER?: string | null;
  /** 출판사 */
  PUBLISHER?: string | null;
  /** 발간일 */
  REG_DTTM?: string | null;
  /** 상세 URL */
  DETAIL_URL?: string | null;
}

export interface 국회미래연구원_미래서평Response {
  BKREVIEW?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_미래서평RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 지출집행현황세부사업별RowItem {
  /** 회계년도 */
  FSCL_YY?: string | null;
  /** 집행일 */
  EXE_DATE?: string | null;
  /** 회계명 */
  FSCL_NM?: string | null;
  /** 분야명 */
  FLD_NM?: string | null;
  /** 부문명 */
  SECT_NM?: string | null;
  /** 프로그램명 */
  PGM_NM?: string | null;
  /** 단위사업명 */
  ACTV_NM?: string | null;
  /** 세부사업명 */
  SACTV_NM?: string | null;
  /** 세출예산액 */
  ANEXP_BDGAMT?: string | null;
  /** 세출예산현액 */
  ANEXP_BDG_CAMT?: string | null;
  /** 지출금액 */
  EP_AMT?: string | null;
  /** 연간누계지출금액 */
  THISM_AGGR_EP_AMT?: string | null;
  /** 당월누계지출순계금액 */
  THISM_AGGR_EP_NAMT?: string | null;
}

export interface 지출집행현황세부사업별Response {
  njzofberazvhjncha?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 지출집행현황세부사업별RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회_자료실RowItem {
  /** 위원회명 */
  WRITER_NM?: string | null;
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 작성일 */
  CREATE_DT?: string | null;
  /** 위원회코드 */
  DEPT_CD?: string | null;
}

export interface 위원회_자료실Response {
  nbiwfpqbaipwgkhfr?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회_자료실RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_대한민국_재정RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_대한민국_재정Response {
  nxrkedghaikxodlja?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_대한민국_재정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 연구단체_연구활동_보고서RowItem {
  /** 대수 */
  REGDAESU?: string | null;
  /** 보고서명 */
  REPORT_TITLE?: string | null;
  /** 연도 */
  YEAR?: string | null;
  /** 연구단체명 */
  RE_NAME?: string | null;
  /** PDF_DOWN_URL */
  PDF_DOWN_URL?: string | null;
  /** 보고서분류 */
  REPORT_CLASSIFICATION_NM?: string | null;
}

export interface 연구단체_연구활동_보고서Response {
  ncrwiahparxrpodcv?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 연구단체_연구활동_보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NATV_뉴스_위원회RowItem {
  /** 제목 */
  COMP_MAIN_TITLE?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
  /** 내용 */
  COMP_CONTENT?: string | null;
  /** 상세보기 */
  LINK_URL?: string | null;
}

export interface NATV_뉴스_위원회Response {
  nuizrfvoaepvwrjtz?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NATV_뉴스_위원회RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 지역현안_입법지원_토론회_개최_내역RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 대수 */
  CATEGORY_NM?: string | null;
  /** 국회의원 */
  ETC_CHAR7?: string | null;
  /** 개최장소 */
  ETC_CHAR12?: string | null;
  /** 상세보기URL */
  LINK_URL?: string | null;
  /** 개최일 */
  ETC_CHAR1?: string | null;
  /** 개최시 */
  ETC_CHAR2?: string | null;
}

export interface 지역현안_입법지원_토론회_개최_내역Response {
  nyioaasianxlkcqxs?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 지역현안_입법지원_토론회_개최_내역RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_예산_분석RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_예산_분석Response {
  nxeytfqvawilyincp?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_예산_분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 제안설명서_목록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 파일설명 */
  FILE_CN?: string | null;
  /** 다운URL */
  DOWN_URL?: string | null;
}

export interface 제안설명서_목록Response {
  VCONFATTEXPLANLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 제안설명서_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 정보공개청구_행정소송_판결현황RowItem {
  /** 년도 */
  YR?: string | null;
  /** 기관 */
  INST_CD?: string | null;
  /** 일련번호 */
  SN?: string | null;
  /** 사건명 */
  IND_NM?: string | null;
  /** 판결일 */
  RSLT_DT?: string | null;
  /** 피고 */
  OJ_PN?: string | null;
  /** 주문내용 */
  ORDG_RSON?: string | null;
  /** 청구취지 */
  DEMD_MEAN?: string | null;
  /** 이유(판결요지) */
  RSLT_MTH?: string | null;
}

export interface 정보공개청구_행정소송_판결현황Response {
  nasphyhkaiaivedef?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 정보공개청구_행정소송_판결현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_학술지입법과_정책RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_학술지입법과_정책Response {
  nakxubpbapfmxdzrc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_학술지입법과_정책RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회_현황_정보RowItem {
  /** 위원회구분코드 */
  CMT_DIV_CD?: string | null;
  /** 위원회구분 */
  CMT_DIV_NM?: string | null;
  /** 위원회코드 */
  HR_DEPT_CD?: string | null;
  /** 위원회 */
  COMMITTEE_NAME?: string | null;
  /** 위원장 */
  HG_NM?: string | null;
  /** 간사 */
  HG_NM_LIST?: string | null;
  /** 위원정수 */
  LIMIT_CNT?: string | null;
  /** 현원 */
  CURR_CNT?: string | null;
  /** 비교섭단체위원수 */
  POLY99_CNT?: string | null;
  /** 교섭단체위원수 */
  POLY_CNT?: string | null;
}

export interface 위원회_현황_정보Response {
  nxrvzonlafugpqjuh?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회_현황_정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회일정_통합_APIRowItem {
  /** 일정종류 */
  SCH_KIND?: string | null;
  /** 일정내용 */
  SCH_CN?: string | null;
  /** 일자 */
  SCH_DT?: string | null;
  /** 시간 */
  SCH_TM?: string | null;
  /** 회의구분 */
  CONF_DIV?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 회의회기 */
  CONF_SESS?: string | null;
  /** 회의차수 */
  CONF_DGR?: string | null;
  /** 행사주체자 */
  EV_INST_NM?: string | null;
  /** 행사장소 */
  EV_PLC?: string | null;
}

export interface 국회일정_통합_APIResponse {
  ALLSCHEDULE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회일정_통합_APIRowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_국회동향기타RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_국회동향기타Response {
  noxbiocwawvechjkc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_국회동향기타RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_미래포럼RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 기획자 */
  PLANNER?: string | null;
  /** 패널 */
  PANAL?: string | null;
  /** 작성일 */
  REG_DTTM?: string | null;
  /** 개최일 */
  OPEN_DTTM?: string | null;
  /** 구분 */
  DIV?: string | null;
}

export interface 국회미래연구원_미래포럼Response {
  FORUM?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_미래포럼RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 예결산_심사정보RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자구분 */
  PPSR_KIND?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 예결위심사 위원회명 */
  BDG_CMIT_NM?: string | null;
  /** 예결위심사 회부일 */
  BDG_CMMT_DT?: string | null;
  /** 예결위심사 상정일 */
  BDG_PRSNT_DT?: string | null;
  /** 예결위심사 의결일 */
  BDG_RSLN_DT?: string | null;
  /** 예결위심사 처리결과 */
  BDG_PROC_RSLT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 예결산_심사정보Response {
  BUDGETJUDGE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 예결산_심사정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서입법정책보고서RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서입법정책보고서Response {
  njythywqasrxkjxpv?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서입법정책보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 회의록별_부록_정보RowItem {
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의ID */
  CONF_ID?: string | null;
  /** 파일종류 */
  FILE_KND?: string | null;
  /** 파일설명 */
  FILE_CN?: string | null;
  /** 다운URL */
  DOWN_URL?: string | null;
}

export interface 회의록별_부록_정보Response {
  VCONFATTAPPENDIXLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 회의록별_부록_정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회의원_현황RowItem {
  /** 대수 */
  DAESU?: string | null;
  /** 대별 및 소속정당(단체) */
  DAE?: string | null;
  /** 대별 */
  DAE_NM?: string | null;
  /** 이름 */
  NAME?: string | null;
  /** 이름(한자) */
  NAME_HAN?: string | null;
  /** 자 */
  JA?: string | null;
  /** 호 */
  HO?: string | null;
  /** 생년월일 */
  BIRTH?: string | null;
  /** 본관 */
  BON?: string | null;
  /** 출생지 */
  POSI?: string | null;
  /** 학력 및 경력 */
  HAK?: string | null;
  /** 종교 및 취미 */
  HOBBY?: string | null;
  /** 저서 */
  BOOK?: string | null;
  /** 상훈 */
  SANG?: string | null;
  /** 기타정보(사망일) */
  DEAD?: string | null;
  /** 회원정보 확인 헌정회 홈페이지 URL */
  URL?: string | null;
}

export interface 역대_국회의원_현황Response {
  nprlapfmaufmqytet?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회의원_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 정당_및_교섭단체_의석수_현황RowItem {
  /** 교섭단체 */
  POLY_GROUP_NM?: string | null;
  /** 정당명 */
  POLY_NM?: string | null;
  /** 지역구 */
  N1?: string | null;
  /** 비례대표 */
  N2?: string | null;
  /** 계 */
  N3?: string | null;
  /** 비고(%) */
  N4?: string | null;
}

export interface 정당_및_교섭단체_의석수_현황Response {
  nepjpxkkabqiqpbvk?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 정당_및_교섭단체_의석수_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_그건_이렇습니다RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_그건_이렇습니다Response {
  ngwksdbiacfrifqsi?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_그건_이렇습니다RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안별_표결현황RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 처리일 */
  PROC_DT?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 표결결과 */
  PROC_RESULT_CD?: string | null;
  /** 의안종류 */
  BILL_KIND_CD?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 재적의원 */
  MEMBER_TCNT?: string | null;
  /** 총투표수 */
  VOTE_TCNT?: string | null;
  /** 찬성 */
  YES_TCNT?: string | null;
  /** 반대 */
  NO_TCNT?: string | null;
  /** 기권 */
  BLANK_TCNT?: string | null;
  /** 의안상세정보 URL */
  LINK_URL?: string | null;
}

export interface 의안별_표결현황Response {
  ncocpgfiaoituanbr?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안별_표결현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회채용_종합현황RowItem {
  /** 연도 */
  YR?: string | null;
  /** 직급 */
  JGRD_NM?: string | null;
  /** 직류 */
  JBTP_NM?: string | null;
  /** 채용인원(명) */
  ADPT_NOP?: string | null;
  /** 경쟁률 */
  CMPT_RT?: string | null;
}

export interface 국회채용_종합현황Response {
  nwutmjsuayhwupoxc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회채용_종합현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_보좌직원_채용RowItem {
  /** 제목 */
  TITLE_V?: string | null;
  /** 상태 */
  USE_YN?: string | null;
  /** 작성일 */
  REG_DT_D?: string | null;
  /** 기간 */
  DT?: string | null;
  /** 내용 */
  CONTENT_L?: string | null;
  /** 의원실 */
  DEPT_NM_V?: string | null;
}

export interface 국회의원_보좌직원_채용Response {
  nbdlhufiaebnmjfxf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_보좌직원_채용RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청원_접수목록RowItem {
  /** 국민동의건수 */
  CITZN_AGM_CNT?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
  /** 소개의원명 */
  INTD_ASBLM_NM?: string | null;
  /** 접수일 */
  RCP_DT?: string | null;
  /** 청원ID */
  PTT_ID?: string | null;
  /** 청원명 */
  PTT_NM?: string | null;
  /** 청원번호 */
  PTT_NO?: string | null;
  /** 청원자명 */
  PTTR_NM?: string | null;
  /** 청원종류 */
  PTT_KIND?: string | null;
}

export interface 청원_접수목록Response {
  PTTRCP?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청원_접수목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회사무처_정보공개청구_처리현황_목록RowItem {
  /** 년도 */
  YR?: string | null;
  /** 일련번호 */
  SN?: string | null;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string | null;
  /** 청구사항>공개형태 */
  OPB_FOM_NM?: string | null;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string | null;
  /** 결정내용>결정구분 */
  DCS_DIV?: string | null;
  /** 결정내용>공개내용 */
  OPB_RSON?: string | null;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string | null;
  /** 결정내용>결정통지일자 */
  DCS_NTC_DT?: string | null;
  /** 처리사항>공개일자 */
  OPB_DT?: string | null;
  /** 처리사항>공개방법 */
  OPB_MTH?: string | null;
}

export interface 국회사무처_정보공개청구_처리현황_목록Response {
  ngktubbaavswhlnle?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회사무처_정보공개청구_처리현황_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회_및_국회사무처_소관_법인별_보조금_예산RowItem {
  /** 년도 */
  YR?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 예산총액(천원) */
  BDG_TAMT?: string | null;
}

export interface 국회_및_국회사무처_소관_법인별_보조금_예산Response {
  ntexdxjbamdpccvnt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회_및_국회사무처_소관_법인별_보조금_예산RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 공청회_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 공청회_회의록Response {
  VCONFPHCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 공청회_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 연구단체_활동실적RowItem {
  /** 구분 */
  DIV?: string | null;
  /** 정책연구보고서 */
  POL_RSC_RPT?: string | null;
  /** 법안제개정 등 발의 */
  LEG_INIT?: string | null;
  /** 세미나 공청회등(전시회 포함) */
  SEMINAR?: string | null;
  /** 간담회 등(언론보도 포함) */
  CONF?: string | null;
  /** 각종조사활동 등 */
  RESC?: string | null;
  /** 연도 */
  DIV2?: string | null;
}

export interface 연구단체_활동실적Response {
  nnzoijvcaiexypqaf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 연구단체_활동실적RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_결산_분석RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_결산_분석Response {
  negjnychalvyrcifv?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_결산_분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영문국회일정RowItem {
  /** 회의일정 구분 */
  CONF_SCH_DIV?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 일자 */
  SCH_DT?: string | null;
  /** 시간 */
  SCH_TM?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
}

export interface 영문국회일정Response {
  ENSCHEDULENOTICE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영문국회일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안_접수목록RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안 종류 */
  BILL_KIND?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자 구분 */
  PPSR_KIND?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 처리결과 */
  PROC_RSLT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 의안_접수목록Response {
  BILLRCP?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안_접수목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회_보유_자산토지RowItem {
  /** 구분 */
  DIV_NM?: string | null;
  /** 주소 */
  ADDR?: string | null;
  /** 면적(㎡) */
  ARE?: string | null;
  /** 면적(평) */
  FLSP?: string | null;
  /** 금액 */
  AMT?: string | null;
  /** 년도 */
  YR?: string | null;
}

export interface 국회_보유_자산토지Response {
  nvkhvcvvavafkjqca?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회_보유_자산토지RowItem[];
    }
  ];
  xmlData?: string;
}

export interface grade_9급_공개경쟁_채용현황RowItem {
  /** 연도 */
  YR?: string | null;
  /** 직류 */
  JBTP_NM?: string | null;
  /** 채용인원 */
  ADPT_NOP?: string | null;
  /** 경쟁률 */
  CMPT_RT?: string | null;
}

export interface grade_9급_공개경쟁_채용현황Response {
  ncdawwizazvcivann?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: grade_9급_공개경쟁_채용현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의안_상세정보RowItem {
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 제안자구분 */
  PPSR_KIND?: string | null;
  /** 제안자 */
  PPSR?: string | null;
  /** 제안일 */
  PPSL_DT?: string | null;
  /** 제안회기 */
  PPSL_SESS?: string | null;
  /** 소관위원회명 */
  JRCMIT_NM?: string | null;
  /** 소관위원회 회부일 */
  JRCMIT_CMMT_DT?: string | null;
  /** 소관위원회 상정일 */
  JRCMIT_PRSNT_DT?: string | null;
  /** 소관위원회 처리일 */
  JRCMIT_PROC_DT?: string | null;
  /** 소관위원회 처리결과 */
  JRCMIT_PROC_RSLT?: string | null;
  /** 법사위 체계자구심사 회부일 */
  LAW_CMMT_DT?: string | null;
  /** 법사위 체계자구심사 상정일 */
  LAW_PRSNT_DT?: string | null;
  /** 법사위 체계자구심사 처리일 */
  LAW_PROC_DT?: string | null;
  /** 법사위 체계자구심사 처리결과 */
  LAW_PROC_RSLT?: string | null;
  /** 본회의 심의 상정일 */
  RGS_PRSNT_DT?: string | null;
  /** 본회의 심의 의결일 */
  RGS_RSLN_DT?: string | null;
  /** 본회의 심의 회의명 */
  RGS_CONF_NM?: string | null;
  /** 본회의 심의결과 */
  RGS_CONF_RSLT?: string | null;
  /** 정부 이송일 */
  GVRN_TRSF_DT?: string | null;
  /** 공포 법률명 */
  PROM_LAW_NM?: string | null;
  /** 공포일 */
  PROM_DT?: string | null;
  /** 공포번호 */
  PROM_NO?: string | null;
}

export interface 의안_상세정보Response {
  BILLINFODETAIL?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의안_상세정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 어린이국회_개최_결과RowItem {
  /** 행사개최결과 제목 */
  BRDI_TTL?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 어린이국회_개최_결과Response {
  CHILDRENOPENRESULT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 어린이국회_개최_결과RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 처리_의안통계총괄RowItem {
  /** 의안구분명 */
  BIL_DIV_NM?: string | null;
  /** 의안구분명 */
  BIL_DIV_NM2?: string | null;
  /** 접수건수 */
  RCP_CNT?: string | null;
  /** 처리건수 */
  PROC_CNT?: string | null;
  /** 보류건수 */
  RSVT_CNT?: string | null;
}

export interface 처리_의안통계총괄Response {
  BILLCNTMAIN?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 처리_의안통계총괄RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 대한민국_경제RowItem {
  /** 발간물 제목 */
  PBLM_TTL?: string | null;
  /** 작성부서 */
  WRT_DEPT?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 대한민국_경제Response {
  NABOPBLMECNGOV?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 대한민국_경제RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회예산정책처_정보공개청구_처리현황_목록RowItem {
  /** 년도 */
  YR?: string | null;
  /** 일련번호 */
  SN?: string | null;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string | null;
  /** 청구사항>공개형태 */
  OPB_FOM_NM?: string | null;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string | null;
  /** 결정내용>결정구분 */
  DCS_DIV?: string | null;
  /** 결정내용>공개내용 */
  OPB_RSON?: string | null;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string | null;
  /** 결정내용>결정통지일자 */
  DCS_NTC_DT?: string | null;
  /** 처리사항>공개일자 */
  OPB_DT?: string | null;
  /** 처리사항>공개방법 */
  OPB_MTH?: string | null;
}

export interface 국회예산정책처_정보공개청구_처리현황_목록Response {
  niykgszzaqxzdejiz?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회예산정책처_정보공개청구_처리현황_목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영문국회의장_연설문RowItem {
  /** 연설문 제목 */
  SPC_TTL?: string | null;
  /** 작성일자 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 영문국회의장_연설문Response {
  ENSPEAKERSPEECHES?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영문국회의장_연설문RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 어린이국회_우수법률안_소개RowItem {
  /** 게시물 제목 */
  BRDI_TTL?: string | null;
  /** 작성일 */
  WRT_DT?: string | null;
  /** 링크 URL */
  LINK_URL?: string | null;
}

export interface 어린이국회_우수법률안_소개Response {
  CHILDRENGREATBILL?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 어린이국회_우수법률안_소개RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회의장단_정보RowItem {
  /** 구분 */
  DIV?: string | null;
  /** 성명 */
  CHM_PN?: string | null;
  /** 재임기간 */
  CHM_APTM_YS?: string | null;
  /** 비고 */
  CHM_RMK?: string | null;
  /** 대 */
  UNIT_NM?: string | null;
}

export interface 역대_국회의장단_정보Response {
  nubbgpxmawmzkclkc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회의장단_정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 본회의_처리안건_기타RowItem {
  /** 대수 */
  AGE?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 의안명 */
  BILL_NM?: string | null;
  /** 의안활동구분 */
  BILL_KIND?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND_CD?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 소관위원회 */
  COMMITTEE_NM?: string | null;
  /** 의결결과 */
  PROC_RESULT_CD?: string | null;
  /** 총투표수 */
  VOTE_TCNT?: string | null;
  /** 찬성 */
  YES_TCNT?: string | null;
  /** 반대 */
  NO_TCNT?: string | null;
  /** 기권 */
  BLANK_TCNT?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 위원회심사_회부일 */
  COMMITTEE_SUBMIT_DT?: string | null;
  /** 위원회심사_상정일 */
  COMMITTEE_PRESENT_DT?: string | null;
  /** 위원회심사_의결일 */
  COMMITTEE_PROC_DT?: string | null;
  /** 본회의심의_상정일 */
  RGS_PRESENT_DT?: string | null;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string | null;
  /** 정부이송일 */
  CURR_TRANS_DT?: string | null;
  /** 공포일 */
  ANNOUNCE_DT?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string | null;
}

export interface 본회의_처리안건_기타Response {
  nbslryaradshbpbpm?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 본회의_처리안건_기타RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청원_소개의원_정보RowItem {
  /** 청원ID */
  PTT_ID?: string | null;
  /** 청원번호 */
  PTT_NO?: string | null;
  /** 청원자명 */
  PTTR_NM?: string | null;
  /** 대표구분 */
  REP_DIV?: string | null;
  /** 소개의원명 */
  INTD_ASBLM_NM?: string | null;
}

export interface 청원_소개의원_정보Response {
  PTTINFOPPSR?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청원_소개의원_정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NATV_뉴스_기타RowItem {
  /** 제목 */
  COMP_MAIN_TITLE?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
  /** 내용 */
  COMP_CONTENT?: string | null;
  /** 상세보기 */
  LINK_URL?: string | null;
}

export interface NATV_뉴스_기타Response {
  nshnpsvaalefpwslj?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NATV_뉴스_기타RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서외국입법정책_분석RowItem {
  /** 데이터수집번호 */
  DATA_SEQCE_NO?: string | null;
  /** 데이터ID */
  DATAID?: string | null;
  /** 다운로드 */
  PDFFILENM?: string | null;
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 바로보기 */
  DIRECTVIEW?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 구분명 */
  DIVNM?: string | null;
  /** 구분코드 */
  DIVCD?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서외국입법정책_분석Response {
  NARSBOOKDATA?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서외국입법정책_분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 전원위원회_일정RowItem {
  /** 대수 */
  UNIT_CD?: string | null;
  /** 대수 */
  UNIT_NM?: string | null;
  /** 회기 */
  MEETINGSESSION?: string | null;
  /** 차수 */
  CHA?: string | null;
  /** 제목 */
  TITLE?: string | null;
  /** 일자 */
  MEETTING_DATE?: string | null;
  /** 일시 */
  MEETTING_TIME?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
}

export interface 전원위원회_일정Response {
  nomxleneanjcruaez?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 전원위원회_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_의원_입법안RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_의원_입법안Response {
  ntbzdcigaongnbfxc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_의원_입법안RowItem[];
    }
  ];
  xmlData?: string;
}

export interface OPEN_API_전체_현황RowItem {
  /** 공공데이터ID */
  INF_ID?: string | null;
  /** 공공데이터명 */
  INF_NM?: string | null;
  /** 공공데이터설명 */
  INF_EXP?: string | null;
  /** 분류체계 */
  CATE_NM?: string | null;
  /** 공개일자 */
  OPEN_DTTM?: string | null;
  /** 제공기관 */
  ORG_NM?: string | null;
  /** 최종수정일자 */
  LOAD_DTTM?: string | null;
  /** 원본시스템 */
  SRC_EXP?: string | null;
  /** 명세서URL */
  DDC_URL?: string | null;
  /** 서비스URL */
  SRV_URL?: string | null;
  /** 이용허락조건 */
  CCL_NM?: string | null;
  /** 공개주기 */
  LOAD_NM?: string | null;
  /** 공개시기 */
  LOAD_CONT?: string | null;
}

export interface OPEN_API_전체_현황Response {
  OPENSRVAPI?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: OPEN_API_전체_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의원외교협의회_명단RowItem {
  /** 다운로드 */
  RPT_NO?: string | null;
  /** 제목 */
  RPT_TITLE?: string | null;
  /** 기준일자 */
  STND_DT?: string | null;
  /** 작성자 */
  WRT_NM?: string | null;
  /** 대별코드 */
  UNIT_CD?: string | null;
  /** 대 */
  UNIT_NM?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 의원외교협의회_명단Response {
  nxcxrdmpaonzzbkic?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의원외교협의회_명단RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NATV_뉴스_인물RowItem {
  /** 제목 */
  COMP_MAIN_TITLE?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
  /** 내용 */
  COMP_CONTENT?: string | null;
  /** 상세보기 */
  LINK_URL?: string | null;
}

export interface NATV_뉴스_인물Response {
  nauvppbxargkmyovh?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NATV_뉴스_인물RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_비용추계_및_재정전망RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_비용추계_및_재정전망Response {
  npsofwddayuhqhfgh?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_비용추계_및_재정전망RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 진행중_입법예고RowItem {
  /** 의안 ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
  /** 법률안명 */
  BILL_NAME?: string | null;
  /** 대 */
  AGE?: string | null;
  /** 제안자구분 */
  PROPOSER_KIND_CD?: string | null;
  /** 소관위원회 */
  CURR_COMMITTEE?: string | null;
  /** 게시종료일 */
  NOTI_ED_DT?: string | null;
  /** 링크주소 */
  LINK_URL?: string | null;
  /** 제안자 */
  PROPOSER?: string | null;
  /** 소관위ID */
  CURR_COMMITTEE_ID?: string | null;
}

export interface 진행중_입법예고Response {
  nknalejkafmvgzmpt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 진행중_입법예고RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 행정입법_분석연구RowItem {
  /** 제목 */
  ARTICLE_TITLE?: string | null;
  /** 작성자 */
  WRITER_NM?: string | null;
  /** 구분 */
  CATEGORY_NM?: string | null;
  /** 등록일 */
  CREATE_DT?: string | null;
  /** 상세보기URL */
  LINK_URL?: string | null;
}

export interface 행정입법_분석연구Response {
  njwcdwalactbvidal?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 행정입법_분석연구RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연구보고서국제통계_동향과_분석RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연구보고서국제통계_동향과_분석Response {
  nhtegpibasggyssce?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연구보고서국제통계_동향과_분석RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영문국회_소식_및_보도자료RowItem {
  /** 보도자료 제목 */
  ARTC_TTL?: string | null;
  /** 작성일자 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 영문국회_소식_및_보도자료Response {
  ENPRESS?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영문국회_소식_및_보도자료RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 위원회별_일정RowItem {
  /** 회의일자 */
  MEETING_DATE?: string | null;
  /** 시간 */
  MEETING_TIME?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DEGREE?: string | null;
  /** 구분 */
  TITLE?: string | null;
  /** 위원회 명 */
  COMMITTEE_NAME?: string | null;
  /** 상세_URL */
  LINK_URL2?: string | null;
  /** 대수 */
  UNIT_CD?: string | null;
  /** 대수 */
  UNIT_NM?: string | null;
  /** 위원회코드 */
  HR_DEPT_CD?: string | null;
  /** 안건 */
  ANGUN?: string | null;
}

export interface 위원회별_일정Response {
  nrsldhjpaemrmolla?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 위원회별_일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 정보공개청구_이의신청_처리현황RowItem {
  /** 년도 */
  YR?: string | null;
  /** 기관 */
  INST_CD?: string | null;
  /** 일련번호 */
  SN?: string | null;
  /** 사건명 */
  IND_NM?: string | null;
  /** 신청일 */
  APL_DT?: string | null;
  /** 주문내용 */
  ORDG_RSON?: string | null;
  /** 신청취지 */
  APL_MEAN?: string | null;
  /** 이유(처리결과요지) */
  DEAL_RSLT_MTH?: string | null;
}

export interface 정보공개청구_이의신청_처리현황Response {
  nfwzyvuxacqtkttvr?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 정보공개청구_이의신청_처리현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_사무총장동향RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_사무총장동향Response {
  navxqzpzafxazsobg?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_사무총장동향RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회뉴스ON_외부기고RowItem {
  /** 제목 */
  V_TITLE?: string | null;
  /** 기사 URL */
  URL_LINK?: string | null;
  /** 최종수정일 */
  DATE_LASTMODIFIED?: string | null;
  /** 기사작성일 */
  DATE_RELEASED?: string | null;
  /** 기사내용 */
  V_BODY?: string | null;
}

export interface 국회뉴스ON_외부기고Response {
  nrjoiyzqaxpwfzuut?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회뉴스ON_외부기고RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회의원_의정보고서RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 발행처 */
  PUBLISHER?: string | null;
  /** 상세보기URL */
  DETAIL_VIEW_URL?: string | null;
  /** 수정일 */
  UPDATE_DT?: string | null;
  /** 발행년 */
  PUBLISH_DT?: string | null;
}

export interface 국회의원_의정보고서Response {
  nmfcjtvmajsbhhckf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회의원_의정보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 청원_처리현황RowItem {
  /** 청원번호 */
  BILL_NO?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 대 */
  AGE?: string | null;
  /** 청원명 */
  BILL_NAME?: string | null;
  /** 청원인 */
  PROPOSER?: string | null;
  /** 소개의원 */
  APPROVER?: string | null;
  /** 접수일자 */
  PROPOSE_DT?: string | null;
  /** 의결결과 */
  PROC_RESULT_CD?: string | null;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string | null;
  /** 소관위 */
  CURR_COMMITTEE?: string | null;
  /** 위원회회부일 */
  COMMITTEE_DT?: string | null;
  /** 상세보기URL */
  LINK_URL?: string | null;
}

export interface 청원_처리현황Response {
  ncryefyuaflxnqbqo?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 청원_처리현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의장단_주요일정RowItem {
  /** 일자 */
  SCH_DT?: string | null;
  /** 시간 */
  SCH_TM?: string | null;
  /** 의장단구분(의장, 부의장 구분) */
  CHM_DIV?: string | null;
  /** 일정내용 */
  SCH_CN?: string | null;
}

export interface 의장단_주요일정Response {
  SPGRPSCHEDULE?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의장단_주요일정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_알림지홍보책자RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_알림지홍보책자Response {
  ndbehlnaagkjdvmdu?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_알림지홍보책자RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 역대_국회_선거일_의원정수_임기정보RowItem {
  /** 대수 */
  ERACO?: string | null;
  /** 대별선거구분 */
  GCL_ELEC_DIV?: string | null;
  /** 선거일 */
  ELEC_DE?: string | null;
  /** 의원정수 */
  ASBLM_PSNUM?: string | null;
  /** 임기시작 */
  TERM_BG?: string | null;
  /** 임기종료 */
  TERM_ED?: string | null;
  /** 기간 */
  PROD?: string | null;
  /** 비고 */
  RMK?: string | null;
}

export interface 역대_국회_선거일_의원정수_임기정보Response {
  nokivirranikoinnk?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 역대_국회_선거일_의원정수_임기정보RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의원실_지원경비_현황RowItem {
  /** 연도 */
  YR?: string | null;
  /** 구분 */
  FST_DIV_ETC?: string | null;
  /** 구분 */
  SND_DIV_ETC?: string | null;
  /** 구분 */
  TRD_DIV_ETC?: string | null;
  /** 지급액 */
  PYM_EXEAMT?: string | null;
  /** 지급방법 */
  PYM_MTH?: string | null;
}

export interface 의원실_지원경비_현황Response {
  naqngwqyayereswlo?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의원실_지원경비_현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_정책연구용역_보고서RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 파일링크 */
  SYSATTACH1?: string | null;
  /** 등록일자 */
  REG_DATE?: string | null;
}

export interface 국회도서관_정책연구용역_보고서Response {
  nzkdlzgoadvnlcubt?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_정책연구용역_보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 인사청문회RowItem {
  /** 직위정보 */
  APPOINT_GRADE?: string | null;
  /** 후보자명 */
  APPOINT_NAME?: string | null;
  /** 의안명 */
  BILL_NAME?: string | null;
  /** 제안일 */
  PROPOSE_DT?: string | null;
  /** 소관위원회 */
  CURR_COMMITTEE?: string | null;
  /** 소관위 회부일 */
  SUBMIT_DT?: string | null;
  /** 소관위상정일 */
  PRESENT_DT?: string | null;
  /** 소관위처리일 */
  PROC_DT?: string | null;
  /** 처리결과 */
  PROC_RESULT?: string | null;
  /** 바로가기URL */
  LINK_URL?: string | null;
  /** 청문회실시계획서 */
  MP_BOOK_URL?: string | null;
  /** 대수 */
  AGE?: string | null;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string | null;
  /** 의안ID */
  BILL_ID?: string | null;
  /** 의안번호 */
  BILL_NO?: string | null;
}

export interface 인사청문회Response {
  nrvsawtaauyihadij?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 인사청문회RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 연석회의_회의록RowItem {
  /** 회의ID */
  CONF_ID?: string | null;
  /** 대수 */
  ERACO?: string | null;
  /** 회기 */
  SESS?: string | null;
  /** 차수 */
  DGR?: string | null;
  /** 회의일자 */
  CONF_DT?: string | null;
  /** 회의종류 */
  CONF_KND?: string | null;
  /** 위원회코드 */
  CMIT_CD?: string | null;
  /** 위원회명 */
  CMIT_NM?: string | null;
  /** 다운로드 URL */
  DOWN_URL?: string | null;
}

export interface 연석회의_회의록Response {
  VCONFJMCONFLIST?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 연석회의_회의록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 의장단_보도자료RowItem {
  /** 의장단구분 (의장, 부의장 구분) */
  CHM_DIV?: string | null;
  /** 보도자료 제목 */
  ARTC_TTL?: string | null;
  /** 작성일자 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 의장단_보도자료Response {
  SPGRPPRESS?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 의장단_보도자료RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회입법조사처_연차보고서RowItem {
  /** PDF파일URL */
  PDFFILEURL?: string | null;
  /** 뷰어URL */
  VIEWERURL?: string | null;
  /** 자료명 */
  BOOKNM?: string | null;
  /** 등록일자 */
  INSERTDT?: string | null;
}

export interface 국회입법조사처_연차보고서Response {
  nbeysefuaxfqkbynf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회입법조사처_연차보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회미래연구원_연차보고서RowItem {
  /** 제목 */
  TITLE?: string | null;
  /** 작성자 */
  WRITER?: string | null;
  /** 작성일 */
  REG_DTTM?: string | null;
  /** 상세 URL */
  DETAIL_URL?: string | null;
}

export interface 국회미래연구원_연차보고서Response {
  ANUREPORT?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회미래연구원_연차보고서RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회도서관_사업에_관한_행정정보_공표RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 분류항목코드 */
  CTGR_CD?: string | null;
  /** 분류항목 */
  CTGR_NM?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회도서관_사업에_관한_행정정보_공표Response {
  nqxsurgrayxndzwjf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회도서관_사업에_관한_행정정보_공표RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 영문국회의장_주요동정RowItem {
  /** 주요동정 제목 */
  MN_ACTV_TTL?: string | null;
  /** 작성일자 */
  WRT_DT?: string | null;
  /** 링크URL */
  LINK_URL?: string | null;
}

export interface 영문국회의장_주요동정Response {
  ENSPEAKERACTIVITI?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 영문국회의장_주요동정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회예산정책처_업무추진비_집행현황RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 파일ID */
  FILE_ID?: string | null;
}

export interface 국회예산정책처_업무추진비_집행현황Response {
  nknmvzexapgiarqcd?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회예산정책처_업무추진비_집행현황RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_경제재정수첩RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_경제재정수첩Response {
  ncnpwqimabagvdmky?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_경제재정수첩RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_재정동향_이슈RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_재정동향_이슈Response {
  nsjmwljyauxvdodgh?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_재정동향_이슈RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회예산정책처_홍보물RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 제목 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface 국회예산정책처_홍보물Response {
  nozwevvqatjorgvoc?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회예산정책처_홍보물RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 국회예산정책처_정보목록RowItem {
  /** 생산년월 */
  PRDC_YM_NM?: string | null;
  /** 공개파일명 */
  OPB_FL_NM?: string | null;
  /** 기관코드 */
  INST_CD?: string | null;
  /** 기관명 */
  INST_NM?: string | null;
  /** 공개파일경로 */
  OPB_FL_PH?: string | null;
  /** 첨부파일ID */
  FILE_ID?: string | null;
}

export interface 국회예산정책처_정보목록Response {
  nzdoatdlaxeaqolvx?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 국회예산정책처_정보목록RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_대한민국_지방재정RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_대한민국_지방재정Response {
  naqdzohuagtisumcw?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_대한민국_지방재정RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_조세분석_및_연구RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_조세분석_및_연구Response {
  ncsrgzrwabonoefxi?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_조세분석_및_연구RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 예산정책연구RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface 예산정책연구Response {
  nrbcmchtaaqktsbjf?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 예산정책연구RowItem[];
    }
  ];
  xmlData?: string;
}

export interface NABO_재정사업_평가RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
  /** 링크 주소 */
  LINK_URL?: string | null;
}

export interface NABO_재정사업_평가Response {
  nzjvrirbauqmffblj?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: NABO_재정사업_평가RowItem[];
    }
  ];
  xmlData?: string;
}

export interface 정책연구용역RowItem {
  /** 발간일 */
  REG_DATE?: string | null;
  /** 부서명 */
  DEPARTMENT_NAME?: string | null;
  /** 보고서명 */
  SUBJECT?: string | null;
}

export interface 정책연구용역Response {
  nakxneqwaouwyagim?: [
    {
      head?: [
        { list_total_count?: number },
        {
          RESULT?: {
            CODE?: string;
            MESSAGE?: string;
          };
        }
      ];
    },
    {
      row?: 정책연구용역RowItem[];
    }
  ];
  xmlData?: string;
}

// NATV 뉴스_의장단 파라미터
export interface NATV_뉴스_의장단Params extends BaseParams {
  /** 제목 */
  COMP_MAIN_TITLE?: string;
  /** 내용 */
  COMP_CONTENT?: string;
}

// 의원친선협회 임·회원 명단 파라미터
export interface 의원친선협회_임회원_명단Params extends BaseParams {
  /** 제목 */
  RPT_TITLE?: string;
  /** 기준일자 */
  STND_DT?: string;
  /** 작성자 */
  WRT_NM?: string;
  /** 대 */
  UNIT_NM?: string;
}

// 정보공개청구 행정심판 결과현황 파라미터
export interface 정보공개청구_행정심판_결과현황Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 기관 */
  INST_CD?: string;
  /** 일련번호 */
  SN?: string;
  /** 사건명 */
  IND_NM?: string;
  /** 의결(재결)일 */
  RSLN_DT?: string;
  /** 피청구인 */
  OJ_DEMD_PN?: string;
  /** 주문내용 */
  ORDG_RSON?: string;
  /** 청구취지 */
  DEMD_MEAN?: string;
  /** 이유(심판결과요지) */
  JUD_RSLT_MTH?: string;
}

// 국회도서관 제공 자료 통합 API 파라미터
export interface 국회도서관_제공_자료_통합_APIParams extends BaseParams {
  /** 발간자료구분 */
  MTR_DIV?: string;
  /** 발간자료제목 */
  MTR_TTL?: string;
}

// 역대 국회의원 위원회 경력 파라미터
export interface 역대_국회의원_위원회_경력Params extends BaseParams {
  /** 의원이름(한글) */
  HG_NM?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
  /** 경력대수코드 */
  PROFILE_UNIT_CD?: string;
}

// 법률안 심사 및 처리(처리의안) 파라미터
export interface 법률안_심사_및_처리처리의안Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 대수 */
  AGE?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 제안자구분 */
  PROPOSER_KIND?: string;
  /** 본회의심의결과 */
  PROC_RESULT_CD?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
}

// 역대 정당별 국회의원 선거결과 파라미터
export interface 역대_정당별_국회의원_선거결과Params extends BaseParams {
  /** 대수 */
  ORD_NO?: string;
  /** 정당 / 단체 */
  PLPT_NM?: string;
}

// 처리 의안통계(발의주체별 법률안) 파라미터
export interface 처리_의안통계발의주체별_법률안Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회문화극장 공연 일정 파라미터
export interface 국회문화극장_공연_일정Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 관람예약 */
  RE_DT?: string;
  /** 일시 */
  DT?: string;
  /** 장소 */
  ETC_CHAR11?: string;
}

// 역대 의안 통계 파라미터
export interface 역대_의안_통계Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 위원회 회의록 파라미터
export interface 위원회_회의록Params extends BaseParams {
  /** 회의명 */
  TITLE?: string;
  /** 회의종류명 */
  CLASS_NAME?: string;
  /** 대수 */
  DAE_NUM?: string;
  /** 위원회명 */
  COMM_NAME?: string;
  /** 회의날짜 */
  CONF_DATE?: string;
  /** 안건명 */
  SUB_NAME?: string;
  /** 위원회코드 */
  DEPT_CD?: string;
}

// 회의록 대별 위원회 목록 파라미터
export interface 회의록_대별_위원회_목록Params extends BaseParams {
  /** 대수 */
  TH?: string;
  /** 회의종류 */
  CLASS_ID?: string;
  /** 위원회명 */
  CMIT_NM?: string;
}

// 국정조사 결과보고서 파라미터
export interface 국정조사_결과보고서Params extends BaseParams {
  /** 의안명 */
  BILL_NM?: string;
}

// 국회도서관 업무추진비 집행현황 파라미터
export interface 국회도서관_업무추진비_집행현황Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// 국회사무처 정보목록 파라미터
export interface 국회사무처_정보목록Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// 종료된 입법예고 파라미터
export interface 종료된_입법예고Params extends BaseParams {
  /** 의안 ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 법률안명 */
  BILL_NAME?: string;
  /** 대 */
  AGE?: string;
  /** 제안자구분 */
  PROPOSER_KIND_CD?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 소관위원회 */
  CURR_COMMITTEE?: string;
  /** 소관위ID */
  CURR_COMMITTEE_ID?: string;
}

// 토론회 결과보고서 파라미터
export interface 토론회_결과보고서Params extends BaseParams {
  /** 발간물 제목 */
  PBLM_TTL?: string;
}

// 법률안 심사 및 처리(최근 본회의처리 의안) 파라미터
export interface 법률안_심사_및_처리최근_본회의처리_의안Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 대수 */
  AGE?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 제안자구분 */
  PROPOSER_KIND?: string;
  /** 제안일 */
  PROPOSE_DT?: string;
  /** 본회의심의결과 */
  PROC_RESULT_CD?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
  /** 소관위회부일 */
  COMMITTEE_DT?: string;
  /** 의결일 */
  PROC_DT?: string;
}

// 국회뉴스ON_보좌진 이야기 파라미터
export interface 국회뉴스ON_보좌진_이야기Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
  /** 기사 URL */
  URL_LINK?: string;
}

// 국회의원 발의법률안 파라미터
export interface 국회의원_발의법률안Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 법률안명 */
  BILL_NAME?: string;
  /** 소관위원회 */
  COMMITTEE?: string;
  /** 본회의심의결과 */
  PROC_RESULT?: string;
  /** 대수 */
  AGE?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 소관위원회ID */
  COMMITTEE_ID?: string;
}

// 연도별 연구단체 건수 파라미터
export interface 연도별_연구단체_건수Params extends BaseParams {
  /** 구분 */
  GUBUN?: string;
  /** 연도 */
  YEAR?: string;
}

// 본회의 일정 파라미터
export interface 본회의_일정Params extends BaseParams {
  /** 회기 */
  MEETINGSESSION?: string;
  /** 차수 */
  CHA?: string;
  /** 제목 */
  TITLE?: string;
  /** 일자 */
  MEETTING_DATE?: string;
  /** 대수 */
  UNIT_CD?: string;
}

// 의회외교 영문의회용어검색 파라미터
export interface 의회외교_영문의회용어검색Params extends BaseParams {
  /** 의회외교 단어 */
  DPLM_WORD?: string;
}

// 의안 심사정보(예ㆍ결산 제외) 파라미터
export interface 의안_심사정보예ㆍ결산_제외Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회의원 소규모 연구용역 결과보고서 파라미터
export interface 국회의원_소규모_연구용역_결과보고서Params extends BaseParams {
  /** 년도 */
  YEAR?: string;
  /** 의원명 */
  ASBLM_NM?: string;
  /** 대 */
  UNIT_NM?: string;
  /** 보고서제목 */
  RPT_TITLE?: string;
  /** 대별코드 */
  UNIT_CD?: string;
  /** 분기 */
  QUARTER?: string;
  /** 구분명 */
  DIV_NM?: string;
}

// 법률안 심사 및 처리(계류의안) 파라미터
export interface 법률안_심사_및_처리계류의안Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 제안자구분 */
  PROPOSER_KIND?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
}

// 법률안 심사 및 처리(의안검색) 파라미터
export interface 법률안_심사_및_처리의안검색Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 대 */
  AGE?: string;
  /** 의안명(한글) */
  BILL_NAME?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 제안자구분 */
  PROPOSER_KIND?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
  /** 본회의심의결과 */
  PROC_RESULT_CD?: string;
  /** 의결일 */
  PROC_DT?: string;
}

// 위원회별 소위원회 일정 파라미터
export interface 위원회별_소위원회_일정Params extends BaseParams {
  /** 회의일자 */
  MEETING_DATE?: string;
  /** 시간 */
  MEETING_TIME?: string;
  /** 회기 */
  SESS?: string;
  /** 차수 */
  DEGREE?: string;
  /** 구분 */
  TITLE?: string;
  /** 위원회 명 */
  COMMITTEE_NAME?: string;
  /** 대수 */
  UNIT_CD?: string;
  /** 위원회코드 */
  HR_DEPT_CD?: string;
}

// 아트갤러리 전시 일정 파라미터
export interface 아트갤러리_전시_일정Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 일시 */
  DT?: string;
  /** 장소 */
  ETC_CHAR11?: string;
}

// 시민의정연수 파라미터
export interface 시민의정연수Params extends BaseParams {
  /** 연수명 */
  EDU_TITLE_NM?: string;
  /** 대상자 */
  EDU_OJR?: string;
  /** 장소 */
  EDU_PLC_NM?: string;
  /** 대상구분명 */
  EDU_GUBUN_NM?: string;
  /** 연수기간 */
  EDU_DT?: string;
}

// NATV 뉴스_본회의 파라미터
export interface NATV_뉴스_본회의Params extends BaseParams {
  /** 제목 */
  COMP_MAIN_TITLE?: string;
  /** 내용 */
  COMP_CONTENT?: string;
}

// 국회입법조사처 연구보고서(지표로 보는 이슈) 파라미터
export interface 국회입법조사처_연구보고서지표로_보는_이슈Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 국회입법조사처 정책연구용역자료 파라미터
export interface 국회입법조사처_정책연구용역자료Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 계류의안 통계 파라미터
export interface 계류의안_통계Params extends BaseParams {
}

// 국회의원 정보 통합 API 파라미터
export interface 국회의원_정보_통합_APIParams extends BaseParams {
  /** 국회의원코드 */
  NAAS_CD?: string;
  /** 국회의원명 */
  NAAS_NM?: string;
  /** 정당명 */
  PLPT_NM?: string;
  /** 소속위원회명 */
  BLNG_CMIT_NM?: string;
}

// 의원실 행사 정보 파라미터
export interface 의원실_행사_정보Params extends BaseParams {
}

// 국회채용정보 파라미터
export interface 국회채용정보Params extends BaseParams {
  /** 소속기관명 */
  BLNG_INST_NM?: string;
  /** 제목 */
  BRDI_SJ?: string;
  /** 내용 */
  BRDI_CN?: string;
  /** 작성일자 */
  RDT?: string;
}

// 국회의원 상임위 활동 파라미터
export interface 국회의원_상임위_활동Params extends BaseParams {
  /** 대수 */
  DAE_NUM?: string;
  /** 회기 */
  SES_NUM?: string;
  /** 차수 */
  DEGREE_NUM?: string;
  /** 위원회 */
  COMM_NAME?: string;
  /** 회의일 */
  CONF_DATE?: string;
  /** 회의종류 */
  CLASS_NAME?: string;
}

// 의안 위원회심사 회의정보 조회 파라미터
export interface 의안_위원회심사_회의정보_조회Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
}

// 국회입법조사처 알림지(국회입법조사처보) 파라미터
export interface 국회입법조사처_알림지국회입법조사처보Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 의안별 회의록 목록 파라미터
export interface 의안별_회의록_목록Params extends BaseParams {
  /** 의안 ID */
  BILL_ID?: string;
}

// 국회도서관 정보목록 파라미터
export interface 국회도서관_정보목록Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// 특별위원회 회의록 파라미터
export interface 특별위원회_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 위원회별 전체회의 일정 파라미터
export interface 위원회별_전체회의_일정Params extends BaseParams {
  /** 회의일자 */
  MEETING_DATE?: string;
  /** 시간 */
  MEETING_TIME?: string;
  /** 회기 */
  SESS?: string;
  /** 차수 */
  DEGREE?: string;
  /** 구분 */
  TITLE?: string;
  /** 위원회 명 */
  COMMITTEE_NAME?: string;
  /** 대수 */
  UNIT_CD?: string;
  /** 위원회코드 */
  HR_DEPT_CD?: string;
}

// NATV 뉴스_토론회/세미나 파라미터
export interface NATV_뉴스_토론회세미나Params extends BaseParams {
  /** 제목 */
  COMP_MAIN_TITLE?: string;
  /** 등록일자 */
  REG_DATE?: string;
  /** 내용 */
  COMP_CONTENT?: string;
}

// 수입징수현황(수입항별) 파라미터
export interface 수입징수현황수입항별Params extends BaseParams {
  /** 회계년도 */
  FSCL_YY?: string;
  /** 회계월 */
  EXE_M?: string;
  /** 회계명 */
  FSCL_NM?: string;
  /** 수입관명 */
  IKWAN_NM?: string;
  /** 수입항명 */
  IHANG_NM?: string;
}

// 국회미래연구원 브리프형 심층분석 보고서 파라미터
export interface 국회미래연구원_브리프형_심층분석_보고서Params extends BaseParams {
}

// 최근 헌재결정과 개정대상 법률 파라미터
export interface 최근_헌재결정과_개정대상_법률Params extends BaseParams {
  /** 개정대상법률현황제목 */
  REV_LAW_SITU_TTLL?: string;
}

// 국회의원 직무상 국외활동 신고 내역 파라미터
export interface 국회의원_직무상_국외활동_신고_내역Params extends BaseParams {
  /** 대별코드 */
  UNIT_CD?: string;
  /** 성명 */
  PN?: string;
  /** 일정 */
  SCH_DYS?: string;
  /** 목적지 */
  DSTN_NM?: string;
  /** 대 */
  UNIT_NM?: string;
}

// 지방의회 연수 교육일정 파라미터
export interface 지방의회_연수_교육일정Params extends BaseParams {
  /** 연수명 */
  EDU_TITLE_NM?: string;
  /** 대상자 */
  EDU_OJR?: string;
  /** 장소 */
  EDU_PLC_NM?: string;
  /** 대상구분명 */
  EDU_GUBUN_NM?: string;
  /** 연수기간 */
  EDU_DT?: string;
}

// 연구단체 연구활동비 집행현황 파라미터
export interface 연구단체_연구활동비_집행현황Params extends BaseParams {
  /** 연도 */
  YEAR?: string;
  /** 분야 */
  MAJR?: string;
  /** 단체 */
  ORG_NM?: string;
}

// 영상회의록 목록 파라미터
export interface 영상회의록_목록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 회의일자 */
  CONF_DT?: string;
}

// 국회뉴스ON_상임위·본회의 파라미터
export interface 국회뉴스ON_상임위본회의Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 국회뉴스ON_의원의 맛과멋 파라미터
export interface 국회뉴스ON_의원의_맛과멋Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 국회의원 겸직 결정 내역 파라미터
export interface 국회의원_겸직_결정_내역Params extends BaseParams {
  /** 대수 */
  ORD_NUM?: string;
  /** 연도 */
  YR?: string;
  /** 공개날짜 */
  OPB_DAY?: string;
  /** 성명 */
  PN?: string;
  /** 겸직기관명 */
  CCOF_INST_NM?: string;
  /** 직위 */
  PSIT_NM?: string;
}

// 국회의원 위원회 의사일정 파라미터
export interface 국회의원_위원회_의사일정Params extends BaseParams {
  /** 국회의원코드 */
  NAAS_CD?: string;
}

// 처리 의안통계(위원회별) 파라미터
export interface 처리_의안통계위원회별Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국정조사 회의록 파라미터
export interface 국정조사_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 국정감사 회의록 파라미터
export interface 국정감사_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 국회방송 편성표 파라미터
export interface 국회방송_편성표Params extends BaseParams {
  /** 부제 */
  ADD_DISCRIPT?: string;
  /** 방송프로그램 */
  PRO_TITLE?: string;
  /** 방영시간 */
  FORMATION_TIME?: string;
  /** 방영일자 */
  FORMATION_DT?: string;
}

// 국회 보유 자산(건물) 파라미터
export interface 국회_보유_자산건물Params extends BaseParams {
  /** 구분 */
  DIV_NM?: string;
  /** 건물 */
  BLDG_NM?: string;
  /** 년도 */
  YR?: string;
}

// 퇴직 공직자 취업이력 공시 파라미터
export interface 퇴직_공직자_취업이력_공시Params extends BaseParams {
  /** 연도 */
  YR?: string;
  /** 성명 */
  PN?: string;
  /** 퇴직 시 직위 */
  RTR_THEN_PSIT_NM?: string;
  /** 취업기관 */
  GETJOB_INST_NM?: string;
  /** 직위 */
  PSIT_NM?: string;
}

// 국회입법조사처 연구보고서(국정감사관련(보고서)) 파라미터
export interface 국회입법조사처_연구보고서국정감사관련보고서Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// NABO 경제ㆍ산업동향 이슈 파라미터
export interface NABO_경제ㆍ산업동향_이슈Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 연차보고서 파라미터
export interface 연차보고서Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회명 */
  CMIT_NM?: string;
}

// 현안,외국에선 파라미터
export interface 현안외국에선Params extends BaseParams {
  /** 발간물 제목 */
  PBLM_TTL?: string;
}

// 예결산특별위원회 회의록 파라미터
export interface 예결산특별위원회_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 전원위원회 회의록 파라미터
export interface 전원위원회_회의록Params extends BaseParams {
  /** 회의명 */
  TITLE?: string;
  /** 회의종류명 */
  CLASS_NAME?: string;
  /** 대수 */
  DAE_NUM?: string;
  /** 회의날짜 */
  CONF_DATE?: string;
  /** 안건번호 */
  SUB_NUM?: string;
  /** 안건명 */
  SUB_NAME?: string;
}

// 국회예산정책처 제공 자료 통합 API 파라미터
export interface 국회예산정책처_제공_자료_통합_APIParams extends BaseParams {
  /** 발간자료구분 */
  MTR_DIV?: string;
  /** 발간자료제목 */
  MTR_TTL?: string;
}

// 예산춘추 파라미터
export interface 예산춘추Params extends BaseParams {
  /** 발간일 */
  REG_DATE?: string;
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 입법고시(5급) 채용현황 파라미터
export interface 입법고시5급_채용현황Params extends BaseParams {
  /** 연도 */
  YR?: string;
  /** 직류 */
  JBTP_NM?: string;
}

// 국회뉴스ON_의원실 행사 파라미터
export interface 국회뉴스ON_의원실_행사Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// NABO 대한민국 공공기관 파라미터
export interface NABO_대한민국_공공기관Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 국회도서관 행정정보 공표목록 파라미터
export interface 국회도서관_행정정보_공표목록Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// 처리 의안통계(위원회별 법률안) 파라미터
export interface 처리_의안통계위원회별_법률안Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회입법조사처 연구보고서(NARS 현안분석) 파라미터
export interface 국회입법조사처_연구보고서NARS_현안분석Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 국회입법조사처 정보공개청구 처리현황 목록 파라미터
export interface 국회입법조사처_정보공개청구_처리현황_목록Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 일련번호 */
  SN?: string;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string;
  /** 청구사항>공개형태 */
  OPB_FOM_NM?: string;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string;
  /** 결정내용>결정구분 */
  DCS_DIV?: string;
  /** 결정내용>공개내용 */
  OPB_RSON?: string;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string;
  /** 결정내용>결정통지일자 */
  DCS_NTC_DT?: string;
}

// 국회사무처 업무추진비 집행현황 파라미터
export interface 국회사무처_업무추진비_집행현황Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// 국회의원 연구단체 등록현황 파라미터
export interface 국회의원_연구단체_등록현황Params extends BaseParams {
  /** 대수 */
  REGDAESU?: string;
  /** 분야별 */
  RE_TOPIC_NAME?: string;
  /** 연구단체 */
  RE_NAME?: string;
  /** 연구목적 */
  RE_OBJECTIVE?: string;
  /** 대표의원 */
  MAIN_MEM?: string;
  /** 연구책임의원 */
  RE_MEM?: string;
  /** 구성의원 */
  OBJ_MEM?: string;
}

// 8급 공개경쟁 채용현황 파라미터
export interface grade_8급_공개경쟁_채용현황Params extends BaseParams {
  /** 연도 */
  YR?: string;
  /** 직류 */
  JBTP_NM?: string;
}

// 위원회 계류법률안 파라미터
export interface 위원회_계류법률안Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명(한글) */
  BILL_NAME?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
  /** 제안일 */
  PROPOSE_DT?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
}

// 국회입법조사처 기타자료 파라미터
export interface 국회입법조사처_기타자료Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 국회도서관 기타 행정정보 공표 파라미터
export interface 국회도서관_기타_행정정보_공표Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM?: string;
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// 인사청문회 회의록 파라미터
export interface 인사청문회_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 회기정보 파라미터
export interface 회기정보Params extends BaseParams {
}

// (영문)위원회 정보 파라미터
export interface 영문위원회_정보Params extends BaseParams {
  /** 위원회구분코드 */
  CMIT_DIV_CD?: string;
  /** 위원회명 */
  CMIT_NM?: string;
}

// NATV 뉴스_정당 파라미터
export interface NATV_뉴스_정당Params extends BaseParams {
  /** 제목 */
  COMP_MAIN_TITLE?: string;
  /** 등록일자 */
  REG_DATE?: string;
  /** 내용 */
  COMP_CONTENT?: string;
}

// 국회의원 본회의 의사일정 파라미터
export interface 국회의원_본회의_의사일정Params extends BaseParams {
  /** 국회의원코드 */
  NAAS_CD?: string;
}

// NABO 경제 정책 및 동향 분석 파라미터
export interface NABO_경제_정책_및_동향_분석Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 국회미래연구원 미래생각 파라미터
export interface 국회미래연구원_미래생각Params extends BaseParams {
}

// 국회의원 인적사항 파라미터
export interface 국회의원_인적사항Params extends BaseParams {
  /** 이름 */
  HG_NM?: string;
  /** 정당명 */
  POLY_NM?: string;
  /** 선거구 */
  ORIG_NM?: string;
  /** 소속 위원회 목록 */
  CMITS?: string;
  /** 성별 */
  SEX_GBN_NM?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
}

// 의안 법사위 회의정보 조회 파라미터
export interface 의안_법사위_회의정보_조회Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
}

// NABO 조세수첩 파라미터
export interface NABO_조세수첩Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 대한민국 조세 파라미터
export interface 대한민국_조세Params extends BaseParams {
  /** 발간물 제목 */
  PBLM_TTL?: string;
}

// 예결산 예비심사 정보 조회 파라미터
export interface 예결산_예비심사_정보_조회Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
}

// 대통령취임연설 포함 회의록 파라미터
export interface 대통령취임연설_포함_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 청원 심사정보 파라미터
export interface 청원_심사정보Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회뉴스ON_국회는 지금 파라미터
export interface 국회뉴스ON_국회는_지금Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 국회입법조사처 연구보고서(입법영향분석보고서) 파라미터
export interface 국회입법조사처_연구보고서입법영향분석보고서Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// (영문)국회의원 정보 파라미터
export interface 영문국회의원_정보Params extends BaseParams {
  /** 국회의원 영문명 */
  NAAS_EN_NM?: string;
  /** 국회의원 코드 */
  NAAS_CD?: string;
}

// 법률안 심사 및 처리(본회의부의안건) 파라미터
export interface 법률안_심사_및_처리본회의부의안건Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
  /** 소관위처리결과 */
  COMMITTEE_RESULT?: string;
}

// 청원 상세정보 파라미터
export interface 청원_상세정보Params extends BaseParams {
  /** 청원ID */
  PTT_ID?: string;
}

// 역대 국회 정당별 국회의원 지역분포 파라미터
export interface 역대_국회_정당별_국회의원_지역분포Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 정당명 */
  PLPT_NM?: string;
}

// 서면질의답변서 목록 파라미터
export interface 서면질의답변서_목록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 회의ID */
  CONF_ID?: string;
}

// 국회문화극장 영화 일정 파라미터
export interface 국회문화극장_영화_일정Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 관람예약 */
  RE_DT?: string;
  /** 일시 */
  DT?: string;
  /** 장소 */
  ETC_CHAR11?: string;
}

// 국회뉴스ON_발행물 및 보고서 파라미터
export interface 국회뉴스ON_발행물_및_보고서Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 지출집행현황(단위사업별) 파라미터
export interface 지출집행현황단위사업별Params extends BaseParams {
  /** 회계년도 */
  FSCL_YY?: string;
  /** 집행월 */
  EXE_M?: string;
  /** 회계명 */
  FSCL_NM?: string;
  /** 분야명 */
  FLD_NM?: string;
  /** 부문명 */
  SECT_NM?: string;
  /** 프로그램명 */
  PGM_NM?: string;
  /** 단위사업명 */
  ACTV_NM?: string;
}

// (영문)최신 처리 의안 파라미터
export interface 영문최신_처리_의안Params extends BaseParams {
  /** 의안명 */
  BILL_NM?: string;
}

// 본회의 처리안건_결산 파라미터
export interface 본회의_처리안건_결산Params extends BaseParams {
  /** 대수 */
  AGE?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 의안활동구분 */
  BILL_KIND?: string;
  /** 의결결과 */
  PROC_RESULT_CD?: string;
  /** 제안일 */
  PROPOSE_DT?: string;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string;
  /** 의안ID */
  BILL_ID?: string;
}

// 위원회별 개정대상 법률 현황 파라미터
export interface 위원회별_개정대상_법률_현황Params extends BaseParams {
}

// 시정 및 처리 요구사항에 대한 결과보고서 파라미터
export interface 시정_및_처리_요구사항에_대한_결과보고서Params extends BaseParams {
  /** 보고서 년도 */
  RPT_YR?: string;
  /** 보고서 제목 */
  RPT_TTL?: string;
}

// 국회미래연구원 제공 자료 통합 API 파라미터
export interface 국회미래연구원_제공_자료_통합_APIParams extends BaseParams {
  /** 발간자료구분 */
  MTR_DIV?: string;
  /** 발간자료제목 */
  MTR_TTL?: string;
}

// 예결산 종합심사 회의정보 조회 파라미터
export interface 예결산_종합심사_회의정보_조회Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
}

// 위원회별 공청회 일정 파라미터
export interface 위원회별_공청회_일정Params extends BaseParams {
  /** 회의일자 */
  MEETING_DATE?: string;
  /** 시간 */
  MEETING_TIME?: string;
  /** 회기 */
  SESS?: string;
  /** 차수 */
  DEGREE?: string;
  /** 구분 */
  TITLE?: string;
  /** 위원회 명 */
  COMMITTEE_NAME?: string;
  /** 대수 */
  UNIT_CD?: string;
  /** 위원회코드 */
  HR_DEPT_CD?: string;
}

// 의안정보 통합 API 파라미터
export interface 의안정보_통합_APIParams extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안종류 */
  BILL_KND?: string;
  /** 의안명 */
  BILL_NM?: string;
  /** 제안자구분 */
  PPSR_KND?: string;
  /** 제안일 */
  PPSL_DT?: string;
  /** 소관위원회명 */
  JRCMIT_NM?: string;
  /** 본회의 심의결과 */
  RGS_CONF_RSLT?: string;
}

// 국회박물관 행사 일정 파라미터
export interface 국회박물관_행사_일정Params extends BaseParams {
  /** 행사제목 */
  ARTC_TTL?: string;
}

// 본회의 처리안건_예산안 파라미터
export interface 본회의_처리안건_예산안Params extends BaseParams {
  /** 대수 */
  AGE?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 의결결과 */
  PROC_RESULT_CD?: string;
  /** 제안일 */
  PROPOSE_DT?: string;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string;
  /** 의안ID */
  BILL_ID?: string;
}

// 국회의원 정책 세미나 개최 현황 파라미터
export interface 국회의원_정책_세미나_개최_현황Params extends BaseParams {
  /** 제목 */
  TITLE?: string;
  /** 개최일시 */
  HOST_DT?: string;
  /** 주최 */
  HOST_INS_NAME?: string;
  /** 발제자 */
  ATTENDANCE_NAME1?: string;
  /** 토론자 */
  ATTENDANCE_NAME2?: string;
}

// 실시간 의사중계 현황 파라미터
export interface 실시간_의사중계_현황Params extends BaseParams {
}

// 국회의원 청원현황 파라미터
export interface 국회의원_청원현황Params extends BaseParams {
  /** 국회의원코드 */
  NAAS_CD?: string;
}

// 국정감사 결과보고서 파라미터
export interface 국정감사_결과보고서Params extends BaseParams {
  /** 보고서 년도 */
  RPT_YR?: string;
  /** 보고서 제목 */
  RPT_TTL?: string;
}

// 외빈연설 포함 회의록 파라미터
export interface 외빈연설_포함_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 법제실 발간자료 파라미터
export interface 법제실_발간자료Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 분류번호 */
  CATEGORY_ID?: string;
  /** 구분 */
  CATEGORY_NM?: string;
  /** 등록일 */
  CREATE_DT?: string;
}

// 국회발간물 통합 API 파라미터
export interface 국회발간물_통합_APIParams extends BaseParams {
  /** 발간자료구분 */
  MTR_DIV?: string;
  /** 발간자료제목 */
  MTR_TTL?: string;
}

// 국회미래연구원 미래칼럼 파라미터
export interface 국회미래연구원_미래칼럼Params extends BaseParams {
}

// 국회도서관 행정감시 행정정보 공표 파라미터
export interface 국회도서관_행정감시_행정정보_공표Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
  /** 기관명 */
  INST_NM?: string;
}

// 처리 의안통계(의안종류별ㆍ위원회별) 파라미터
export interface 처리_의안통계의안종류별ㆍ위원회별Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회 기자회견장 사용현황 파라미터
export interface 국회_기자회견장_사용현황Params extends BaseParams {
}

// 국회예산정책처 연차보고서 파라미터
export interface 국회예산정책처_연차보고서Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 청원 계류현황 파라미터
export interface 청원_계류현황Params extends BaseParams {
  /** 청원번호 */
  BILL_NO?: string;
  /** 의안ID */
  BILL_ID?: string;
  /** 청원명 */
  BILL_NAME?: string;
  /** 청원인 */
  PROPOSER?: string;
  /** 소개의원 */
  APPROVER?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
  /** 의안구분 */
  PASS_GUBUN?: string;
}

// 의원연맹별 보조금 예산 파라미터
export interface 의원연맹별_보조금_예산Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 기관명 */
  INST_NM?: string;
}

// 사업별 예산 편성 규모 파라미터
export interface 사업별_예산_편성_규모Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 사업명 */
  BZ_NM?: string;
}

// 역대 국회의원 의원이력 파라미터
export interface 역대_국회의원_의원이력Params extends BaseParams {
  /** 의원이름(한글) */
  HG_NM?: string;
  /** 의원이력 */
  PROFILE_SJ?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
  /** 경력대수코드 */
  PROFILE_UNIT_CD?: string;
}

// 국회사무처 2천만원 이상 수의계약 현황 파라미터
export interface 국회사무처_2천만원_이상_수의계약_현황Params extends BaseParams {
  /** 계약건명 */
  CTR_NM?: string;
  /** 계약상대자 */
  CTR_OJ_NM?: string;
  /** 계약방법 */
  CTR_MTH?: string;
  /** 수의계약사유 */
  PRVCTRT_RSON?: string;
}

// NABO 경제전망 파라미터
export interface NABO_경제전망Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 의회외교 동향과 분석 파라미터
export interface 의회외교_동향과_분석Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// NABO 추계 세제 이슈 파라미터
export interface NABO_추계_세제_이슈Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 의회외교 해외주요법률 제개정 파라미터
export interface 의회외교_해외주요법률_제개정Params extends BaseParams {
  /** 해외주요법률 제개정 제목 */
  FR_LAW_REV_TTL?: string;
}

// 회의별 안건목록 파라미터
export interface 회의별_안건목록Params extends BaseParams {
  /** 회의ID */
  CONF_ID?: string;
}

// 국회도서관 정책에 관한 행정정보 공표 파라미터
export interface 국회도서관_정책에_관한_행정정보_공표Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// 국회뉴스ON_부의장동향 파라미터
export interface 국회뉴스ON_부의장동향Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 국회미래연구원 연구보고서 파라미터
export interface 국회미래연구원_연구보고서Params extends BaseParams {
}

// NABO Focus 파라미터
export interface NABO_FocusParams extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 주요정치일정 파라미터
export interface 주요정치일정Params extends BaseParams {
  /** 제목 */
  NOTICE_TITLE?: string;
  /** 부서명 */
  DEPT_NAME?: string;
  /** 작성일 */
  WRITE_DATE?: string;
  /** 내용 */
  CONTENT?: string;
}

// 법률안 심사 및 처리(위원회안, 대안) 파라미터
export interface 법률안_심사_및_처리위원회안_대안Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 제안일 */
  PROPOSE_DT?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
}

// 날짜별 의정활동 파라미터
export interface 날짜별_의정활동Params extends BaseParams {
  /** 일자 */
  DT?: string;
  /** 의안구분 */
  BILL_KIND?: string;
  /** 대수 */
  AGE?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NM?: string;
  /** 단계 */
  STAGE?: string;
  /** 세부단계 */
  DTL_STAGE?: string;
  /** 소관위원회 */
  COMMITTEE?: string;
  /** 활동상태 */
  ACT_STATUS?: string;
  /** 의안ID */
  BILL_ID?: string;
  /** 소관위원회ID */
  COMMITTEE_ID?: string;
}

// 의회외교 실시내역 파라미터
export interface 의회외교_실시내역Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 작성자 */
  WRITER_NM?: string;
  /** 작성일 */
  UPDATE_DT?: string;
}

// 국회의원 위원회 경력 파라미터
export interface 국회의원_위원회_경력Params extends BaseParams {
  /** 의원이름(한글) */
  HG_NM?: string;
  /** 위원회 경력 */
  PROFILE_SJ?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
  /** 경력대수코드 */
  PROFILE_UNIT_CD?: string;
}

// 국회입법조사처 연구보고서(외국입법 동향과 분석) 파라미터
export interface 국회입법조사처_연구보고서외국입법_동향과_분석Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 국회뉴스ON_의장동향 파라미터
export interface 국회뉴스ON_의장동향Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 국회의장 주요일정 파라미터
export interface 국회의장_주요일정Params extends BaseParams {
  /** 내용 */
  CONTENTS?: string;
  /** 날짜 */
  SCHEDULEDATE?: string;
  /** 시간 */
  SCHEDULETIME?: string;
}

// 시정조치 결과보고서 목록 파라미터
export interface 시정조치_결과보고서_목록Params extends BaseParams {
  /** 회의ID */
  CONF_ID?: string;
  /** 대수 */
  ERACO?: string;
}

// 국회입법조사처 업무추진비 집행현황 파라미터
export interface 국회입법조사처_업무추진비_집행현황Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
  /** 기관명 */
  INST_NM?: string;
}

// 보도자료 파라미터
export interface 보도자료Params extends BaseParams {
  /** 게시물번호 */
  NUM?: string;
  /** 제목 */
  TITLE?: string;
  /** 작성일 */
  WRITE_DATE?: string;
  /** 내용 */
  CONTENT?: string;
  /** 구분 */
  BBS_TITLE?: string;
}

// 국회입법조사처 세미나·간담회 파라미터
export interface 국회입법조사처_세미나간담회Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 국회의원 본회의 표결정보 파라미터
export interface 국회의원_본회의_표결정보Params extends BaseParams {
  /** 의원 */
  HG_NM?: string;
  /** 정당 */
  POLY_NM?: string;
  /** 의원번호 */
  MEMBER_NO?: string;
  /** 의결일자 */
  VOTE_DATE?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 의안ID */
  BILL_ID?: string;
  /** 소관위원회 */
  CURR_COMMITTEE?: string;
  /** 표결결과 */
  RESULT_VOTE_MOD?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
  /** 대 */
  AGE?: string;
}

// 수입징수현황(수입목별) 파라미터
export interface 수입징수현황수입목별Params extends BaseParams {
  /** 회계년도 */
  FSCL_YY?: string;
  /** 회계월 */
  EXE_M?: string;
  /** 회계명 */
  FSCL_NM?: string;
  /** 수입관명 */
  IKWAN_NM?: string;
  /** 수입항명 */
  IHANG_NM?: string;
  /** 수입목명 */
  IMOK_NM?: string;
}

// 국회의원 영상회의록(발언영상) 파라미터
export interface 국회의원_영상회의록발언영상Params extends BaseParams {
  /** 대수 */
  CT1?: string;
  /** 회의일자 */
  TAKING_DATE?: string;
  /** 회의제목 */
  TITLE?: string;
  /** 발언자 */
  ESSENTIAL_PERSON?: string;
}

// 의회외교포럼 활동보고 파라미터
export interface 의회외교포럼_활동보고Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 작성자 */
  WRITER_NM?: string;
  /** 작성일 */
  UPDATE_DT?: string;
}

// 역대 국회의원 인적사항 파라미터
export interface 역대_국회의원_인적사항Params extends BaseParams {
  /** 국회의원코드 */
  MONA_CD?: string;
  /** 이름 */
  HG_NM?: string;
  /** 성별 */
  SEX_GBN_NM?: string;
  /** 대별코드 */
  UNIT_CD?: string;
  /** 정당명 */
  POLY_NM?: string;
  /** 선거구 */
  ORIG_NM?: string;
}

// 법제사례 연구발표 파라미터
export interface 법제사례_연구발표Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 작성자 */
  WRITER_NM?: string;
  /** 등록일 */
  CREATE_DT?: string;
}

// 청문회 회의록 파라미터
export interface 청문회_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 본회의 회의록 파라미터
export interface 본회의_회의록Params extends BaseParams {
  /** 회의명 */
  TITLE?: string;
  /** 회의종류명 */
  CLASS_NAME?: string;
  /** 대수 */
  DAE_NUM?: string;
  /** 회의날짜 */
  CONF_DATE?: string;
  /** 안건번호 */
  SUB_NUM?: string;
  /** 안건명 */
  SUB_NAME?: string;
}

// 국회의원 정책자료실 파라미터
export interface 국회의원_정책자료실Params extends BaseParams {
  /** 제목 */
  TITLE?: string;
  /** 발행처 */
  PUBLISHER?: string;
  /** 발행년 */
  PUBLISH_DT?: string;
}

// 본회의 처리안건_법률안 파라미터
export interface 본회의_처리안건_법률안Params extends BaseParams {
  /** 대수 */
  AGE?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NM?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 소관위원회 */
  COMMITTEE_NM?: string;
  /** 의결결과 */
  PROC_RESULT_CD?: string;
  /** 제안일 */
  PROPOSE_DT?: string;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string;
  /** 정부이송일 */
  CURR_TRANS_DT?: string;
  /** 공포일 */
  ANNOUNCE_DT?: string;
  /** 의안ID */
  BILL_ID?: string;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string;
}

// 위원회 위원 명단 파라미터
export interface 위원회_위원_명단Params extends BaseParams {
  /** 위원회코드 */
  DEPT_CD?: string;
  /** 위원회명 */
  DEPT_NM?: string;
  /** 구성 */
  JOB_RES_NM?: string;
  /** 위원명 */
  HG_NM?: string;
  /** 선거구 */
  ORIG_NM?: string;
  /** 정당 */
  POLY_NM?: string;
  /** 전화번호 */
  ASSEM_TEL?: string;
  /** 이메일 */
  ASSEM_EMAIL?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
}

// 국회의원 SNS정보 파라미터
export interface 국회의원_SNS정보Params extends BaseParams {
  /** 이름 */
  HG_NM?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
}

// 국회의원 기자회견 파라미터
export interface 국회의원_기자회견Params extends BaseParams {
  /** 회견일 */
  TAKING_DATE?: string;
  /** 제목 */
  TITLE?: string;
  /** 발언자 */
  PERSON?: string;
}

// 국회도서관 연간보고서 파라미터
export interface 국회도서관_연간보고서Params extends BaseParams {
  /** 발간물 제목 */
  PBLM_TTL?: string;
}

// 의회외교 동향 파라미터
export interface 의회외교_동향Params extends BaseParams {
  /** 의회외교 동향 제목 */
  DPLM_TRD_TTL?: string;
}

// 최신외국입법정보 파라미터
export interface 최신외국입법정보Params extends BaseParams {
  /** 발간물 제목 */
  PBLM_TTL?: string;
}

// 국회입법조사처 연구보고서(이슈와 논점) 파라미터
export interface 국회입법조사처_연구보고서이슈와_논점Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 시청각자료 목록 파라미터
export interface 시청각자료_목록Params extends BaseParams {
  /** 회의ID */
  CONF_ID?: string;
  /** 대수 */
  ERACO?: string;
}

// 국회 보유 자산(전체) 파라미터
export interface 국회_보유_자산전체Params extends BaseParams {
  /** 구분 */
  DIV_NM?: string;
  /** 년도 */
  YR?: string;
}

// 국회의원 세미나 일정 파라미터
export interface 국회의원_세미나_일정Params extends BaseParams {
  /** 제목 */
  TITLE?: string;
  /** 설명 */
  DESCRIPTION?: string;
  /** 개최일 */
  SDATE?: string;
  /** 주최기관 */
  NAME?: string;
  /** 개최장소 */
  LOCATION?: string;
}

// 역대 국회의원 재선 현황 파라미터
export interface 역대_국회의원_재선_현황Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 구분 */
  DIV?: string;
}

// 의사일정공지 파라미터
export interface 의사일정공지Params extends BaseParams {
  /** 제목 */
  NOTICE_TITLE?: string;
  /** 부서명 */
  DEPT_NAME?: string;
  /** 작성일 */
  WRITE_DATE?: string;
  /** 내용 */
  CONTENT?: string;
}

// 청원 통계 파라미터
export interface 청원_통계Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회입법조사처 정보목록 파라미터
export interface 국회입법조사처_정보목록Params extends BaseParams {
}

// 대통령시정연설 포함 회의록 파라미터
export interface 대통령시정연설_포함_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 회의록별 상세정보 파라미터
export interface 회의록별_상세정보Params extends BaseParams {
  /** 회의ID */
  CONF_ID?: string;
}

// 의안 제안자정보 파라미터
export interface 의안_제안자정보Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
}

// 회의별 의안목록 파라미터
export interface 회의별_의안목록Params extends BaseParams {
  /** 회의ID */
  CONF_ID?: string;
  /** 의안 ID */
  BILL_ID?: string;
}

// 국회사무처 1억원 이상 계약 현황 파라미터
export interface 국회사무처_1억원_이상_계약_현황Params extends BaseParams {
  /** 계약건명 */
  CTR_NM?: string;
  /** 계약상대자 */
  CTR_OJ_NM?: string;
  /** 계약방법 */
  CTR_MTH?: string;
}

// 국회의원 의원이력 파라미터
export interface 국회의원_의원이력Params extends BaseParams {
  /** 의원이름(한글) */
  HG_NM?: string;
  /** 의원이력 */
  PROFILE_SJ?: string;
  /** 국회의원코드 */
  MONA_CD?: string;
}

// 국회 시설물 안내 파라미터
export interface 국회_시설물_안내Params extends BaseParams {
  /** 시설물명 */
  FCLT_NM?: string;
  /** 준공년월일 */
  COMPLTN_DYS?: string;
}

// 역대 여성 국회의원 현황 파라미터
export interface 역대_여성_국회의원_현황Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회입법조사처 제공 자료 통합 API 파라미터
export interface 국회입법조사처_제공_자료_통합_APIParams extends BaseParams {
  /** 발간자료구분 */
  MTR_DIV?: string;
  /** 발간자료제목 */
  MTR_TTL?: string;
}

// 우수연구단체 현황 파라미터
export interface 우수연구단체_현황Params extends BaseParams {
  /** 연도 */
  YEAR?: string;
  /** 구분 */
  DIV?: string;
  /** 분야 */
  FLD?: string;
  /** 단체 */
  GRP?: string;
  /** 대표의원 */
  LAWMAKER?: string;
}

// 국회도서관 정보공개청구 처리현황 목록 파라미터
export interface 국회도서관_정보공개청구_처리현황_목록Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 일련번호 */
  SN?: string;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string;
  /** 청구사항>공개형태 */
  OPB_FOM_NM?: string;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string;
  /** 결정내용>결정구분 */
  DCS_DIV?: string;
  /** 결정내용>공개내용 */
  OPB_RSON?: string;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string;
  /** 처리사항>공개방법 */
  OPB_MTH?: string;
}

// 소위원회 회의록 파라미터
export interface 소위원회_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 국회개방행사 일정 파라미터
export interface 국회개방행사_일정Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 구분명 */
  CATEGORY_NM?: string;
}

// 국회미래연구원 미래서평 파라미터
export interface 국회미래연구원_미래서평Params extends BaseParams {
}

// 지출집행현황(세부사업별) 파라미터
export interface 지출집행현황세부사업별Params extends BaseParams {
  /** 회계년도 */
  FSCL_YY?: string;
  /** 집행일 */
  EXE_DATE?: string;
  /** 회계명 */
  FSCL_NM?: string;
  /** 분야명 */
  FLD_NM?: string;
  /** 부문명 */
  SECT_NM?: string;
  /** 프로그램명 */
  PGM_NM?: string;
  /** 단위사업명 */
  ACTV_NM?: string;
}

// 위원회 자료실 파라미터
export interface 위원회_자료실Params extends BaseParams {
  /** 위원회명 */
  WRITER_NM?: string;
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 위원회코드 */
  DEPT_CD?: string;
}

// NABO 대한민국 재정 파라미터
export interface NABO_대한민국_재정Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 연구단체 연구활동 보고서 파라미터
export interface 연구단체_연구활동_보고서Params extends BaseParams {
  /** 대수 */
  REGDAESU?: string;
  /** 보고서명 */
  REPORT_TITLE?: string;
  /** 연도 */
  YEAR?: string;
  /** 연구단체명 */
  RE_NAME?: string;
}

// NATV 뉴스_위원회 파라미터
export interface NATV_뉴스_위원회Params extends BaseParams {
  /** 제목 */
  COMP_MAIN_TITLE?: string;
  /** 등록일자 */
  REG_DATE?: string;
  /** 내용 */
  COMP_CONTENT?: string;
}

// 지역현안 입법지원 토론회 개최 내역 파라미터
export interface 지역현안_입법지원_토론회_개최_내역Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 대수 */
  CATEGORY_NM?: string;
  /** 국회의원 */
  ETC_CHAR7?: string;
  /** 개최장소 */
  ETC_CHAR12?: string;
}

// NABO 예산 분석 파라미터
export interface NABO_예산_분석Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 제안설명서 목록 파라미터
export interface 제안설명서_목록Params extends BaseParams {
  /** 회의ID */
  CONF_ID?: string;
  /** 대수 */
  ERACO?: string;
}

// 정보공개청구 행정소송 판결현황 파라미터
export interface 정보공개청구_행정소송_판결현황Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 기관 */
  INST_CD?: string;
  /** 일련번호 */
  SN?: string;
  /** 사건명 */
  IND_NM?: string;
  /** 판결일 */
  RSLT_DT?: string;
  /** 피고 */
  OJ_PN?: string;
  /** 주문내용 */
  ORDG_RSON?: string;
  /** 청구취지 */
  DEMD_MEAN?: string;
}

// 국회입법조사처 학술지(입법과 정책) 파라미터
export interface 국회입법조사처_학술지입법과_정책Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 위원회 현황 정보 파라미터
export interface 위원회_현황_정보Params extends BaseParams {
  /** 위원회구분 */
  CMT_DIV_NM?: string;
  /** 위원회코드 */
  HR_DEPT_CD?: string;
  /** 위원회 */
  COMMITTEE_NAME?: string;
  /** 위원장 */
  HG_NM?: string;
  /** 간사 */
  HG_NM_LIST?: string;
}

// 국회일정 통합 API 파라미터
export interface 국회일정_통합_APIParams extends BaseParams {
  /** 일정종류 */
  SCH_KIND?: string;
  /** 일자 */
  SCH_DT?: string;
}

// 국회뉴스ON_국회동향기타 파라미터
export interface 국회뉴스ON_국회동향기타Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
  /** 기사내용 */
  V_BODY?: string;
}

// 국회미래연구원 미래포럼 파라미터
export interface 국회미래연구원_미래포럼Params extends BaseParams {
}

// 예결산 심사정보 파라미터
export interface 예결산_심사정보Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회입법조사처 연구보고서(입법·정책보고서) 파라미터
export interface 국회입법조사처_연구보고서입법정책보고서Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 회의록별 부록 정보 파라미터
export interface 회의록별_부록_정보Params extends BaseParams {
  /** 회의ID */
  CONF_ID?: string;
}

// 역대 국회의원 현황 파라미터
export interface 역대_국회의원_현황Params extends BaseParams {
  /** 대수 */
  DAESU?: string;
  /** 대별 및 소속정당(단체) */
  DAE?: string;
  /** 대별 */
  DAE_NM?: string;
  /** 이름 */
  NAME?: string;
  /** 생년월일 */
  BIRTH?: string;
  /** 본관 */
  BON?: string;
  /** 출생지 */
  POSI?: string;
}

// 정당 및 교섭단체 의석수 현황 파라미터
export interface 정당_및_교섭단체_의석수_현황Params extends BaseParams {
  /** 교섭단체 */
  POLY_GROUP_NM?: string;
  /** 정당명 */
  POLY_NM?: string;
}

// 국회뉴스ON_그건 이렇습니다 파라미터
export interface 국회뉴스ON_그건_이렇습니다Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 의안별 표결현황 파라미터
export interface 의안별_표결현황Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 표결결과 */
  PROC_RESULT_CD?: string;
  /** 의안종류 */
  BILL_KIND_CD?: string;
  /** 대수 */
  AGE?: string;
}

// 국회채용_종합현황 파라미터
export interface 국회채용_종합현황Params extends BaseParams {
  /** 연도 */
  YR?: string;
  /** 직급 */
  JGRD_NM?: string;
  /** 직류 */
  JBTP_NM?: string;
}

// 국회의원 보좌직원 채용 파라미터
export interface 국회의원_보좌직원_채용Params extends BaseParams {
  /** 제목 */
  TITLE_V?: string;
  /** 상태 */
  USE_YN?: string;
  /** 작성일 */
  REG_DT_D?: string;
  /** 기간 */
  DT?: string;
  /** 내용 */
  CONTENT_L?: string;
  /** 의원실 */
  DEPT_NM_V?: string;
}

// 청원 접수목록 파라미터
export interface 청원_접수목록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회사무처 정보공개청구 처리현황 목록 파라미터
export interface 국회사무처_정보공개청구_처리현황_목록Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 일련번호 */
  SN?: string;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string;
  /** 결정내용>결정구분 */
  DCS_DIV?: string;
  /** 결정내용>공개내용 */
  OPB_RSON?: string;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string;
  /** 결정내용>결정통지일자 */
  DCS_NTC_DT?: string;
}

// 국회 및 국회사무처 소관 법인별 보조금 예산 파라미터
export interface 국회_및_국회사무처_소관_법인별_보조금_예산Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 기관명 */
  INST_NM?: string;
}

// 공청회 회의록 파라미터
export interface 공청회_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 연구단체 활동실적 파라미터
export interface 연구단체_활동실적Params extends BaseParams {
  /** 구분 */
  DIV?: string;
  /** 정책연구보고서 */
  POL_RSC_RPT?: string;
  /** 연도 */
  DIV2?: string;
}

// NABO 결산 분석 파라미터
export interface NABO_결산_분석Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// (영문)국회일정 파라미터
export interface 영문국회일정Params extends BaseParams {
  /** 회의일정 구분 */
  CONF_SCH_DIV?: string;
  /** 일자 */
  SCH_DT?: string;
}

// 의안 접수목록 파라미터
export interface 의안_접수목록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 국회 보유 자산(토지) 파라미터
export interface 국회_보유_자산토지Params extends BaseParams {
  /** 구분 */
  DIV_NM?: string;
  /** 주소 */
  ADDR?: string;
  /** 년도 */
  YR?: string;
}

// 9급 공개경쟁 채용현황 파라미터
export interface grade_9급_공개경쟁_채용현황Params extends BaseParams {
  /** 연도 */
  YR?: string;
  /** 직류 */
  JBTP_NM?: string;
}

// 의안 상세정보 파라미터
export interface 의안_상세정보Params extends BaseParams {
  /** 의안ID */
  BILL_ID?: string;
}

// 어린이국회 개최 결과 파라미터
export interface 어린이국회_개최_결과Params extends BaseParams {
  /** 행사개최결과 제목 */
  BRDI_TTL?: string;
}

// 처리 의안통계(총괄) 파라미터
export interface 처리_의안통계총괄Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
}

// 대한민국 경제 파라미터
export interface 대한민국_경제Params extends BaseParams {
  /** 발간물 제목 */
  PBLM_TTL?: string;
}

// 국회예산정책처 정보공개청구 처리현황 목록 파라미터
export interface 국회예산정책처_정보공개청구_처리현황_목록Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 일련번호 */
  SN?: string;
  /** 청구사항>청구내용 */
  DEMD_RSON?: string;
  /** 청구사항>공개형태 */
  OPB_FOM_NM?: string;
  /** 결정내용>담당부서 */
  CHRG_DEPT_NM?: string;
  /** 결정내용>결정구분 */
  DCS_DIV?: string;
  /** 결정내용>공개내용 */
  OPB_RSON?: string;
  /** 결정내용>비공개(부분공개) 내용 및 사유 */
  CLSD_RSON?: string;
}

// (영문)국회의장 연설문 파라미터
export interface 영문국회의장_연설문Params extends BaseParams {
  /** 연설문 제목 */
  SPC_TTL?: string;
}

// 어린이국회 우수법률안 소개 파라미터
export interface 어린이국회_우수법률안_소개Params extends BaseParams {
  /** 게시물 제목 */
  BRDI_TTL?: string;
}

// 역대 국회의장단 정보 파라미터
export interface 역대_국회의장단_정보Params extends BaseParams {
  /** 구분 */
  DIV?: string;
  /** 성명 */
  CHM_PN?: string;
  /** 재임기간 */
  CHM_APTM_YS?: string;
  /** 대 */
  UNIT_NM?: string;
}

// 본회의 처리안건_기타 파라미터
export interface 본회의_처리안건_기타Params extends BaseParams {
  /** 대수 */
  AGE?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 의안명 */
  BILL_NM?: string;
  /** 제안자구분 */
  PROPOSER_KIND_CD?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 소관위원회 */
  COMMITTEE_NM?: string;
  /** 의결결과 */
  PROC_RESULT_CD?: string;
  /** 제안일 */
  PROPOSE_DT?: string;
  /** 본회의심의_의결일 */
  RGS_PROC_DT?: string;
  /** 의안ID */
  BILL_ID?: string;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string;
}

// 청원 소개의원 정보 파라미터
export interface 청원_소개의원_정보Params extends BaseParams {
  /** 청원ID */
  PTT_ID?: string;
}

// NATV 뉴스_기타 파라미터
export interface NATV_뉴스_기타Params extends BaseParams {
  /** 제목 */
  COMP_MAIN_TITLE?: string;
  /** 내용 */
  COMP_CONTENT?: string;
}

// 국회입법조사처 연구보고서(외국입법·정책 분석) 파라미터
export interface 국회입법조사처_연구보고서외국입법정책_분석Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
}

// 전원위원회 일정 파라미터
export interface 전원위원회_일정Params extends BaseParams {
  /** 대수 */
  UNIT_CD?: string;
  /** 회기 */
  MEETINGSESSION?: string;
  /** 차수 */
  CHA?: string;
  /** 제목 */
  TITLE?: string;
  /** 일자 */
  MEETTING_DATE?: string;
}

// 국회뉴스ON_의원 입법안 파라미터
export interface 국회뉴스ON_의원_입법안Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// OPEN API 전체 현황 파라미터
export interface OPEN_API_전체_현황Params extends BaseParams {
  /** 공공데이터ID */
  INF_ID?: string;
  /** 공공데이터명 */
  INF_NM?: string;
  /** 원본시스템 */
  SRC_EXP?: string;
}

// 의원외교협의회 명단 파라미터
export interface 의원외교협의회_명단Params extends BaseParams {
  /** 제목 */
  RPT_TITLE?: string;
  /** 기준일자 */
  STND_DT?: string;
  /** 작성자 */
  WRT_NM?: string;
  /** 대 */
  UNIT_NM?: string;
}

// NATV 뉴스_인물 파라미터
export interface NATV_뉴스_인물Params extends BaseParams {
  /** 제목 */
  COMP_MAIN_TITLE?: string;
  /** 내용 */
  COMP_CONTENT?: string;
}

// NABO 비용추계 및 재정전망 파라미터
export interface NABO_비용추계_및_재정전망Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 진행중 입법예고 파라미터
export interface 진행중_입법예고Params extends BaseParams {
  /** 의안 ID */
  BILL_ID?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 법률안명 */
  BILL_NAME?: string;
  /** 제안자구분 */
  PROPOSER_KIND_CD?: string;
  /** 소관위원회 */
  CURR_COMMITTEE?: string;
  /** 게시종료일 */
  NOTI_ED_DT?: string;
  /** 제안자 */
  PROPOSER?: string;
  /** 소관위ID */
  CURR_COMMITTEE_ID?: string;
}

// 행정입법 분석연구 파라미터
export interface 행정입법_분석연구Params extends BaseParams {
  /** 제목 */
  ARTICLE_TITLE?: string;
  /** 구분 */
  CATEGORY_NM?: string;
}

// 국회입법조사처 연구보고서(국제통계 동향과 분석) 파라미터
export interface 국회입법조사처_연구보고서국제통계_동향과_분석Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// (영문)국회 소식 및 보도자료 파라미터
export interface 영문국회_소식_및_보도자료Params extends BaseParams {
  /** 보도자료 제목 */
  ARTC_TTL?: string;
}

// 위원회별 일정 파라미터
export interface 위원회별_일정Params extends BaseParams {
  /** 회의일자 */
  MEETING_DATE?: string;
  /** 시간 */
  MEETING_TIME?: string;
  /** 회기 */
  SESS?: string;
  /** 차수 */
  DEGREE?: string;
  /** 구분 */
  TITLE?: string;
  /** 위원회 명 */
  COMMITTEE_NAME?: string;
  /** 대수 */
  UNIT_CD?: string;
  /** 위원회코드 */
  HR_DEPT_CD?: string;
}

// 정보공개청구 이의신청 처리현황 파라미터
export interface 정보공개청구_이의신청_처리현황Params extends BaseParams {
  /** 년도 */
  YR?: string;
  /** 기관 */
  INST_CD?: string;
  /** 일련번호 */
  SN?: string;
  /** 사건명 */
  IND_NM?: string;
  /** 주문내용 */
  ORDG_RSON?: string;
  /** 신청취지 */
  APL_MEAN?: string;
  /** 이유(처리결과요지) */
  DEAL_RSLT_MTH?: string;
}

// 국회뉴스ON_사무총장동향 파라미터
export interface 국회뉴스ON_사무총장동향Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 국회뉴스ON_외부기고 파라미터
export interface 국회뉴스ON_외부기고Params extends BaseParams {
  /** 제목 */
  V_TITLE?: string;
}

// 국회의원 의정보고서 파라미터
export interface 국회의원_의정보고서Params extends BaseParams {
  /** 제목 */
  TITLE?: string;
  /** 발행처 */
  PUBLISHER?: string;
  /** 수정일 */
  UPDATE_DT?: string;
  /** 발행년 */
  PUBLISH_DT?: string;
}

// 청원 처리현황 파라미터
export interface 청원_처리현황Params extends BaseParams {
  /** 청원번호 */
  BILL_NO?: string;
  /** 의안ID */
  BILL_ID?: string;
  /** 대 */
  AGE?: string;
  /** 청원명 */
  BILL_NAME?: string;
  /** 청원인 */
  PROPOSER?: string;
  /** 소개의원 */
  APPROVER?: string;
  /** 의결결과 */
  PROC_RESULT_CD?: string;
  /** 소관위코드 */
  CURR_COMMITTEE_ID?: string;
  /** 소관위 */
  CURR_COMMITTEE?: string;
}

// 의장단 주요일정 파라미터
export interface 의장단_주요일정Params extends BaseParams {
  /** 일자 */
  SCH_DT?: string;
  /** 의장단구분(의장, 부의장 구분) */
  CHM_DIV?: string;
}

// 국회입법조사처 알림지(홍보책자) 파라미터
export interface 국회입법조사처_알림지홍보책자Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
  /** 등록일자 */
  INSERTDT?: string;
}

// 역대 국회 선거일, 의원정수, 임기정보 파라미터
export interface 역대_국회_선거일_의원정수_임기정보Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 대별선거구분 */
  GCL_ELEC_DIV?: string;
}

// 의원실 지원경비 현황 파라미터
export interface 의원실_지원경비_현황Params extends BaseParams {
  /** 연도 */
  YR?: string;
  /** 구분 */
  FST_DIV_ETC?: string;
  /** 구분 */
  SND_DIV_ETC?: string;
  /** 구분 */
  TRD_DIV_ETC?: string;
  /** 지급방법 */
  PYM_MTH?: string;
}

// 국회도서관 정책연구용역 보고서 파라미터
export interface 국회도서관_정책연구용역_보고서Params extends BaseParams {
  /** 제목 */
  TITLE?: string;
}

// 인사청문회 파라미터
export interface 인사청문회Params extends BaseParams {
  /** 직위정보 */
  APPOINT_GRADE?: string;
  /** 후보자명 */
  APPOINT_NAME?: string;
  /** 의안명 */
  BILL_NAME?: string;
  /** 의안번호 */
  BILL_NO?: string;
  /** 대수 */
  AGE?: string;
  /** 소관위원회ID */
  CURR_COMMITTEE_ID?: string;
  /** 의안ID */
  BILL_ID?: string;
}

// 연석회의 회의록 파라미터
export interface 연석회의_회의록Params extends BaseParams {
  /** 대수 */
  ERACO?: string;
  /** 위원회코드 */
  CMIT_CD?: string;
}

// 의장단 보도자료 파라미터
export interface 의장단_보도자료Params extends BaseParams {
  /** 의장단구분 (의장, 부의장 구분) */
  CHM_DIV?: string;
  /** 보도자료 제목 */
  ARTC_TTL?: string;
}

// 국회입법조사처 연차보고서 파라미터
export interface 국회입법조사처_연차보고서Params extends BaseParams {
  /** 자료명 */
  BOOKNM?: string;
}

// 국회미래연구원 연차보고서 파라미터
export interface 국회미래연구원_연차보고서Params extends BaseParams {
  /** 제목 */
  TITLE?: string;
  /** 작성자 */
  WRITER?: string;
}

// 국회도서관 사업에 관한 행정정보 공표 파라미터
export interface 국회도서관_사업에_관한_행정정보_공표Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM?: string;
  /** 생산년월 */
  PRDC_YM_NM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// (영문)국회의장 주요동정 파라미터
export interface 영문국회의장_주요동정Params extends BaseParams {
  /** 주요동정 제목 */
  MN_ACTV_TTL?: string;
}

// 국회예산정책처 업무추진비 집행현황 파라미터
export interface 국회예산정책처_업무추진비_집행현황Params extends BaseParams {
  /** 생산년월 */
  PRDC_YM?: string;
  /** 공개파일명 */
  OPB_FL_NM?: string;
}

// NABO 경제재정수첩 파라미터
export interface NABO_경제재정수첩Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// NABO 재정동향 이슈 파라미터
export interface NABO_재정동향_이슈Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 국회예산정책처 홍보물 파라미터
export interface 국회예산정책처_홍보물Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 제목 */
  SUBJECT?: string;
}

// 국회예산정책처 정보목록 파라미터
export interface 국회예산정책처_정보목록Params extends BaseParams {
}

// NABO 대한민국 지방재정 파라미터
export interface NABO_대한민국_지방재정Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// NABO 조세분석 및 연구 파라미터
export interface NABO_조세분석_및_연구Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 예산정책연구 파라미터
export interface 예산정책연구Params extends BaseParams {
  /** 발간일 */
  REG_DATE?: string;
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// NABO 재정사업 평가 파라미터
export interface NABO_재정사업_평가Params extends BaseParams {
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

// 정책연구용역 파라미터
export interface 정책연구용역Params extends BaseParams {
  /** 발간일 */
  REG_DATE?: string;
  /** 부서명 */
  DEPARTMENT_NAME?: string;
  /** 보고서명 */
  SUBJECT?: string;
}

