// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AboutMe.scss';
import type { AboutMeProps } from './type';

const AboutMe = (props: AboutMeProps) => {
  const { title, greeting, summary } = props;
  return (
    <div styleName="about-me">
      <div styleName="content">
        <div styleName="title">{title}</div>
        <div styleName="greeting">{greeting}</div>
        <div>{summary}</div>
      </div>
    </div>
  );
};

export default CSSModules(AboutMe, styles);
