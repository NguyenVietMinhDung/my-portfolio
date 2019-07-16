// @flow
import React from 'react';
import type { AppProps } from './type';
import items from './initialData';
import logoUrl from '../../assets/images/logo.png';
import hamburgerIconUrl from '../../assets/images/hamburger-icon.png';
import closeIconUrl from '../../assets/images/close-icon.png';
import Navbar from '../../components/Forms/Navbar';

const App = (props: AppProps) => {
  const {
    activatedIndex, activateNavigationItem, openNavigationMenu, isVisible,
  } = props;
  return (
    <div className="container">
      <Navbar
        isVisible={isVisible}
        items={items}
        logoUrl={logoUrl}
        hamburgerIconUrl={hamburgerIconUrl}
        closeIconUrl={closeIconUrl}
        activatedIndex={activatedIndex}
        activateNavigationItem={activateNavigationItem}
        openNavigationMenu={openNavigationMenu}
      />
    </div>
  );
};

export default App;
