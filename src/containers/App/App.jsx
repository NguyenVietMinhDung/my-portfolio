// @flow
import React from 'react';
import type { AppProps } from './type';
import items from './initialData';
import logoUrl from '../../assets/images/logo.png';
import hamburgerUrl from '../../assets/images/hamburger.png';
import Navbar from '../../components/Forms/Navbar';

const App = (props: AppProps) => {
  const { activatedIndex, activateNavigationItem } = props;
  return (
    <div className="container">
      <Navbar
        items={items}
        logoUrl={logoUrl}
        hamburgerUrl={hamburgerUrl}
        activatedIndex={activatedIndex}
        activateNavigationItem={activateNavigationItem}
      />
    </div>
  );
};

export default App;
