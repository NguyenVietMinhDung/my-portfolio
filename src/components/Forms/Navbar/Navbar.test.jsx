import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

const defaultProps = {
  items: [],
  logoUrl: '',
  hamburgerUrl: '',
  activatedIndex: 0,
  activateNavigationItem: jest.fn(),
};

describe('<Navbar />', () => {
  test('renders correctly', () => {
    const component = shallow(<Navbar {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
