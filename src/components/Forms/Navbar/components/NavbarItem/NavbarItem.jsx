// @flow
import React from 'react';
import type { NavbarItemProps } from './type';

const getStyleClass = (index, activatedIndex) => (index === activatedIndex ? 'is-active' : '');

const activate = (activateNavigationItem, index) => () => activateNavigationItem(index);

const NavbarItem = (props: NavbarItemProps) => {
  const {
    index, name, url, activateNavigationItem, activatedIndex,
  } = props;
  return (
    <li className={`nav-item ${getStyleClass(index, activatedIndex)}`}>
      <a
        className="nav-item-font"
        href={url}
        onClick={activate(activateNavigationItem, index)}
      >
        {name}
      </a>
    </li>
  );
};

export default NavbarItem;
