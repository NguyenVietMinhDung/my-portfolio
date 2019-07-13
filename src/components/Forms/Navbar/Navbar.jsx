// @flow
import React from 'react';
import type { NavbarProps } from './type';
import NavbarBrand from './components/NavbarBrand';
import NavbarMenu from './components/NavbarMenu';
import HamburgerButton from './components/HamburgerButton';

const Navbar = (props: NavbarProps) => {
  const {
    items,
    logoUrl,
    hamburgerUrl,
    activatedIndex,
    isVisible,
    activateNavigationItem,
    openNavigationMenu,
  } = props;
  return (
    <div className="nav">
      <div className="nav-content">
        <NavbarBrand logoUrl={logoUrl} />
        <NavbarMenu
          isVisible={isVisible}
          items={items}
          activatedIndex={activatedIndex}
          activateNavigationItem={activateNavigationItem}
        />
        <HamburgerButton
          hamburgerUrl={hamburgerUrl}
          openNavigationMenu={openNavigationMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
