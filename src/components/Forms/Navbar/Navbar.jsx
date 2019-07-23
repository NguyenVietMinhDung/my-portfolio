// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Navbar.scss';
import type { NavbarProps } from './type';
import NavbarBrand from './components/NavbarBrand';
import NavbarMenu from './components/NavbarMenu';
import HamburgerButton from './components/HamburgerButton';

const Navbar = (props: NavbarProps) => {
  const {
    navbarItems,
    logoUrl,
    hamburgerIconUrl,
    closeIconUrl,
    activatedIndex,
    isVisible,
    activateNavigationItem,
    openNavigationMenu,
  } = props;
  return (
    <div styleName="nav">
      <div styleName="content">
        <NavbarBrand logoUrl={logoUrl} />
        <NavbarMenu
          isVisible={isVisible}
          items={navbarItems}
          activatedIndex={activatedIndex}
          activateNavigationItem={activateNavigationItem}
        />
        <HamburgerButton
          isVisible={isVisible}
          closeIconUrl={closeIconUrl}
          hamburgerIconUrl={hamburgerIconUrl}
          openNavigationMenu={openNavigationMenu}
        />
      </div>
    </div>
  );
};

export default CSSModules(Navbar, styles);
