/**
 * @description if you modify this properties, you should upgrade the minor version because it will be a break changes
 * @ignore `~명`과 같은 이름을 지칭하는 변수의 경우 `Name`으로 끝나야함, 예외적으로 구분명은 `Division`으로 끝남
 * @ignore `~코드`와 같은 이름을 지칭하는 변수의 경우 `Code`로 끝나야함
 * @ignore `~일자`와 같은 이름을 지칭하는 변수의 경우 `Date`로 끝나야함
 * @ignore `~구분`과 같은 이름을 지칭하는 변수의 경우 `Division`으로 끝나야함, 만약 `구분명`이라면 `Division`을 사용
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
  당선대수: 'GTELT_ERACO',
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
} as const;
