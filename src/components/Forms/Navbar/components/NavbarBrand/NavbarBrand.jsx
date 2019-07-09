import React from 'react';
import type { NavbarBrandProps } from './type';

const NavbarBrand = (props: NavbarBrandProps) => {
  const { url } = props;
  return <img className="brand pointer" src={url} alt="" />;
};

export default NavbarBrand;
