// @flow
import React from 'react';
import { HamburgerButtonProps } from './type';

const HamburgerButton = (props: HamburgerButtonProps) => {
  const { hamburgerUrl } = props;
  return (
    <div className="hamburger-btn">
      <img className="hamburger-btn-size" src={hamburgerUrl} alt="" />
    </div>
  );
};

export default HamburgerButton;
