// @flow
import React from 'react';
import { HamburgerButtonProps } from './type';

const HamburgerButton = (props: HamburgerButtonProps) => {
  const { hamburgerUrl, openNavigationMenu } = props;
  return (
    <div className="hamburger-btn">
      <img
        className="hamburger-btn-size"
        src={hamburgerUrl}
        alt=""
        onClick={openNavigationMenu}
      />
    </div>
  );
};

export default HamburgerButton;
