// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';
import type { Props } from './type';
import Button from '../../Commons/Button';
import SocialNetworks from '../../Commons/SocialNetworks';

const handleMouseEvent = isMouseMoveEvent => (event) => {
  const element = document.getElementById('header-bg');
  if (element) {
    const { style } = element;
    if (isMouseMoveEvent) {
      const { clientX, clientY } = event;
      style.setProperty('transform', `translate3d(${clientX * 0.02}px, ${clientY * 0.02}px, 0)`);
      return;
    }
    style.setProperty('transform', 'translate3d(0, 0, 0)');
  }
};

const Header = (props: Props) => {
  const {
    name, description, avatarUrl, btnTxt, socialNetworks,
  } = props;
  return (
    <div
      styleName="header"
      onMouseMove={handleMouseEvent(true)}
      onMouseOut={handleMouseEvent(false)}
    >
      <div
        id="header-bg"
        styleName="background"
      />
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
          <img
            src={avatarUrl}
            alt=""
          />
        </div>
      </div>
      <div styleName="social-networks">
        <SocialNetworks items={socialNetworks} />
      </div>
    </div>
  );
};

export default memo<Props>(CSSModules(Header, styles));
