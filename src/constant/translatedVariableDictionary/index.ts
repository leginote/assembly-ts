/**
 * @description if you modify this properties, you should upgrade the minor version because it will be a break changes
 */

import { variable } from './variable';

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
const 행사 = 'event';

export const 국회의원코드 = variable(국회의원, 코드);
export const 국회의원명 = variable(국회의원, 명);
export const 국회의원한자명 = variable(국회의원, 한자명);
export const 국회의원영문명 = variable(국회의원, 영문명);
export const 생일구분코드 = variable(생일, 구분, 코드);
export const 생일일자 = variable(생일);
export const 직책명 = variable(직책, 명);
export const 정당명 = variable(정당, 명);
export const 선거구명 = variable(선거구, 명);
export const 선거구구분명 = variable(선거구, 구분명);
export const 위원회명 = variable(위원회, 명);
export const 소속위원회명 = variable(소속위원회, 명);
export const 재선구분명 = variable(재선, 구분명);
export const 당선대수 = variable(선거, 'congress');
export const 성별 = 'gender';
export const 전화번호 = 'phoneNumber';
export const 국회의원이메일주소 = 'email';
export const 국회의원홈페이지URL = 'homepage';
export const 보좌관 = 'aide';
export const 비서관 = 'seniorSecretary';
export const 비서 = 'secretary';
export const 약력 = 'profile';
export const 사무실호실 = 'officeRoom';
export const 사진 = 'picture';

export const 의안ID = variable(의안, 'ID');
export const 의안번호 = variable(의안, 번호);
export const 대 = 'age';
export const 의안명 = variable(의안, 명);
export const 제안자 = variable('proposer');
export const 대표발의자 = variable(`lead`, 제안자);
export const 제안자구분 = variable(제안자, 구분);
export const 제안일 = 'proposeDate';
export const 소관위코드 = variable(소관위원회, 코드);
export const 소관위 = variable(소관위원회);
export const 소관위회부일 = variable(소관위원회, 회부일);
export const 위원회심사_처리일 = variable(위원회, 'review', 처리일);
export const 의안상세정보_URL = variable(의안, 'detailUrl');
export const 법사위처리결과 = variable(법제사법위원회, 처리결과);
export const 법사위처리일 = variable(법제사법위원회, 처리일);
export const 법사위상정일 = variable(법제사법위원회, 상정일);
export const 법사위회부일 = variable(법제사법위원회, 회부일);
export const 소관위처리결과 = variable(소관위원회, 처리결과);
export const 소관위처리일 = variable(소관위원회, 처리일);
export const 소관위상정일 = variable(소관위원회, 상정일);
export const 대표발의자코드 = variable(대표발의자, 코드);
export const 본회의심의결과 = 'plenarySessionReviewResult';
export const 의결일 = 'resolutionDate';

export const 일정_종류 = variable(일정, 'type');
export const 일정_내용 = variable(일정, 'content');
export const 일정_일자 = variable(일정, 일자);
export const 일정_시간 = variable(일정, 시간);
export const 회의_구분 = variable(회의, 구분);
export const 회의_회기 = variable(회의, 'session');
export const 회의_차수 = variable(회의, 'degree');
export const 행사_주체자 = variable(행사, 'institution');
export const 행사_장소 = variable(행사, 'place');
