/**
 * 🏛️ 국회 OpenAPI 전체 API 클래스
 * 
 * OpenAPI 스펙에서 자동 생성된 276개 API를 제공합니다.
 * 기존 assembly-ts의 수동 구현과 함께 사용할 수 있습니다.
 */

import { PaginationType } from '../types/callOpenApi';
import { getApiKey } from '../';
import type { AssemblyAPIConfig, APIResponse } from './types';

const baseURL = 'https://open.assembly.go.kr';

// OpenAPI 전용 호출 함수 (타입 제약 없음)
const callOpenApiRaw = <Command extends string>(
  command: Command,
  pagination: PaginationType,
  args: Record<string, string | undefined>
): Promise<APIResponse> => {
  const key = getApiKey();

  const query = new URLSearchParams();
  query.append('key', key);
  query.append('pIndex', pagination.page.toString());
  query.append('pSize', pagination.take.toString());

  Object.entries(args).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    query.append(key, value);
  });

  return fetch(`${baseURL}/portal/openapi/${command}?type=json&${query.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((v) => v.json() as Promise<APIResponse>)
    .then((v) => {
      // 기본적인 에러 처리
      const firstKey = Object.keys(v)[0];
      if (firstKey && v[firstKey] && v[firstKey][0] && v[firstKey][0].head && v[firstKey][0].head[1] && v[firstKey][0].head[1].RESULT && v[firstKey][0].head[1].RESULT.CODE === 'INFO-000') {
        return v;
      }
      const errorMessage = firstKey && v[firstKey] ? v[firstKey][0]?.head?.[1]?.RESULT?.MESSAGE : 'Unknown error';
      throw new Error(`API Error: ${errorMessage}`);
    });
};

/**
 * 🏛️ 국회 OpenAPI 전체 클래스
 * 
 * 276개 국회 API를 한 번에 제공합니다.
 * 기존 bill, lawmaker 등의 모듈과 함께 사용 가능합니다.
 */
export class OpenAPI {
  private config: AssemblyAPIConfig;

  constructor(config: AssemblyAPIConfig) {
    this.config = config;
  }


  /**
   * NATV 뉴스_의장단
   * **NATV 뉴스_의장단**
   */
  async NATV_뉴스_의장단(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ndkuweviadcqkbjdl',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의원친선협회 임·회원 명단
   * **의원친선협회 임·회원 명단**
   */
  async 의원친선협회_임회원_명단(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbicgazsalnfamoyp',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 정보공개청구 행정심판 결과현황
   * **정보공개청구 행정심판 결과현황**
   */
  async 정보공개청구_행정심판_결과현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npryvxppapmxgwpxw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 제공 자료 통합 API
   * **국회도서관 제공 자료 통합 API**
   */
  async 국회도서관_제공_자료_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLNANETPBLM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회의원 위원회 경력
   * **역대 국회의원 위원회 경력**
   */
  async 역대_국회의원_위원회_경력(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nqbeopthavwwfbekw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법률안 심사 및 처리(처리의안)
   * **법률안 심사 및 처리(처리의안)**
   */
  async 법률안_심사_및_처리처리의안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzpltgfqabtcpsmai',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 정당별 국회의원 선거결과
   * **역대 정당별 국회의원 선거결과**
   */
  async 역대_정당별_국회의원_선거결과(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nedjqrnlavrvcycue',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 처리 의안통계(발의주체별 법률안)
   * **처리 의안통계(발의주체별 법률안)**
   */
  async 처리_의안통계발의주체별_법률안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLCNTPRPSR',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회문화극장 공연 일정
   * **국회문화극장 공연 일정**
   */
  async 국회문화극장_공연_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npfoswpxawimahqlt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 의안 통계
   * **역대 의안 통계**
   */
  async 역대_의안_통계(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzivskufaliivfhpb',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회 회의록
   * **위원회 회의록**
   */
  async 위원회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncwgseseafwbuheph',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 회의록 대별 위원회 목록
   * **회의록 대별 위원회 목록**
   */
  async 회의록_대별_위원회_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nkimylolanvseqagq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국정조사 결과보고서
   * **국정조사 결과보고서**
   */
  async 국정조사_결과보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'INVESTREPORTRESULT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 업무추진비 집행현황
   * **국회도서관 업무추진비 집행현황**
   */
  async 국회도서관_업무추진비_집행현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ngqoyjbkaxutcpmot',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회사무처 정보목록
   * **국회사무처 정보목록**
   */
  async 국회사무처_정보목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ntmgtbxwaqrkrklzn',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 종료된 입법예고
   * **종료된 입법예고**
   */
  async 종료된_입법예고(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nohgwtzsamojdozky',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 토론회 결과보고서
   * **토론회 결과보고서**
   */
  async 토론회_결과보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NABOPBLMDCSNREPORT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법률안 심사 및 처리(최근 본회의처리 의안)
   * **법률안 심사 및 처리(최근 본회의처리 의안)**
   */
  async 법률안_심사_및_처리최근_본회의처리_의안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxjuyqnxadtotdrbw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_보좌진 이야기
   * **국회뉴스ON_보좌진 이야기**
   */
  async 국회뉴스ON_보좌진_이야기(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nepfnxudavtvchtlu',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 발의법률안
   * **국회의원 발의법률안**
   */
  async 국회의원_발의법률안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzmimeepazxkubdpn',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 연도별 연구단체 건수
   * **연도별 연구단체 건수**
   */
  async 연도별_연구단체_건수(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nhllwdafacadantme',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 본회의 일정
   * **본회의 일정**
   */
  async 본회의_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nekcaiymatialqlxr',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의회외교 영문의회용어검색
   * **의회외교 영문의회용어검색**
   */
  async 의회외교_영문의회용어검색(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'DIPLOMACYWORD',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안 심사정보(예ㆍ결산 제외)
   * **의안 심사정보(예ㆍ결산 제외)**
   */
  async 의안_심사정보예ㆍ결산_제외(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLJUDGE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 소규모 연구용역 결과보고서
   * **국회의원 소규모 연구용역 결과보고서**
   */
  async 국회의원_소규모_연구용역_결과보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nfvmtaqoaldzhobsw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법률안 심사 및 처리(계류의안)
   * **법률안 심사 및 처리(계류의안)**
   */
  async 법률안_심사_및_처리계류의안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nwbqublzajtcqpdae',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법률안 심사 및 처리(의안검색)
   * **법률안 심사 및 처리(의안검색)**
   */
  async 법률안_심사_및_처리의안검색(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'TVBPMBILL11',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회별 소위원회 일정
   * **위원회별 소위원회 일정**
   */
  async 위원회별_소위원회_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nrkqqbvfanfybishu',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 아트갤러리 전시 일정
   * **아트갤러리 전시 일정**
   */
  async 아트갤러리_전시_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nptukpvcaxiaaaffa',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 시민의정연수
   * **시민의정연수**
   */
  async 시민의정연수(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nmykqpjxamciskklk',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NATV 뉴스_본회의
   * **NATV 뉴스_본회의**
   */
  async NATV_뉴스_본회의(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nufjqmgtawuzxhila',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(지표로 보는 이슈)
   * **국회입법조사처 연구보고서(지표로 보는 이슈)**
   */
  async 국회입법조사처_연구보고서지표로_보는_이슈(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nduvpkzfatqsoonnc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 정책연구용역자료
   * **국회입법조사처 정책연구용역자료**
   */
  async 국회입법조사처_정책연구용역자료(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nijtjlghaowvisahk',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 계류의안 통계
   * **계류의안 통계**
   */
  async 계류의안_통계(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLCNTRSVT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 정보 통합 API
   * **국회의원 정보 통합 API**
   */
  async 국회의원_정보_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLNAMEMBER',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의원실 행사 정보
   * **의원실 행사 정보**
   */
  async 의원실_행사_정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NAMEMBEREVENT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회채용정보
   * **국회채용정보**
   */
  async 국회채용정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nswsyvysaidgdhsch',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 상임위 활동
   * **국회의원 상임위 활동**
   */
  async 국회의원_상임위_활동(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nuvypcdgahexhvrjt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안 위원회심사 회의정보 조회
   * **의안 위원회심사 회의정보 조회**
   */
  async 의안_위원회심사_회의정보_조회(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLJUDGECONF',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 알림지(국회입법조사처보)
   * **국회입법조사처 알림지(국회입법조사처보)**
   */
  async 국회입법조사처_알림지국회입법조사처보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nezimfsfayvtciyvx',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안별 회의록 목록
   * **의안별 회의록 목록**
   */
  async 의안별_회의록_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFBILLCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 정보목록
   * **국회도서관 정보목록**
   */
  async 국회도서관_정보목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nksbnuwbamgztpotg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 특별위원회 회의록
   * **특별위원회 회의록**
   */
  async 특별위원회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFSPCCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회별 전체회의 일정
   * **위원회별 전체회의 일정**
   */
  async 위원회별_전체회의_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nttmdfdcaakvibdar',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NATV 뉴스_토론회/세미나
   * **NATV 뉴스_토론회/세미나**
   */
  async NATV_뉴스_토론회세미나(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzdppcljavkxnylqs',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 수입징수현황(수입항별)
   * **수입징수현황(수입항별)**
   */
  async 수입징수현황수입항별(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nryvgajaaeerxmdyb',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 브리프형 심층분석 보고서
   * **국회미래연구원 브리프형 심층분석 보고서**
   */
  async 국회미래연구원_브리프형_심층분석_보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BRIEF',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 최근 헌재결정과 개정대상 법률
   * **최근 헌재결정과 개정대상 법률**
   */
  async 최근_헌재결정과_개정대상_법률(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'CLAWLEGI',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 직무상 국외활동 신고 내역
   * **국회의원 직무상 국외활동 신고 내역**
   */
  async 국회의원_직무상_국외활동_신고_내역(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nasnutdbapnfphwyr',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 지방의회 연수 교육일정
   * **지방의회 연수 교육일정**
   */
  async 지방의회_연수_교육일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nmkoorezaqwzfsixy',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 연구단체 연구활동비 집행현황
   * **연구단체 연구활동비 집행현황**
   */
  async 연구단체_연구활동비_집행현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nipnblofawwyxdhmx',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 영상회의록 목록
   * **영상회의록 목록**
   */
  async 영상회의록_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'WEBCASTVCONF',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_상임위·본회의
   * **국회뉴스ON_상임위·본회의**
   */
  async 국회뉴스ON_상임위본회의(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ngnldmexasfdsgjaa',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_의원의 맛과멋
   * **국회뉴스ON_의원의 맛과멋**
   */
  async 국회뉴스ON_의원의_맛과멋(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzsmstfjaswvtbzii',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 겸직 결정 내역
   * **국회의원 겸직 결정 내역**
   */
  async 국회의원_겸직_결정_내역(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nahfbzwvatmaxscwq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 위원회 의사일정
   * **국회의원 위원회 의사일정**
   */
  async 국회의원_위원회_의사일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NAMEMBERCMITSCHEDULE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 처리 의안통계(위원회별)
   * **처리 의안통계(위원회별)**
   */
  async 처리_의안통계위원회별(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLCNTCMIT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국정조사 회의록
   * **국정조사 회의록**
   */
  async 국정조사_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFPIPCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국정감사 회의록
   * **국정감사 회의록**
   */
  async 국정감사_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFAPIGCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회방송 편성표
   * **국회방송 편성표**
   */
  async 국회방송_편성표(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'noqtcnaiatcpgepvt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회 보유 자산(건물)
   * **국회 보유 자산(건물)**
   */
  async 국회_보유_자산건물(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'noahbdisawgzvhooq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 퇴직 공직자 취업이력 공시
   * **퇴직 공직자 취업이력 공시**
   */
  async 퇴직_공직자_취업이력_공시(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzkepuxpasyzvbrsu',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(국정감사관련(보고서))
   * **국회입법조사처 연구보고서(국정감사관련(보고서))**
   */
  async 국회입법조사처_연구보고서국정감사관련보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nlfmqyizaorhysrgf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 경제ㆍ산업동향 이슈
   * **NABO 경제ㆍ산업동향 이슈**
   */
  async NABO_경제ㆍ산업동향_이슈(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nsenmxrjatgxxndrm',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 연차보고서
   * **연차보고서**
   */
  async 연차보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLREPORT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 현안,외국에선
   * **현안,외국에선**
   */
  async 현안외국에선(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NANETPBLMLEGI',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 예결산특별위원회 회의록
   * **예결산특별위원회 회의록**
   */
  async 예결산특별위원회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFBUDGETCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 전원위원회 회의록
   * **전원위원회 회의록**
   */
  async 전원위원회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ngytonzwavydlbbha',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회예산정책처 제공 자료 통합 API
   * **국회예산정책처 제공 자료 통합 API**
   */
  async 국회예산정책처_제공_자료_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLNABOPBLM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 예산춘추
   * **예산춘추**
   */
  async 예산춘추(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbxjdyrjaommhkiza',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 입법고시(5급) 채용현황
   * **입법고시(5급) 채용현황**
   */
  async 입법고시5급_채용현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nujtkaefaqkaqvsdm',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_의원실 행사
   * **국회뉴스ON_의원실 행사**
   */
  async 국회뉴스ON_의원실_행사(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nkulntiravezskrjd',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 대한민국 공공기관
   * **NABO 대한민국 공공기관**
   */
  async NABO_대한민국_공공기관(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nmwywvbbajlawfrsk',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 행정정보 공표목록
   * **국회도서관 행정정보 공표목록**
   */
  async 국회도서관_행정정보_공표목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ndauywbhawaofrtlq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 처리 의안통계(위원회별 법률안)
   * **처리 의안통계(위원회별 법률안)**
   */
  async 처리_의안통계위원회별_법률안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLCNTLAWCMIT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(NARS 현안분석)
   * **국회입법조사처 연구보고서(NARS 현안분석)**
   */
  async 국회입법조사처_연구보고서NARS_현안분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nvkfeqbsacvlzjmea',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 정보공개청구 처리현황 목록
   * **국회입법조사처 정보공개청구 처리현황 목록**
   */
  async 국회입법조사처_정보공개청구_처리현황_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzygztwjapjjxayhe',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회사무처 업무추진비 집행현황
   * **국회사무처 업무추진비 집행현황**
   */
  async 국회사무처_업무추진비_집행현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nalacaiwauxiynsxt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 연구단체 등록현황
   * **국회의원 연구단체 등록현황**
   */
  async 국회의원_연구단체_등록현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'numwhtqhavaqssfle',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 8급 공개경쟁 채용현황
   * **8급 공개경쟁 채용현황**
   */
  async grade_8급_공개경쟁_채용현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nlhssknfaoxiofyix',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회 계류법률안
   * **위원회 계류법률안**
   */
  async 위원회_계류법률안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ndiwuqmpambgvnfsj',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 기타자료
   * **국회입법조사처 기타자료**
   */
  async 국회입법조사처_기타자료(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ngsyzvtlaqffhhthc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 기타 행정정보 공표
   * **국회도서관 기타 행정정보 공표**
   */
  async 국회도서관_기타_행정정보_공표(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncfunqmvaeyhftgsq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 인사청문회 회의록
   * **인사청문회 회의록**
   */
  async 인사청문회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFCFRMCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 회기정보
   * **회기정보**
   */
  async 회기정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLSESSPROD',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * (영문)위원회 정보
   * **(영문)위원회 정보**
   */
  async 영문위원회_정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ENCMITINFO',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NATV 뉴스_정당
   * **NATV 뉴스_정당**
   */
  async NATV_뉴스_정당(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbzyjjyoamdqqjorw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 본회의 의사일정
   * **국회의원 본회의 의사일정**
   */
  async 국회의원_본회의_의사일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NAMEMBERLEGISCHEDULE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 경제 정책 및 동향 분석
   * **NABO 경제 정책 및 동향 분석**
   */
  async NABO_경제_정책_및_동향_분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nlugechzaowgqlopk',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 미래생각
   * **국회미래연구원 미래생각**
   */
  async 국회미래연구원_미래생각(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'THINKING',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 인적사항
   * **국회의원 인적사항**
   */
  async 국회의원_인적사항(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nwvrqwxyaytdsfvhu',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안 법사위 회의정보 조회
   * **의안 법사위 회의정보 조회**
   */
  async 의안_법사위_회의정보_조회(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLLWJUDGECONF',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 조세수첩
   * **NABO 조세수첩**
   */
  async NABO_조세수첩(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nfhoxrreafqmtsesg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 대한민국 조세
   * **대한민국 조세**
   */
  async 대한민국_조세(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NABOPBLMTAXGOV',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 예결산 예비심사 정보 조회
   * **예결산 예비심사 정보 조회**
   */
  async 예결산_예비심사_정보_조회(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BUDGETADJUDGE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 대통령취임연설 포함 회의록
   * **대통령취임연설 포함 회의록**
   */
  async 대통령취임연설_포함_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFDNACONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청원 심사정보
   * **청원 심사정보**
   */
  async 청원_심사정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'PTTJUDGE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_국회는 지금
   * **국회뉴스ON_국회는 지금**
   */
  async 국회뉴스ON_국회는_지금(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nkyhxppmamrzejhij',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(입법영향분석보고서)
   * **국회입법조사처 연구보고서(입법영향분석보고서)**
   */
  async 국회입법조사처_연구보고서입법영향분석보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nusxjbgeahffxfrzl',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * (영문)국회의원 정보
   * **(영문)국회의원 정보**
   */
  async 영문국회의원_정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ENNAMEMBER',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법률안 심사 및 처리(본회의부의안건)
   * **법률안 심사 및 처리(본회의부의안건)**
   */
  async 법률안_심사_및_처리본회의부의안건(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nayjnliqaexiioauy',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청원 상세정보
   * **청원 상세정보**
   */
  async 청원_상세정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'PTTINFODETAIL',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회 정당별 국회의원 지역분포
   * **역대 국회 정당별 국회의원 지역분포**
   */
  async 역대_국회_정당별_국회의원_지역분포(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nvarpwrqaklzxcmmp',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 서면질의답변서 목록
   * **서면질의답변서 목록**
   */
  async 서면질의답변서_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFATTQNALIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회문화극장 영화 일정
   * **국회문화극장 영화 일정**
   */
  async 국회문화극장_영화_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nfzxkpetatunooatq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_발행물 및 보고서
   * **국회뉴스ON_발행물 및 보고서**
   */
  async 국회뉴스ON_발행물_및_보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nyazvvwaarapcotdp',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 지출집행현황(단위사업별)
   * **지출집행현황(단위사업별)**
   */
  async 지출집행현황단위사업별(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nqflguqiachajqpaq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * (영문)최신 처리 의안
   * **(영문)최신 처리 의안**
   */
  async 영문최신_처리_의안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ENBCONFBILL',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 본회의 처리안건_결산
   * **본회의 처리안건_결산**
   */
  async 본회의_처리안건_결산(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nkalemivaqmoibxro',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회별 개정대상 법률 현황
   * **위원회별 개정대상 법률 현황**
   */
  async 위원회별_개정대상_법률_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'CLAWSTATE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 시정 및 처리 요구사항에 대한 결과보고서
   * **시정 및 처리 요구사항에 대한 결과보고서**
   */
  async 시정_및_처리_요구사항에_대한_결과보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'AUDITREPORTVISIBILITY',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 제공 자료 통합 API
   * **국회미래연구원 제공 자료 통합 API**
   */
  async 국회미래연구원_제공_자료_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLNAFIPBLM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 예결산 종합심사 회의정보 조회
   * **예결산 종합심사 회의정보 조회**
   */
  async 예결산_종합심사_회의정보_조회(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BUDGETJUDGECONF',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회별 공청회 일정
   * **위원회별 공청회 일정**
   */
  async 위원회별_공청회_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'napvpafracrdkxmoq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안정보 통합 API
   * **의안정보 통합 API**
   */
  async 의안정보_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLBILL',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회박물관 행사 일정
   * **국회박물관 행사 일정**
   */
  async 국회박물관_행사_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'EVENTSCHEDULEMUSEUM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 본회의 처리안건_예산안
   * **본회의 처리안건_예산안**
   */
  async 본회의_처리안건_예산안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzgjnvnraowulzqwl',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 정책 세미나 개최 현황
   * **국회의원 정책 세미나 개최 현황**
   */
  async 국회의원_정책_세미나_개최_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbqbmccpamsvwebkn',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 실시간 의사중계 현황
   * **실시간 의사중계 현황**
   */
  async 실시간_의사중계_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'WEBCASTREALTIEM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 청원현황
   * **국회의원 청원현황**
   */
  async 국회의원_청원현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NAMEMBERLEGIPTT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국정감사 결과보고서
   * **국정감사 결과보고서**
   */
  async 국정감사_결과보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'AUDITREPORTRESULT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 외빈연설 포함 회의록
   * **외빈연설 포함 회의록**
   */
  async 외빈연설_포함_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFFDCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법제실 발간자료
   * **법제실 발간자료**
   */
  async 법제실_발간자료(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npvzeftnakulkqsfg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회발간물 통합 API
   * **국회발간물 통합 API**
   */
  async 국회발간물_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLNASPBLM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 미래칼럼
   * **국회미래연구원 미래칼럼**
   */
  async 국회미래연구원_미래칼럼(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'COLUMN',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 행정감시 행정정보 공표
   * **국회도서관 행정감시 행정정보 공표**
   */
  async 국회도서관_행정감시_행정정보_공표(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nmpmwlsxaavvjbizm',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 처리 의안통계(의안종류별ㆍ위원회별)
   * **처리 의안통계(의안종류별ㆍ위원회별)**
   */
  async 처리_의안통계의안종류별ㆍ위원회별(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLCNTLAWDIV',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회 기자회견장 사용현황
   * **국회 기자회견장 사용현황**
   */
  async 국회_기자회견장_사용현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'TBPRESSCONF',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회예산정책처 연차보고서
   * **국회예산정책처 연차보고서**
   */
  async 국회예산정책처_연차보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nkcyfxwnanwqvlysg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청원 계류현황
   * **청원 계류현황**
   */
  async 청원_계류현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nvqbafvaajdiqhehi',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의원연맹별 보조금 예산
   * **의원연맹별 보조금 예산**
   */
  async 의원연맹별_보조금_예산(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nvnqdhtcagefwecad',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 사업별 예산 편성 규모
   * **사업별 예산 편성 규모**
   */
  async 사업별_예산_편성_규모(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nztwkhgzakucszgls',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회의원 의원이력
   * **역대 국회의원 의원이력**
   */
  async 역대_국회의원_의원이력(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nfzegpkvaclgtscxt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회사무처 2천만원 이상 수의계약 현황
   * **국회사무처 2천만원 이상 수의계약 현황**
   */
  async 국회사무처_2천만원_이상_수의계약_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'niqfwqfuaazozqwrj',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 경제전망
   * **NABO 경제전망**
   */
  async NABO_경제전망(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npmbwjybaffxwvbbk',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의회외교 동향과 분석
   * **의회외교 동향과 분석**
   */
  async 의회외교_동향과_분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nlpoxcnfacjeiankg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 추계 세제 이슈
   * **NABO 추계 세제 이슈**
   */
  async NABO_추계_세제_이슈(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'njnuvjckavvwaohhj',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의회외교 해외주요법률 제개정
   * **의회외교 해외주요법률 제개정**
   */
  async 의회외교_해외주요법률_제개정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'DIPLOMACYREVLAW',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 회의별 안건목록
   * **회의별 안건목록**
   */
  async 회의별_안건목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFBLLLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 정책에 관한 행정정보 공표
   * **국회도서관 정책에 관한 행정정보 공표**
   */
  async 국회도서관_정책에_관한_행정정보_공표(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxycgjkkayfqaynjz',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_부의장동향
   * **국회뉴스ON_부의장동향**
   */
  async 국회뉴스ON_부의장동향(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncnyddauatqkofnfe',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 연구보고서
   * **국회미래연구원 연구보고서**
   */
  async 국회미래연구원_연구보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'RESREPORT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO Focus
   * **NABO Focus**
   */
  async NABO_Focus(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npbizvcmabezbhcez',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 주요정치일정
   * **주요정치일정**
   */
  async 주요정치일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nkhynxdkagqtlgsqg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법률안 심사 및 처리(위원회안, 대안)
   * **법률안 심사 및 처리(위원회안, 대안)**
   */
  async 법률안_심사_및_처리위원회안_대안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxtkyptyaolzcbfwl',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 날짜별 의정활동
   * **날짜별 의정활동**
   */
  async 날짜별_의정활동(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nqfvrbsdafrmuzixe',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의회외교 실시내역
   * **의회외교 실시내역**
   */
  async 의회외교_실시내역(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzhjpcyhahczgglqc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 위원회 경력
   * **국회의원 위원회 경력**
   */
  async 국회의원_위원회_경력(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nyzrglyvagmrypezq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(외국입법 동향과 분석)
   * **국회입법조사처 연구보고서(외국입법 동향과 분석)**
   */
  async 국회입법조사처_연구보고서외국입법_동향과_분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncydhlphalaqvuzph',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_의장동향
   * **국회뉴스ON_의장동향**
   */
  async 국회뉴스ON_의장동향(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nknsekyoahvonwlll',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의장 주요일정
   * **국회의장 주요일정**
   */
  async 국회의장_주요일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nhedurlwawoquyxwn',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 시정조치 결과보고서 목록
   * **시정조치 결과보고서 목록**
   */
  async 시정조치_결과보고서_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFATTATBLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 업무추진비 집행현황
   * **국회입법조사처 업무추진비 집행현황**
   */
  async 국회입법조사처_업무추진비_집행현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nlmqzojlayoicbxhw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 보도자료
   * **보도자료**
   */
  async 보도자료(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ninnagrlaelvtzfnt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 세미나·간담회
   * **국회입법조사처 세미나·간담회**
   */
  async 국회입법조사처_세미나간담회(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nyapimeoaczouxzhb',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 본회의 표결정보
   * **국회의원 본회의 표결정보**
   */
  async 국회의원_본회의_표결정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nojepdqqaweusdfbi',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 수입징수현황(수입목별)
   * **수입징수현황(수입목별)**
   */
  async 수입징수현황수입목별(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ndaabdwcatyjpopzn',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 영상회의록(발언영상)
   * **국회의원 영상회의록(발언영상)**
   */
  async 국회의원_영상회의록발언영상(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npeslxqbanwkimebr',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의회외교포럼 활동보고
   * **의회외교포럼 활동보고**
   */
  async 의회외교포럼_활동보고(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nlcqadrmachptelsf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회의원 인적사항
   * **역대 국회의원 인적사항**
   */
  async 역대_국회의원_인적사항(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npffdutiapkzbfyvr',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 법제사례 연구발표
   * **법제사례 연구발표**
   */
  async 법제사례_연구발표(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nljgwkpgacamiyjod',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청문회 회의록
   * **청문회 회의록**
   */
  async 청문회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFCHCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 본회의 회의록
   * **본회의 회의록**
   */
  async 본회의_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzbyfwhwaoanttzje',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 정책자료실
   * **국회의원 정책자료실**
   */
  async 국회의원_정책자료실(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npggiwnfaihlruyso',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 본회의 처리안건_법률안
   * **본회의 처리안건_법률안**
   */
  async 본회의_처리안건_법률안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nwbpacrgavhjryiph',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회 위원 명단
   * **위원회 위원 명단**
   */
  async 위원회_위원_명단(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nktulghcadyhmiqxi',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 SNS정보
   * **국회의원 SNS정보**
   */
  async 국회의원_SNS정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'negnlnyvatsjwocar',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 기자회견
   * **국회의원 기자회견**
   */
  async 국회의원_기자회견(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npbzvuwvasdqldskm',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 연간보고서
   * **국회도서관 연간보고서**
   */
  async 국회도서관_연간보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NANETPBLMYEAR',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의회외교 동향
   * **의회외교 동향**
   */
  async 의회외교_동향(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'DIPLOMACYTREND',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 최신외국입법정보
   * **최신외국입법정보**
   */
  async 최신외국입법정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NANETPBLMLEGINEW',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(이슈와 논점)
   * **국회입법조사처 연구보고서(이슈와 논점)**
   */
  async 국회입법조사처_연구보고서이슈와_논점(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxlcxbbkapsrjayur',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 시청각자료 목록
   * **시청각자료 목록**
   */
  async 시청각자료_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFATTACRCLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회 보유 자산(전체)
   * **국회 보유 자산(전체)**
   */
  async 국회_보유_자산전체(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nujvlukkawoxnwvmg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 세미나 일정
   * **국회의원 세미나 일정**
   */
  async 국회의원_세미나_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nfcoioopazrwmjrgs',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회의원 재선 현황
   * **역대 국회의원 재선 현황**
   */
  async 역대_국회의원_재선_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ngdeoqgoablceakpp',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의사일정공지
   * **의사일정공지**
   */
  async 의사일정공지(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'njlyptmbatwuwjtxf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청원 통계
   * **청원 통계**
   */
  async 청원_통계(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'PTTCNTMAIN',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 정보목록
   * **국회입법조사처 정보목록**
   */
  async 국회입법조사처_정보목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nyrggptbaislycxyt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 대통령시정연설 포함 회의록
   * **대통령시정연설 포함 회의록**
   */
  async 대통령시정연설_포함_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFSNACONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 회의록별 상세정보
   * **회의록별 상세정보**
   */
  async 회의록별_상세정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFDETAIL',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안 제안자정보
   * **의안 제안자정보**
   */
  async 의안_제안자정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLINFOPPSR',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 회의별 의안목록
   * **회의별 의안목록**
   */
  async 회의별_의안목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFBILLLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회사무처 1억원 이상 계약 현황
   * **국회사무처 1억원 이상 계약 현황**
   */
  async 국회사무처_1억원_이상_계약_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nwaglmniarckeuvuh',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 의원이력
   * **국회의원 의원이력**
   */
  async 국회의원_의원이력(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nexgtxtmaamffofof',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회 시설물 안내
   * **국회 시설물 안내**
   */
  async 국회_시설물_안내(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nabhvpvoadjjlckgw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 여성 국회의원 현황
   * **역대 여성 국회의원 현황**
   */
  async 역대_여성_국회의원_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nmkjkjpwaxfhwdnjl',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 제공 자료 통합 API
   * **국회입법조사처 제공 자료 통합 API**
   */
  async 국회입법조사처_제공_자료_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLNARSPBLM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 우수연구단체 현황
   * **우수연구단체 현황**
   */
  async 우수연구단체_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nvbqusufapyxesqek',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 정보공개청구 처리현황 목록
   * **국회도서관 정보공개청구 처리현황 목록**
   */
  async 국회도서관_정보공개청구_처리현황_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbtkkkcoaffclmwoc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 소위원회 회의록
   * **소위원회 회의록**
   */
  async 소위원회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFSUBCCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회개방행사 일정
   * **국회개방행사 일정**
   */
  async 국회개방행사_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nneiozjtawpqhaidq',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 미래서평
   * **국회미래연구원 미래서평**
   */
  async 국회미래연구원_미래서평(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BKREVIEW',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 지출집행현황(세부사업별)
   * **지출집행현황(세부사업별)**
   */
  async 지출집행현황세부사업별(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'njzofberazvhjncha',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회 자료실
   * **위원회 자료실**
   */
  async 위원회_자료실(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbiwfpqbaipwgkhfr',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 대한민국 재정
   * **NABO 대한민국 재정**
   */
  async NABO_대한민국_재정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxrkedghaikxodlja',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 연구단체 연구활동 보고서
   * **연구단체 연구활동 보고서**
   */
  async 연구단체_연구활동_보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncrwiahparxrpodcv',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NATV 뉴스_위원회
   * **NATV 뉴스_위원회**
   */
  async NATV_뉴스_위원회(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nuizrfvoaepvwrjtz',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 지역현안 입법지원 토론회 개최 내역
   * **지역현안 입법지원 토론회 개최 내역**
   */
  async 지역현안_입법지원_토론회_개최_내역(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nyioaasianxlkcqxs',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 예산 분석
   * **NABO 예산 분석**
   */
  async NABO_예산_분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxeytfqvawilyincp',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 제안설명서 목록
   * **제안설명서 목록**
   */
  async 제안설명서_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFATTEXPLANLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 정보공개청구 행정소송 판결현황
   * **정보공개청구 행정소송 판결현황**
   */
  async 정보공개청구_행정소송_판결현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nasphyhkaiaivedef',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 학술지(입법과 정책)
   * **국회입법조사처 학술지(입법과 정책)**
   */
  async 국회입법조사처_학술지입법과_정책(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nakxubpbapfmxdzrc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회 현황 정보
   * **위원회 현황 정보**
   */
  async 위원회_현황_정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxrvzonlafugpqjuh',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회일정 통합 API
   * **국회일정 통합 API**
   */
  async 국회일정_통합_API(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ALLSCHEDULE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_국회동향기타
   * **국회뉴스ON_국회동향기타**
   */
  async 국회뉴스ON_국회동향기타(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'noxbiocwawvechjkc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 미래포럼
   * **국회미래연구원 미래포럼**
   */
  async 국회미래연구원_미래포럼(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'FORUM',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 예결산 심사정보
   * **예결산 심사정보**
   */
  async 예결산_심사정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BUDGETJUDGE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(입법·정책보고서)
   * **국회입법조사처 연구보고서(입법·정책보고서)**
   */
  async 국회입법조사처_연구보고서입법정책보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'njythywqasrxkjxpv',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 회의록별 부록 정보
   * **회의록별 부록 정보**
   */
  async 회의록별_부록_정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFATTAPPENDIXLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회의원 현황
   * **역대 국회의원 현황**
   */
  async 역대_국회의원_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nprlapfmaufmqytet',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 정당 및 교섭단체 의석수 현황
   * **정당 및 교섭단체 의석수 현황**
   */
  async 정당_및_교섭단체_의석수_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nepjpxkkabqiqpbvk',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_그건 이렇습니다
   * **국회뉴스ON_그건 이렇습니다**
   */
  async 국회뉴스ON_그건_이렇습니다(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ngwksdbiacfrifqsi',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안별 표결현황
   * **의안별 표결현황**
   */
  async 의안별_표결현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncocpgfiaoituanbr',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회채용_종합현황
   * **국회채용_종합현황**
   */
  async 국회채용_종합현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nwutmjsuayhwupoxc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 보좌직원 채용
   * **국회의원 보좌직원 채용**
   */
  async 국회의원_보좌직원_채용(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbdlhufiaebnmjfxf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청원 접수목록
   * **청원 접수목록**
   */
  async 청원_접수목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'PTTRCP',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회사무처 정보공개청구 처리현황 목록
   * **국회사무처 정보공개청구 처리현황 목록**
   */
  async 국회사무처_정보공개청구_처리현황_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ngktubbaavswhlnle',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회 및 국회사무처 소관 법인별 보조금 예산
   * **국회 및 국회사무처 소관 법인별 보조금 예산**
   */
  async 국회_및_국회사무처_소관_법인별_보조금_예산(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ntexdxjbamdpccvnt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 공청회 회의록
   * **공청회 회의록**
   */
  async 공청회_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFPHCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 연구단체 활동실적
   * **연구단체 활동실적**
   */
  async 연구단체_활동실적(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nnzoijvcaiexypqaf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 결산 분석
   * **NABO 결산 분석**
   */
  async NABO_결산_분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'negjnychalvyrcifv',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * (영문)국회일정
   * **(영문)국회일정**
   */
  async 영문국회일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ENSCHEDULENOTICE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안 접수목록
   * **의안 접수목록**
   */
  async 의안_접수목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLRCP',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회 보유 자산(토지)
   * **국회 보유 자산(토지)**
   */
  async 국회_보유_자산토지(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nvkhvcvvavafkjqca',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 9급 공개경쟁 채용현황
   * **9급 공개경쟁 채용현황**
   */
  async grade_9급_공개경쟁_채용현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncdawwizazvcivann',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의안 상세정보
   * **의안 상세정보**
   */
  async 의안_상세정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLINFODETAIL',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 어린이국회 개최 결과
   * **어린이국회 개최 결과**
   */
  async 어린이국회_개최_결과(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'CHILDRENOPENRESULT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 처리 의안통계(총괄)
   * **처리 의안통계(총괄)**
   */
  async 처리_의안통계총괄(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'BILLCNTMAIN',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 대한민국 경제
   * **대한민국 경제**
   */
  async 대한민국_경제(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NABOPBLMECNGOV',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회예산정책처 정보공개청구 처리현황 목록
   * **국회예산정책처 정보공개청구 처리현황 목록**
   */
  async 국회예산정책처_정보공개청구_처리현황_목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'niykgszzaqxzdejiz',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * (영문)국회의장 연설문
   * **(영문)국회의장 연설문**
   */
  async 영문국회의장_연설문(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ENSPEAKERSPEECHES',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 어린이국회 우수법률안 소개
   * **어린이국회 우수법률안 소개**
   */
  async 어린이국회_우수법률안_소개(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'CHILDRENGREATBILL',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회의장단 정보
   * **역대 국회의장단 정보**
   */
  async 역대_국회의장단_정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nubbgpxmawmzkclkc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 본회의 처리안건_기타
   * **본회의 처리안건_기타**
   */
  async 본회의_처리안건_기타(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbslryaradshbpbpm',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청원 소개의원 정보
   * **청원 소개의원 정보**
   */
  async 청원_소개의원_정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'PTTINFOPPSR',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NATV 뉴스_기타
   * **NATV 뉴스_기타**
   */
  async NATV_뉴스_기타(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nshnpsvaalefpwslj',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(외국입법·정책 분석)
   * **국회입법조사처 연구보고서(외국입법·정책 분석)**
   */
  async 국회입법조사처_연구보고서외국입법정책_분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'NARSBOOKDATA',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 전원위원회 일정
   * **전원위원회 일정**
   */
  async 전원위원회_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nomxleneanjcruaez',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_의원 입법안
   * **국회뉴스ON_의원 입법안**
   */
  async 국회뉴스ON_의원_입법안(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ntbzdcigaongnbfxc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * OPEN API 전체 현황
   * **OPEN API 전체 현황**
   */
  async OPEN_API_전체_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'OPENSRVAPI',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의원외교협의회 명단
   * **의원외교협의회 명단**
   */
  async 의원외교협의회_명단(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nxcxrdmpaonzzbkic',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NATV 뉴스_인물
   * **NATV 뉴스_인물**
   */
  async NATV_뉴스_인물(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nauvppbxargkmyovh',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 비용추계 및 재정전망
   * **NABO 비용추계 및 재정전망**
   */
  async NABO_비용추계_및_재정전망(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'npsofwddayuhqhfgh',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 진행중 입법예고
   * **진행중 입법예고**
   */
  async 진행중_입법예고(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nknalejkafmvgzmpt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 행정입법 분석연구
   * **행정입법 분석연구**
   */
  async 행정입법_분석연구(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'njwcdwalactbvidal',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연구보고서(국제통계 동향과 분석)
   * **국회입법조사처 연구보고서(국제통계 동향과 분석)**
   */
  async 국회입법조사처_연구보고서국제통계_동향과_분석(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nhtegpibasggyssce',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * (영문)국회 소식 및 보도자료
   * **(영문)국회 소식 및 보도자료**
   */
  async 영문국회_소식_및_보도자료(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ENPRESS',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 위원회별 일정
   * **위원회별 일정**
   */
  async 위원회별_일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nrsldhjpaemrmolla',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 정보공개청구 이의신청 처리현황
   * **정보공개청구 이의신청 처리현황**
   */
  async 정보공개청구_이의신청_처리현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nfwzyvuxacqtkttvr',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_사무총장동향
   * **국회뉴스ON_사무총장동향**
   */
  async 국회뉴스ON_사무총장동향(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'navxqzpzafxazsobg',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회뉴스ON_외부기고
   * **국회뉴스ON_외부기고**
   */
  async 국회뉴스ON_외부기고(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nrjoiyzqaxpwfzuut',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회의원 의정보고서
   * **국회의원 의정보고서**
   */
  async 국회의원_의정보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nmfcjtvmajsbhhckf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 청원 처리현황
   * **청원 처리현황**
   */
  async 청원_처리현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncryefyuaflxnqbqo',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의장단 주요일정
   * **의장단 주요일정**
   */
  async 의장단_주요일정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'SPGRPSCHEDULE',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 알림지(홍보책자)
   * **국회입법조사처 알림지(홍보책자)**
   */
  async 국회입법조사처_알림지홍보책자(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ndbehlnaagkjdvmdu',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 역대 국회 선거일, 의원정수, 임기정보
   * **역대 국회 선거일, 의원정수, 임기정보**
   */
  async 역대_국회_선거일_의원정수_임기정보(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nokivirranikoinnk',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의원실 지원경비 현황
   * **의원실 지원경비 현황**
   */
  async 의원실_지원경비_현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'naqngwqyayereswlo',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 정책연구용역 보고서
   * **국회도서관 정책연구용역 보고서**
   */
  async 국회도서관_정책연구용역_보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzkdlzgoadvnlcubt',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 인사청문회
   * **인사청문회**
   */
  async 인사청문회(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nrvsawtaauyihadij',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 연석회의 회의록
   * **연석회의 회의록**
   */
  async 연석회의_회의록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'VCONFJMCONFLIST',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 의장단 보도자료
   * **의장단 보도자료**
   */
  async 의장단_보도자료(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'SPGRPPRESS',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회입법조사처 연차보고서
   * **국회입법조사처 연차보고서**
   */
  async 국회입법조사처_연차보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nbeysefuaxfqkbynf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회미래연구원 연차보고서
   * **국회미래연구원 연차보고서**
   */
  async 국회미래연구원_연차보고서(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ANUREPORT',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회도서관 사업에 관한 행정정보 공표
   * **국회도서관 사업에 관한 행정정보 공표**
   */
  async 국회도서관_사업에_관한_행정정보_공표(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nqxsurgrayxndzwjf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * (영문)국회의장 주요동정
   * **(영문)국회의장 주요동정**
   */
  async 영문국회의장_주요동정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ENSPEAKERACTIVITI',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회예산정책처 업무추진비 집행현황
   * **국회예산정책처 업무추진비 집행현황**
   */
  async 국회예산정책처_업무추진비_집행현황(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nknmvzexapgiarqcd',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 경제재정수첩
   * **NABO 경제재정수첩**
   */
  async NABO_경제재정수첩(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncnpwqimabagvdmky',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 재정동향 이슈
   * **NABO 재정동향 이슈**
   */
  async NABO_재정동향_이슈(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nsjmwljyauxvdodgh',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회예산정책처 홍보물
   * **국회예산정책처 홍보물**
   */
  async 국회예산정책처_홍보물(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nozwevvqatjorgvoc',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 국회예산정책처 정보목록
   * **국회예산정책처 정보목록**
   */
  async 국회예산정책처_정보목록(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzdoatdlaxeaqolvx',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 대한민국 지방재정
   * **NABO 대한민국 지방재정**
   */
  async NABO_대한민국_지방재정(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'naqdzohuagtisumcw',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 조세분석 및 연구
   * **NABO 조세분석 및 연구**
   */
  async NABO_조세분석_및_연구(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'ncsrgzrwabonoefxi',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 예산정책연구
   * **예산정책연구**
   */
  async 예산정책연구(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nrbcmchtaaqktsbjf',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * NABO 재정사업 평가
   * **NABO 재정사업 평가**
   */
  async NABO_재정사업_평가(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nzjvrirbauqmffblj',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

  /**
   * 정책연구용역
   * **정책연구용역**
   */
  async 정책연구용역(params: Record<string, any> = {}, pagination: { page?: number; take?: number } = {}): Promise<APIResponse> {
    return callOpenApiRaw(
      'nakxneqwaouwyagim',  // command
      { 
        page: pagination.page || 1, 
        take: pagination.take || 10 
      },  // pagination
      { 
        KEY: this.config.apiKey,
        Type: this.config.responseType || 'json',
        ...params 
      }  // args
    );
  }

}

// 편의를 위한 기본 export
export default OpenAPI;

// 타입들 re-export
export type { AssemblyAPIConfig, APIResponse } from './types';