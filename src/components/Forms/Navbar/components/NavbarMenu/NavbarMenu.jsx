// @flow
import React from 'react';
import type { NavbarMenuProps } from './type';
import NavbarItem from '../NavbarItem';

const getStyleClass = isVisible => (isVisible ? 'is-visible' : 'is-invisible');

const NavbarMenu = (props: NavbarMenuProps) => {
  const {
    items, activatedIndex, isVisible, activateNavigationItem,
  } = props;
  return (
    <div className="nav-menu">
      <ul className={`nav-menu-content ${getStyleClass(isVisible)}`}>
        {items.map((item, index) => (
          <NavbarItem
            index={index}
            activatedIndex={activatedIndex}
            key={item.name}
            name={item.name}
            url={item.url}
            activateNavigationItem={activateNavigationItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavbarMenu;
