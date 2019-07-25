// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';
import type { HeaderProps } from './type';
import Button from '../../Commons/Button';
import SocialNetworkMenu from '../SocialNetworkMenu';

const Header = (props: HeaderProps) => {
  const {
    name, description, avatarUrl, btnTxt, socialNetworks,
  } = props;
  return (
    <div styleName="header">
      <div styleName="content">
        <div styleName="introduction">
          <div styleName="sub-title">HELLO, I&apos;M</div>
          <div styleName="title">{name}</div>
          <div styleName="description">{description}</div>
          <Button
            text={btnTxt}
            handleClickEvent={() => null}
          />
        </div>
        <div styleName="avatar">
          <img src={avatarUrl} alt="" />
        </div>
      </div>
      <div styleName="social">
        <SocialNetworkMenu items={socialNetworks} />
      </div>
    </div>
  );
};

export default memo(CSSModules(Header, styles));
