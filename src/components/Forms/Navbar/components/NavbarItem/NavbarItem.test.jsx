import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import NavbarItem from './NavbarItem';

const defaultProps = {
  index: 0,
  active: false,
  name: 'Home',
  url: '#',
  setActive: jest.fn(),
};

describe('<NavbarItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<NavbarItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  test('activated after clicking', () => {
    const component = mount(<NavbarItem {...defaultProps} />);
    component.find('a').simulate('click');
    expect(component.props().setActive).toBeCalled();
  });
});
