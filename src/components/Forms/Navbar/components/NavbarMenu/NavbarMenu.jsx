// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './NavbarMenu.scss';
import type { NavbarMenuProps } from './type';
import NavbarItem from '../NavbarItem';

const getStyleClass = isVisible => (isVisible ? styles['is-visible'] : styles['is-invisible']);

const NavbarMenu = (props: NavbarMenuProps) => {
  const {
    items, activatedIndex, isVisible, activateNavigationItem,
  } = props;
  return (
    <div styleName="nav-menu">
      <ul className={classNames(styles.content, getStyleClass(isVisible))}>
        {items.map((item, index) => (
          <NavbarItem
            index={index}
            activatedIndex={activatedIndex}
            key={item.name}
            name={item.name}
            url={item.url}
            activateNavigationItem={activateNavigationItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default CSSModules(NavbarMenu, styles);
