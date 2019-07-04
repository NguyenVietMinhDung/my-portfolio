import React from 'react';
import PropTypes from 'prop-types';
import NavbarBrand from './components/NavbarBrand';
import NavbarItems from './components/NavbarItems';

const Navbar = (props) => {
  const {
    items, logoUrl, activatedIndex, setActive,
  } = props;
  return (
    <div className="nav">
      <div className="nav-content">
        <NavbarBrand url={logoUrl} />
        <NavbarItems
          items={items}
          activatedIndex={activatedIndex}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  items: PropTypes.instanceOf(Array),
  logoUrl: PropTypes.string,
  activatedIndex: PropTypes.number,
  setActive: PropTypes.func,
};

Navbar.defaultProps = {
  items: [],
  logoUrl: '',
  activatedIndex: 0,
  setActive: null,
};

export default Navbar;
