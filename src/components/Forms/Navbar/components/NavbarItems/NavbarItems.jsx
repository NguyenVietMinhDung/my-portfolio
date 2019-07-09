// @flow
import React from 'react';
import type { NavbarItemsProps } from './type';
import NavbarItem from '../NavbarItem';

const isActive = (index, activatedIndex) => index === activatedIndex;

const NavbarItems = (props: NavbarItemsProps) => {
  const { items, activatedIndex, setActive } = props;
  return (
    <div className="nav-items">
      {items.map((item, index) => (
        <NavbarItem
          index={index}
          active={isActive(index, activatedIndex)}
          key={item.name}
          name={item.name}
          url={item.url}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default NavbarItems;
