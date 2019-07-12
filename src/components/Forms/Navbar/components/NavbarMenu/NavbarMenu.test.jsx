import React from 'react';
import { shallow } from 'enzyme';
import items from '../../../../../containers/App/initialData';
import NavbarItems from './NavbarMenu';

const defaultProps = {
  items,
  activatedIndex: 0,
  activateNavigationItem: jest.fn(),
};

describe('<NavbarItems />', () => {
  test('renders correctly', () => {
    const component = shallow(<NavbarItems {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
