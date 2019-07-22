export type navbarItem = {
  name: string,
  url: string,
};

export type NavbarProps = {
  navbarItems: Array<navbarItem>,
  logoUrl: string,
  hamburgerIconUrl: string,
  closeIconUrl: string,
  activatedIndex: number,
  isVisible: boolean,
  activateNavigationItem: Function,
  openNavigationMenu: Function,
};
