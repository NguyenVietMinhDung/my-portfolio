import React from 'react';
import type { NavbarItemProps } from './type';

const getClassName = active => (active ? 'active' : '');

const NavbarItem = (props: NavbarItemProps) => {
  const {
    index, active, name, url, setActive,
  } = props;
  return (
    <div className={`nav-item ${getClassName(active)}`}>
      <a
        className="nav-item-font"
        href={url}
        onClick={() => setActive(index)}
      >
        {name}
      </a>
    </div>
  );
};

export default NavbarItem;
