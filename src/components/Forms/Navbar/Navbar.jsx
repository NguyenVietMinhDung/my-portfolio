import React from 'react';
import type { NavbarProps } from './type';
import NavbarBrand from './components/NavbarBrand';
import NavbarItems from './components/NavbarItems';

const Navbar = (props: NavbarProps) => {
  const {
    items, logoUrl, activatedIndex, setActive,
  } = props;
  return (
    <div className="nav">
      <div className="nav-content">
        <NavbarBrand url={logoUrl} />
        <NavbarItems
          items={items}
          activatedIndex={activatedIndex}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

export default Navbar;
