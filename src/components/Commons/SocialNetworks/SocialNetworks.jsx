// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialNetworks.scss';
import type { SocialNetworksProps } from './type';
import SocialNetworkItem from './components/SocialNetworkItem/index';

const SocialNetworks = (props: SocialNetworksProps) => {
  const { items } = props;
  return (
    <ul styleName="social-networks">
      {items.map(item => (
        <SocialNetworkItem
          key={item.name}
          {...item}
        />
      ))}
    </ul>
  );
};

export default memo(CSSModules(SocialNetworks, styles));
