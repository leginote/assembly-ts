/**
 * @description if you modify this properties, you should upgrade the minor version because it will be a break changes
 * @ignore `~명`과 같은 이름을 지칭하는 변수의 경우 `Name`으로 끝나야함, 예외적으로 구분명은 `Division`으로 끝남
 * @ignore `~코드`와 같은 이름을 지칭하는 변수의 경우 `Code`로 끝나야함
 * @ignore `~일자`와 같은 이름을 지칭하는 변수의 경우 `Date`로 끝나야함
 * @ignore `~구분`과 같은 이름을 지칭하는 변수의 경우 `Division`으로 끝나야함, 만약 `구분명`이라면 `Division`을 사용
 * @ignore `~처리`과 같은 이름을 지칭하는 변수의 경우 `Process`으로 끝나야함
 * @ignore `~상정`과 같은 이름을 지칭하는 변수의 경우 `Present`으로 끝나야함
 * @ignore `~회부`과 같은 이름을 지칭하는 변수의 경우 `Submit`으로 끝나야함
 * @ignore `~의결`과 같은 이름을 지칭하는 변수의 경우 `Resolution`으로 끝나야함
 */
export const translatedVariableDictionary = {
  국회의원코드: 'lawmakerCode',
  국회의원명: 'lawmakerName',
  국회의원한자명: 'lawmakerChineseName',
  국회의원영문명: 'lawmakerEnglishName',
  생일구분코드: 'birthdayDivisionCode',
  생일일자: 'birthday',
  직책명: 'dutyName',
  정당명: 'politicalPartyName',
  선거구명: 'electoralDistrictName',
  선거구구분명: 'electoralDistrictDivisionName',
  위원회명: 'committeeName',
  소속위원회명: 'belongingCommitteeName',
  재선구분명: 'reElectionClassificationDivision',
  당선대수: 'electionCongress',
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

  // 의안 관련 추가
  의안ID: 'billID',
  의안번호: 'billNumber',
  대: 'age',
  의안명: 'billName',
  제안자: 'proposer',
  제안자구분: 'proposerDivision',
  제안일: 'proposeDate',
  소관위코드: 'jurisdictionCommitteeCode',
  소관위: 'jurisdictionCommittee',
  소관위회부일: 'jurisdictionCommitteeSubmitDate',
  위원회심사_처리일: 'committeeReviewProcessDate',
  의안상세정보_URL: 'billDetailUrl',
  대표발의자: 'leadProposer',
  법사위처리결과: 'legislationAndJudiciaryCommitteeProcessResult',
  법사위처리일: 'legislationAndJudiciaryCommitteeProcessDate',
  법사위상정일: 'legislationAndJudiciaryCommitteePresentDate',
  법사위회부일: 'legislationAndJudiciaryCommitteeSubmitDate',
  소관위처리결과: 'jurisdictionCommitteeProcessResult',
  소관위처리일: 'jurisdictionCommitteeProcessDate',
  소관위상정일: 'jurisdictionCommitteePresentDate',
  대표발의자코드: 'leadProposerCode',
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
