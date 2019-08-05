// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Event.scss';
import { Props } from './type';
import utils from '../../../../../utils';

const Event = (props: Props) => {
  const {
    isCurrentRole, organization, role, startDate, endDate, description,
  } = props;
  const { date: { getDuration } } = utils;
  const duration = getDuration(isCurrentRole, startDate, endDate);
  return (
    <li
      styleName="event"
      data-aos="fade-up-left"
      data-aos-duration="2000"
    >
      <div styleName="organization">{organization}</div>
      <div styleName="role">{role}</div>
      <div styleName="duration">
        <i className="lni-calendar" />
        &nbsp;&nbsp;{duration}
      </div>
      <div>{description}</div>
    </li>
  );
};

export default memo<Props>(CSSModules(Event, styles));
