// @flow
import React from 'react';
import type { AppProps } from './type';
import navItems from './config';
import logoUrl from '../../assets/images/logo.png';
import Navbar from '../../components/Forms/Navbar';

const App = (props: AppProps) => {
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

export default App;
