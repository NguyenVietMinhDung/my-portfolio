import React from 'react';
import { shallow } from 'enzyme';
import {
  NAME, DESCRIPTION, BUTTON_TEXT, socialNetworks, avatarUrl,
} from '../../../constants/header';
import Header from './Header';

const defaultProps = {
  btnTxt: BUTTON_TEXT,
  name: NAME,
  description: DESCRIPTION,
  socialNetworks,
  avatarUrl,
};

describe('<Header />', () => {
  test('renders correctly', () => {
    const component = shallow(<Header {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
