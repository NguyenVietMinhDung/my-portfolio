// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './NavbarItem.scss';
import type { NavbarItemProps } from './type';

const getStyleClass = (index, activatedIndex) => (index === activatedIndex ? styles['is-active'] : '');

const activate = (activateNavigationItem, index) => () => activateNavigationItem(index);

const NavbarItem = (props: NavbarItemProps) => {
  const {
    index, name, url, activateNavigationItem, activatedIndex,
  } = props;
  return (
    <li className={classNames(styles['nav-item'], getStyleClass(index, activatedIndex))}>
      <a
        styleName="content"
        href={url}
        onClick={activate(activateNavigationItem, index)}
      >
        {name}
      </a>
    </li>
  );
};

export default memo<NavbarItemProps>(CSSModules(NavbarItem, styles));
