export type Item = {
  name: string,
  url: string,
};

export type NavbarProps = {
  items: Array<Item>,
  logoUrl: string,
  hamburgerIconUrl: string,
  closeIconUrl: string,
  activatedIndex: number,
  isVisible: boolean,
  activateNavigationItem: Function,
  openNavigationMenu: Function,
};
