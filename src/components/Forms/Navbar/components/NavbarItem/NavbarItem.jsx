// @flow
import React from 'react';
import type { NavbarItemProps } from './type';

const getClassName = (index, activatedIndex) => (index === activatedIndex ? 'active' : '');

const setActive = (activateNavigationItem, index) => () => activateNavigationItem(index);

const NavbarItem = (props: NavbarItemProps) => {
  const {
    index, name, url, activateNavigationItem, activatedIndex,
  } = props;
  return (
    <li className={`nav-item ${getClassName(index, activatedIndex)}`}>
      <a
        className="nav-item-font"
        href={url}
        onClick={setActive(activateNavigationItem, index)}
      >
        {name}
      </a>
    </li>
  );
};

export default NavbarItem;
