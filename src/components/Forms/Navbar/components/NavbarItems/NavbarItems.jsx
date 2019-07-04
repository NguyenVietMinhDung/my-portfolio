import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from '../NavbarItem';

const isActive = (index, activatedIndex) => index === activatedIndex;

const NavbarItems = (props) => {
  const { items, activatedIndex, setActive } = props;
  return (
    <div className="nav-items">
      {items.map((item, index) => (
        <NavbarItem
          index={index}
          active={isActive(index, activatedIndex)}
          key={item.name}
          name={item.name}
          url={item.url}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

NavbarItems.propTypes = {
  items: PropTypes.instanceOf(Array),
  activatedIndex: PropTypes.number,
  setActive: PropTypes.func,
};

NavbarItems.defaultProps = {
  items: [],
  activatedIndex: 0,
  setActive: null,
};

export default NavbarItems;
