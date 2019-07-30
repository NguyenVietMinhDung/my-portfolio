// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './NavbarBrand.scss';
import type { NavbarBrandProps } from './type';

const NavbarBrand = (props: NavbarBrandProps) => {
  const { logoUrl } = props;
  return (
    <img
      styleName="nav-brand"
      src={logoUrl}
      alt=""
    />
  );
};

export default memo<NavbarBrandProps>(CSSModules(NavbarBrand, styles));
