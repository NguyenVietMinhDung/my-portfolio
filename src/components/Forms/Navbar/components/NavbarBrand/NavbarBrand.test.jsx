import React from 'react';
import { shallow } from 'enzyme';
import NavbarBrand from './NavbarBrand';

const defaultProps = {
  url: '',
};

it('renders correctly', () => {
  const component = shallow(<NavbarBrand {...defaultProps} />);
  expect(component).toMatchSnapshot();
});
