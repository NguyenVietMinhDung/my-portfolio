import React from 'react';
import { shallow } from 'enzyme';
import { navbarItems } from '../../../../../containers/App/initialData';
import NavbarItems from './NavbarMenu';

const defaultProps = {
  items: navbarItems,
  activatedIndex: 0,
  isVisible: false,
  activateNavigationItem: jest.fn(),
};

describe('<NavbarItems />', () => {
  test('renders correctly', () => {
    const component = shallow(<NavbarItems {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  test('show navigation menu when clicking hamburger button', () => {
    const component = shallow(<NavbarItems {...defaultProps} isVisible />);
    expect(component.find('.is-visible').length).toEqual(1);
  });
});
