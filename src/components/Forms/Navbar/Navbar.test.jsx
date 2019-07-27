import React from 'react';
import { shallow } from 'enzyme';
import { navbarItems } from '../../../containers/App/initialData';
import logoUrl from '../../../assets/images/logo.png';
import hamburgerIconUrl from '../../../assets/images/hamburger-icon.png';
import closeIconUrl from '../../../assets/images/close-icon.png';
import Navbar from './Navbar';

const defaultProps = {
  navbarItems,
  logoUrl,
  hamburgerIconUrl,
  closeIconUrl,
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
