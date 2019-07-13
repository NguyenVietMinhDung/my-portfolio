import React from 'react';
import { shallow } from 'enzyme';
import items from '../../../containers/App/initialData';
import Navbar from './Navbar';

const defaultProps = {
  items,
  logoUrl: '',
  hamburgerUrl: '',
  activatedIndex: 0,
  isVisible: false,
  activateNavigationItem: jest.fn(),
  openNavigationMenu: jest.fn(),
};

describe('<Navbar />', () => {
  test('renders correctly', () => {
    const component = shallow(<Navbar {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
