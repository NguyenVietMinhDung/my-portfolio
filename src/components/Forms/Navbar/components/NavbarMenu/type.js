import { Item } from '../../type';

export type NavbarMenuProps = {
  items: Array<Item>,
  activatedIndex: number,
  setActive: Function,
};
