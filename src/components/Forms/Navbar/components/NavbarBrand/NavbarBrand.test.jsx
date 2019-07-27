import React from 'react';
import { shallow } from 'enzyme';
import logoUrl from '../../../../../assets/images/logo.png';
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
