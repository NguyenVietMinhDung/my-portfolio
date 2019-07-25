import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import closeIconUrl from '../../../../../assets/images/close-icon.png';
import hamburgerIconUrl from '../../../../../assets/images/hamburger-icon.png';
import HamburgerButton from './HamburgerButton';

const defaultProps = {
  closeIconUrl,
  hamburgerIconUrl,
  openNavigationMenu: jest.fn(),
  isVisible: false,
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
