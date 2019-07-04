import React from 'react';
import PropTypes from 'prop-types';

const NavbarBrand = (props) => {
  const { url } = props;
  return <img className="brand pointer" src={url} alt="" />;
};

NavbarBrand.propTypes = {
  url: PropTypes.string,
};

NavbarBrand.defaultProps = {
  url: '',
};

export default NavbarBrand;
