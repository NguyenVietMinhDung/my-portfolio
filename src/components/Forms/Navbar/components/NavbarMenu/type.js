export type navbarItem = {
  name: string,
  url: string,
};

export type NavbarMenuProps = {
  items: Array<navbarItem>,
  activatedIndex: number,
  isVisible: boolean,
  activateNavigationItem: Function,
};
