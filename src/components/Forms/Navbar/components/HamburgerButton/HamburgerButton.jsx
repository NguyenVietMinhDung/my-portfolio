// @flow
import React from 'react';
import { HamburgerButtonProps } from './type';

const getMenuIconUrl = (isVisible, closeIconUrl, hamburgerIconUrl) => (
  isVisible ? closeIconUrl : hamburgerIconUrl
);

const HamburgerButton = (props: HamburgerButtonProps) => {
  const {
    isVisible, closeIconUrl, hamburgerIconUrl, openNavigationMenu,
  } = props;
  return (
    <div className="hamburger-btn">
      <img
        className="hamburger-btn-size"
        src={getMenuIconUrl(isVisible, closeIconUrl, hamburgerIconUrl)}
        alt=""
        onClick={openNavigationMenu}
      />
    </div>
  );
};

export default HamburgerButton;
