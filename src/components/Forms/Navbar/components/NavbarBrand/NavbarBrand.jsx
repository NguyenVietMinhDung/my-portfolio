// @flow
import React from 'react';
import type { NavbarBrandProps } from './type';

const NavbarBrand = (props: NavbarBrandProps) => {
  const { logoUrl } = props;
  return <img className="brand pointer" src={logoUrl} alt="" />;
};

export default NavbarBrand;
