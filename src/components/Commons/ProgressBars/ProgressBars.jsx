// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProgressBars.scss';
import { ProgressBarsProps } from './type';
import ProgressBarItem from './components/ProgressBarItem';

const ProgressBars = (props: ProgressBarsProps) => {
  const { items } = props;
  return (
    <ul styleName="progress-bars">
      {items.map(item => (
        <ProgressBarItem
          key={item.itemId}
          {...item}
        />
      ))}
    </ul>
  );
};

export default memo(CSSModules(ProgressBars, styles));
