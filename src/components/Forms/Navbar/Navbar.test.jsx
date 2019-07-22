import React from 'react';
import { shallow } from 'enzyme';
import { navbarItems } from '../../../containers/App/initialData';
import Navbar from './Navbar';

const defaultProps = {
  navbarItems,
  logoUrl: '../../../assets/images/logo.png',
  hamburgerIconUrl: '../../../assets/images/hamburger-icon.png',
  closeIconUrl: '../../../assets/images/close-icon.png',
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
