import React from 'react';
import { shallow } from 'enzyme';
import { skills } from '../../../../../containers/App/initialData';
import ProgressBarItem from './ProgressBarItem';

const defaultProps = {
  items: skills[0],
};

describe('<ProgressBarItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<ProgressBarItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
