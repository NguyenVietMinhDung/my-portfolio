import React from 'react';
import { shallow } from 'enzyme';
import NavbarItems from './NavbarItems';

const defaultProps = {
  items: [],
  activatedIndex: 0,
  setActive: jest.fn(),
};

describe('<NavbarItems />', () => {
  test('renders correctly', () => {
    const component = shallow(<NavbarItems {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
