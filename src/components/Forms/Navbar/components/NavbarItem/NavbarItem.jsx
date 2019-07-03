import React from 'react';
import PropTypes from 'prop-types';
import setActivatedNavigationItem from '../../../../../actions';
import store from '../../../../../store';

const onClick = index => store.dispatch(setActivatedNavigationItem(index));

const isActive = index => (store.getState().index === index ? 'active' : '');

const NavbarItem = ({ name, url, index }) => (
  <div className={`nav-item ${isActive(index)}`}>
    <a
      className="nav-item-font"
      href={url}
      onClick={() => onClick(index)}
    >
      {name}
    </a>
  </div>
);

NavbarItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
};

NavbarItem.defaultProps = {
  index: 0,
  name: '',
  url: '#',
};

export default NavbarItem;
