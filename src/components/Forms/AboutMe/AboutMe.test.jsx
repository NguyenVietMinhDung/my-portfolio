import React from 'react';
import { shallow } from 'enzyme';
import constants from '../../../constants';
import AboutMe from './AboutMe';

const {
  aboutMe: {
    ABOUT_ME_TITLE,
    ABOUT_ME_GREETING,
    ABOUT_ME_SUMMARY,
  },
} = constants;

const defaultProps = {
  title: ABOUT_ME_TITLE,
  greeting: ABOUT_ME_GREETING,
  summary: ABOUT_ME_SUMMARY,
};

describe('<AboutMe />', () => {
  test('renders correctly', () => {
    const component = shallow(<AboutMe {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
