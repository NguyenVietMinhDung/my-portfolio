import React from 'react';
import NavbarBrand from './components/NavbarBrand';
import NavbarItems from './components/NavbarItems';

export default () => (
  <div className="nav">
    <div className="nav-content">
      <NavbarBrand />
      <NavbarItems />
    </div>
  </div>
);
