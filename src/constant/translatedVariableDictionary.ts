export type MergeString<T extends ReadonlyArray<string>> = T extends [infer Word extends string]
  ? `${Word}`
  : T extends [infer First extends string, infer Last extends string]
    ? `${First}${Last}`
    : T extends [infer First extends string, ...infer Rest extends string[]]
      ? `${First}${MergeString<Rest>}`
      : never;

export type FirstLetterLowerCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Lowercase<First>}${Rest}`
  : T;

const isEmpty = (args?: string): args is '' | undefined => args === '' || args == null;

export const firstLetterLowerCase = <T extends string>(str: T) =>
  `${str.charAt(0).toLowerCase()}${str.slice(1)}` as FirstLetterLowerCase<T>;

export const variable = <T extends ReadonlyArray<string>>(_template: TemplateStringsArray, ...args: T) => {
  return (args.reduce((prev, cur, idx) => {
    if (idx !== 0) {
      return `${prev}${_template[idx]}${cur}`;
    }
    const prefix = _template[idx];

    if (isEmpty(prefix)) {
      return `${prev}${firstLetterLowerCase(cur)}`;
    }

    return `${prev}${firstLetterLowerCase(prefix)}${cur}`;
  }, '') + _template[args.length]) as T extends [
    infer First extends string,
    ...infer Rest extends ReadonlyArray<string>,
  ]
    ? MergeString<[FirstLetterLowerCase<First>, ...Rest]>
    : MergeString<T>;
};
/**
 * @description if you modify this properties, you should upgrade the minor version because it will be a break changes
 */

const 국회의원 = 'Lawmaker';
const 코드 = 'Code';
const 명 = 'Name';
const 한자명 = `Chinese${명}`;
const 영문명 = `English${명}`;
const 구분 = 'Division';
const 구분명 = `${구분}`;
const 생일 = 'Birthday';
const 직책 = 'Duty';
const 정당 = 'PoliticalParty';
const 선거구 = 'ElectoralDistrict';
const 위원회 = 'Committee';
const 소속위원회 = 'BelongingCommittee';
const 선거 = 'Election';
const 재선 = `Re${선거}`;
const 의안 = `Bill`;
const 번호 = 'Number';
const 제안자 = 'Proposer';
const 대표발의자 = `Lead${제안자}`;
const 소관위원회 = `Jurisdiction${위원회}`;
const 법제사법위원회 = `LegislationAndJudiciary${위원회}`;
const 처리 = 'Process';
const 일자 = `Date`;
const 처리결과 = `${처리}Result`;
const 처리일 = `${처리}${일자}`;
const 회부일 = `Submit${일자}`;
const 상정일 = `Present${일자}`;

export const translatedVariableDictionary = {
  국회의원코드: variable`${국회의원}${코드}`,
  국회의원명: variable`${국회의원}${명}`,
  국회의원한자명: variable`${국회의원}${한자명}`,
  국회의원영문명: variable`${국회의원}${영문명}`,
  생일구분코드: variable`${생일}${구분}${코드}`,
  생일일자: variable`${생일}`,
  직책명: variable`${직책}${명}`,
  정당명: variable`${정당}${명}`,
  선거구명: variable`${선거구}${명}`,
  선거구구분명: variable`${선거구}${구분명}`,
  위원회명: variable`${위원회}${명}`,
  소속위원회명: variable`${소속위원회}${명}`,
  재선구분명: variable`${재선}${구분명}`,
  당선대수: variable`${선거}Congress`,
  성별: 'gender',
  전화번호: 'phoneNumber',
  국회의원이메일주소: 'email',
  국회의원홈페이지URL: 'homepage',
  보좌관: 'aide',
  비서관: 'seniorSecretary',
  비서: 'secretary',
  약력: 'profile',
  사무실호실: 'officeRoom',
  사진: 'picture',

  의안ID: variable`${의안}ID`,
  의안번호: variable`${의안}${번호}`,
  대: 'age',
  의안명: variable`${의안}${명}`,
  제안자,
  제안자구분: variable`${제안자}${구분}`,
  제안일: 'proposeDate',
  소관위코드: variable`${소관위원회}${코드}`,
  소관위: variable`${소관위원회}`,
  소관위회부일: variable`${소관위원회}${회부일}`,
  위원회심사_처리일: `${위원회}Review${처리일}`,
  의안상세정보_URL: variable`${의안}DetailUrl`,
  대표발의자: variable`${대표발의자}`,
  법사위처리결과: variable`${법제사법위원회}${처리결과}`,
  법사위처리일: variable`${법제사법위원회}${처리일}`,
  법사위상정일: variable`${법제사법위원회}${상정일}`,
  법사위회부일: variable`${법제사법위원회}${회부일}`,
  소관위처리결과: variable`${소관위원회}${처리결과}`,
  소관위처리일: variable`${소관위원회}${처리일}`,
  소관위상정일: variable`${소관위원회}${상정일}`,
  대표발의자코드: variable`${대표발의자}${코드}`,
  본회의심의결과: 'plenarySessionReviewResult',
  의결일: 'resolutionDate',

  일정_종류: 'scheduleType',
  일정_내용: 'scheduleContent',
  일정_일자: 'scheduleDate',
  일정_시간: 'scheduleTime',
  회의_구분: 'conferenceDivision',
  회의_회기: 'conferenceSession',
  회의_차수: 'conferenceDegree',
  행사_주체자: 'eventInstitution',
  행사_장소: 'eventPlace',
} as const;
