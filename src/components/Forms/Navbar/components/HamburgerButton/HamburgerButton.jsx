// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './HamburgerButton.scss';
import { HamburgerButtonProps } from './type';

const getMenuIconUrl = (isVisible, closeIconUrl, hamburgerIconUrl) => (
  isVisible ? closeIconUrl : hamburgerIconUrl
);

const HamburgerButton = (props: HamburgerButtonProps) => {
  const {
    isVisible, closeIconUrl, hamburgerIconUrl, openNavigationMenu,
  } = props;
  return (
    <div styleName="hamburger-btn">
      <img
        styleName="size"
        src={getMenuIconUrl(isVisible, closeIconUrl, hamburgerIconUrl)}
        alt=""
        onClick={openNavigationMenu}
      />
    </div>
  );
};

export default CSSModules(HamburgerButton, styles);
