// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AboutMe.scss';
import type { Props } from './type';
import ProgressBars from '../../Commons/ProgressBars';

const AboutMe = (props: Props) => {
  const {
    title, greeting, summary, basicInfo, skills,
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
          <ul styleName="basic-info">
            {basicInfo.map(info => (
              <li
                key={info.name}
                styleName="info"
              >
                <i
                  styleName="info-icon"
                  className={info.iconClassName}
                />
                <div styleName="info-text">
                  <span>{info.name}:</span>
                  <span>&nbsp;{info.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div styleName="skills">
          <ProgressBars items={skills} />
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(CSSModules(AboutMe, styles));
