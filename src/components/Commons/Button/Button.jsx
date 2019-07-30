/* eslint-disable jsx-a11y/no-static-element-interactions */
// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.scss';
import type { ButtonProps } from './type';

const Button = (props: ButtonProps) => {
  const { text, handleClickEvent } = props;
  return (
    <div
      styleName="btn"
      onClick={handleClickEvent}
    >
      { text }
    </div>
  );
};

export default memo<ButtonProps>(CSSModules(Button, styles));
