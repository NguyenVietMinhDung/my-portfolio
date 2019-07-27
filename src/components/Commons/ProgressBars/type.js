export type ProgressBarItem = {
  itemId: string,
  name: string,
  value: number,
};

export type ProgressBarsProps = {
  items: Array<ProgressBarItem>,
};
