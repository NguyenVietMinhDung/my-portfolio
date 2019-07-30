import { Props as Skills } from '../../Commons/ProgressBars/type';

export type SingleInfo = {
  iconClassName: string,
  name: string,
  value: string,
};

export type AboutMeProps = {
  title: string,
  greeting: string,
  summary: string,
  basicInfo: Array<SingleInfo>,
  skills: Skills,
};
