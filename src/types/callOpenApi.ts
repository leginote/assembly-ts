export type PaginationType = {
  page: number;
  take: number;
};

export type ApiCommand = ('ALLNAMEMBER' | 'ALLSCHEDULE' | 'TVBPMBILL11') & string;

export const OpenApiResponseKind = {
  'INFO-000': '정상 처리되었습니다.',
  'INFO-200': '관리자에 의해 인증키 사용이 제한되었습니다.',
  'INFO-300': '해당하는 데이터가 없습니다.',
  'ERROR-300': '필수 값이 누락되어 있습니다. 요청인자를 참고 하십시오.',
  'ERROR-290': '인증키가 유효하지 않습니다. 인증키가 없는 경우, 홈페이지에서 인증키를 신청하십시오.',
  'ERROR-337': '일별 트래픽 제한을 넘은 호출입니다. 오늘은 더이상 호출할 수 없습니다.',
  'ERROR-310': '해당하는 서비스를 찾을 수 없습니다. 요청인자 중 SERVICE를 확인하십시오.',
  'ERROR-333': '요청위치 값의 타입이 유효하지 않습니다.요청위치 값은 정수를 입력하세요.',
  'ERROR-336': '데이터요청은 한번에 최대 1,000건을 넘을 수 없습니다.',
  'ERROR-500': '서버 오류입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다.',
  'ERROR-600': '데이터베이스 연결 오류입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다.',
  'ERROR-601': 'SQL 문장 오류 입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다.',
  'ERROR-990': '인증서가 폐기되었습니다.홈페이지에서 인증키를 확인하십시오.',
} as const;
export type OpenApiCode = keyof typeof OpenApiResponseKind;
