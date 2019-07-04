import React from 'react';
import PropTypes from 'prop-types';

const getClassName = active => (active ? 'active' : '');

const NavbarItem = (props) => {
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

NavbarItem.propTypes = {
  index: PropTypes.number,
  active: PropTypes.bool,
  name: PropTypes.string,
  url: PropTypes.string,
  setActive: PropTypes.func,
};

NavbarItem.defaultProps = {
  index: 0,
  active: true,
  name: '',
  url: '#',
  setActive: null,
};

export default NavbarItem;
