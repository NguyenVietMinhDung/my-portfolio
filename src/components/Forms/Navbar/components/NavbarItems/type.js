import { Item } from '../../type';

export type NavbarItemsProps = {
  items: Array<Item>,
  activatedIndex: number,
  setActive: Function,
};
