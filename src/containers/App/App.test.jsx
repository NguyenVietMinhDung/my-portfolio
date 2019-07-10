import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const defaultProps = {
  activatedIndex: 0,
  activateNavigationItem: jest.fn(),
};

describe('<App />', () => {
  test('renders correctly', () => {
    const component = shallow(<App {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
