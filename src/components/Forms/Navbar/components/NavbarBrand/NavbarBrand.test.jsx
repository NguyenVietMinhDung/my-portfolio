import React from 'react';
import { shallow } from 'enzyme';
import { logoUrl } from '../../../../../constants/navbar';
import NavbarBrand from './NavbarBrand';

const defaultProps = {
  logoUrl,
};

describe('<NavbarBrand />', () => {
  test('renders correctly', () => {
    const component = shallow(<NavbarBrand {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
