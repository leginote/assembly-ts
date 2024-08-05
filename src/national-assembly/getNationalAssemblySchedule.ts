import { translatedVariableDictionary } from '../constant';
import { callOpenApi } from '../functional';
import { PaginationType } from '../types/callOpenApi';

interface NationalAssemblySchedule {
  SCH_KIND: string; // 일정종류
  SCH_CN: string; // 일정내용
  SCH_DT: string; // 일자
  SCH_TM: string; // 시간
  CONF_DIV: string; // 회의구분
  CMIT_NM: string; // 위원회명
  CONF_SESS: string; // 회의회기
  CONF_DGR: string; // 회의차수
  EV_INST_NM: string; // 행사주체자
  EV_PLC: string; // 행사장소
}

type Row = {
  [k in keyof NationalAssemblySchedule]: NationalAssemblySchedule[k] | null;
};

type Argument = {
  scheduleKind?: string;
  scheduleDate?: string;
} & PaginationType;

const command = 'ALLSCHEDULE';

const transform = (v: Row) => ({
  [translatedVariableDictionary['일정_종류']]: v.SCH_KIND,
  [translatedVariableDictionary['일정_내용']]: v.SCH_CN,
  [translatedVariableDictionary['일정_일자']]: v.SCH_DT,
  [translatedVariableDictionary['일정_시간']]: v.SCH_TM,
  [translatedVariableDictionary['회의_구분']]: v.CONF_DIV,
  [translatedVariableDictionary['위원회명']]: v.CMIT_NM,
  [translatedVariableDictionary['회의_회기']]: v.CONF_SESS,
  [translatedVariableDictionary['회의_차수']]: v.CONF_DGR,
  [translatedVariableDictionary['행사_주체자']]: v.EV_INST_NM,
  [translatedVariableDictionary['행사_장소']]: v.EV_PLC,
});
/**
 * @description call https://open.assembly.go.kr/portal/data/service/selectAPIServicePage.do/OOWY4R001216HX11437
 */
export const getNationalAssemblySchedule = async ({ page, take, ...rest }: Argument) => {
  const { scheduleKind: SCH_KIND, scheduleDate: SCH_DT } = rest;
  const res = await callOpenApi<typeof command, Row>(command, { page, take }, { SCH_KIND, SCH_DT });

  return res[command][1].row.map(transform);
};
