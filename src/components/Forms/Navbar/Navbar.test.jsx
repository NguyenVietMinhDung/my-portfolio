import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

const defaultProps = {
  items: [],
  logoUrl: '',
  activatedIndex: 0,
  setActive: null,
};

it('renders correctly', () => {
  const component = shallow(<Navbar {...defaultProps} />);
  expect(component).toMatchSnapshot();
});
