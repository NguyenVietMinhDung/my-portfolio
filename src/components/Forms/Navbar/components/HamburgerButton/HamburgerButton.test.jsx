import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import HamburgerButton from './HamburgerButton';

const defaultProps = {
  isVisible: false,
  closeIconUrl: '../../../assets/images/close-icon.png',
  hamburgerIconUrl: '../../../assets/images/hamburger-icon.png',
  openNavigationMenu: jest.fn(),
};

describe('<HamburgerButton />', () => {
  test('renders correctly', () => {
    const component = shallow(<HamburgerButton {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  test('handle click event', () => {
    const component = mount(<HamburgerButton {...defaultProps} isVisible />);
    component.find('img').simulate('click');
    expect(component.props().openNavigationMenu).toBeCalled();
  });
});
