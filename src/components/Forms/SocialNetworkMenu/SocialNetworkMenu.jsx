// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialNetworkMenu.scss';
import type { SocialNetworkMenuProps } from './type';
import SocialNetwork from './components/SocialNetworkItem';

const SocialNetworkMenu = (props: SocialNetworkMenuProps) => {
  const { items } = props;
  return (
    <ul styleName="social-network-menu">
      {items.map(item => (
        <SocialNetwork
          key={item.name}
          url={item.url}
          iconUrl={item.iconUrl}
        />
      ))}
    </ul>
  );
};

export default CSSModules(SocialNetworkMenu, styles);
