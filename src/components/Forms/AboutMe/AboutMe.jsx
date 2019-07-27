// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AboutMe.scss';
import type { AboutMeProps } from './type';
import ProgressBars from '../../Commons/ProgressBars';

const AboutMe = (props: AboutMeProps) => {
  const {
    title, greeting, summary, skills,
  } = props;
  return (
    <div
      styleName="about-me"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div styleName="title">{title}</div>
      <div styleName="content">
        <div styleName="introduction">
          <div styleName="greeting">{greeting}</div>
          <div>{summary}</div>
        </div>
        <div styleName="skills">
          <ProgressBars items={skills} />
        </div>
      </div>
    </div>
  );
};

export default memo(CSSModules(AboutMe, styles));
