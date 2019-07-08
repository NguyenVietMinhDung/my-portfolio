import React from 'react';
import { shallow } from 'enzyme';
import NavbarItem from './NavbarItem';

const defaultProps = {
  index: 0,
  active: true,
  name: '',
  url: '#',
  setActive: null,
};

it('renders correctly', () => {
  const component = shallow(<NavbarItem {...defaultProps} />);
  expect(component).toMatchSnapshot();
});
