import React from 'react';
import { shallow } from 'enzyme';
import HamburgerButton from './HamburgerButton';

const defaultProps = {
  hamburgerUrl: '',
};

describe('<HamburgerButton />', () => {
  test('renders correctly', () => {
    const component = shallow(<HamburgerButton {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
