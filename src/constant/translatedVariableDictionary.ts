import * as H from 'hotscript';

/**
 * @description if you modify this properties, you should upgrade the minor version because it will be a break changes
 */

export const variable = <Args extends Array<string>>(...args: Args) =>
  args.reduce(
    (prev, cur, idx) =>
      idx === 0
        ? `${cur.charAt(0).toLowerCase()}${cur.slice(1)}`
        : `${prev}${cur.charAt(0).toUpperCase()}${cur.slice(1)}`,
    ''
  ) as H.Pipe<Args, [H.Tuples.Map<H.Strings.Capitalize>, H.Tuples.Join<''>, H.Strings.Uncapitalize]>;

const 국회의원 = 'lawmaker';
const 코드 = 'code';
const 명 = 'name';
const 한자명 = variable(`chinese`, 명);
const 영문명 = variable(`english`, 명);
const 구분 = 'division';
const 구분명 = `${구분}`;
const 생일 = 'birthday';
const 직책 = 'duty';
const 정당 = 'politicalParty';
const 선거구 = 'electoralDistrict';
const 위원회 = 'committee';
const 소속위원회 = 'belongingCommittee';
const 선거 = 'election';
const 재선 = variable(`re`, 선거);
const 의안 = `bill`;
const 번호 = 'number';
const 제안자 = 'proposer';
const 대표발의자 = variable(`lead`, 제안자);
const 소관위원회 = variable(`jurisdiction`, 위원회);
const 법제사법위원회 = variable(`legislationAndJudiciary`, 위원회);
const 처리 = 'process';
const 일자 = `date`;
const 처리결과 = variable(처리, `result`);
const 처리일 = variable(처리, 일자);
const 회부일 = variable(`submit`, 일자);
const 상정일 = variable(`present`, 일자);

const 일정 = 'schedule';
const 시간 = 'time';
const 회의 = 'conference';
const 행사 = 'event;';

export const translatedVariableDictionary = {
  국회의원코드: variable(국회의원, 코드),
  국회의원명: variable(국회의원, 명),
  국회의원한자명: variable(국회의원, 한자명),
  국회의원영문명: variable(국회의원, 영문명),
  생일구분코드: variable(생일, 구분, 코드),
  생일일자: variable(생일),
  직책명: variable(직책, 명),
  정당명: variable(정당, 명),
  선거구명: variable(선거구, 명),
  선거구구분명: variable(선거구, 구분명),
  위원회명: variable(위원회, 명),
  소속위원회명: variable(소속위원회, 명),
  재선구분명: variable(재선, 구분명),
  당선대수: variable(선거, 'congress'),
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

  의안ID: variable(의안, 'ID'),
  의안번호: variable(의안, 번호),
  대: 'age',
  의안명: variable(의안, 명),
  제안자,
  제안자구분: variable(제안자, 구분),
  제안일: 'proposeDate',
  소관위코드: variable(소관위원회, 코드),
  소관위: variable(소관위원회),
  소관위회부일: variable(소관위원회, 회부일),
  위원회심사_처리일: variable(위원회, 'review', 처리일),
  의안상세정보_URL: variable(의안, 'detailUrl'),
  대표발의자: variable(대표발의자),
  법사위처리결과: variable(법제사법위원회, 처리결과),
  법사위처리일: variable(법제사법위원회, 처리일),
  법사위상정일: variable(법제사법위원회, 상정일),
  법사위회부일: variable(법제사법위원회, 회부일),
  소관위처리결과: variable(소관위원회, 처리결과),
  소관위처리일: variable(소관위원회, 처리일),
  소관위상정일: variable(소관위원회, 상정일),
  대표발의자코드: variable(대표발의자, 코드),
  본회의심의결과: 'plenarySessionReviewResult',
  의결일: 'resolutionDate',

  일정_종류: variable(일정, 'type'),
  일정_내용: variable(일정, 'content'),
  일정_일자: variable(일정, 일자),
  일정_시간: variable(일정, 시간),
  회의_구분: variable(회의, 구분),
  회의_회기: variable(회의, 'session'),
  회의_차수: variable(회의, 'degree'),
  행사_주체자: variable(행사, 'institution'),
  행사_장소: variable(행사, 'place'),
} as const;
