import React from 'react';
import PropTypes from 'prop-types';
import navItems from './App.config';
import logoUrl from '../../assets/images/logo.png';
import Navbar from '../../components/Forms/Navbar';

const App = (props) => {
  const { activatedIndex, activateNavigationItem } = props;
  return (
    <div className="container">
      <Navbar
        items={navItems}
        logoUrl={logoUrl}
        activatedIndex={activatedIndex}
        setActive={activateNavigationItem}
      />
    </div>
  );
};

App.propTypes = {
  activatedIndex: PropTypes.number,
  activateNavigationItem: PropTypes.func,
};

App.defaultProps = {
  activatedIndex: 0,
  activateNavigationItem: null,
};

export default App;
