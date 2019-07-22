// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialNetworkItem.scss';
import type { SocialNetworkItemProps } from './type';

const SocialNetworkItem = (props: SocialNetworkItemProps) => {
  const { url, iconUrl } = props;
  return (
    <li>
      <a href={url}>
        <img styleName="social-network-item" src={iconUrl} alt="" />
      </a>
    </li>
  );
};

export default CSSModules(SocialNetworkItem, styles);
