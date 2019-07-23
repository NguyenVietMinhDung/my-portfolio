import { navbarItem } from '../../type';

export type NavbarMenuProps = {
  items: Array<navbarItem>,
  activatedIndex: number,
  isVisible: boolean,
  activateNavigationItem: Function,
};
