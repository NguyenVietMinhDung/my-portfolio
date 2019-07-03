import React from 'react';
import items from './NavbarItems.config';
import NavbarItem from '../NavbarItem';

const NavbarItems = () => (
  <div className="nav-items">
    {items.map((item, i) => (
      <NavbarItem
        index={i}
        key={item.name}
        name={item.name}
        url={item.url}
      />
    ))}
  </div>
);

export default NavbarItems;
