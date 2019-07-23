/* eslint-disable jsx-a11y/no-static-element-interactions */
// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.scss';
import type { ButtonProps } from './type';

const Button = (props: ButtonProps) => {
  const { text, handleClickEvent } = props;
  return (
    <div styleName="btn">
      <div
        styleName="content"
        onClick={handleClickEvent}
      >
        { text }
      </div>
    </div>
  );
};

export default CSSModules(Button, styles);
