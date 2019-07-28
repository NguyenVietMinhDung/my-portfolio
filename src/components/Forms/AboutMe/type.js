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
};
