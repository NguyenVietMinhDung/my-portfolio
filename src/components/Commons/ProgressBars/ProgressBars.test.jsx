import React from 'react';
import { shallow } from 'enzyme';
import { skills } from '../../../containers/App/initialData';
import ProgressBars from './ProgressBars';

const defaultProps = {
  items: skills,
};

describe('<ProgressBars />', () => {
  test('renders correctly', () => {
    const component = shallow(<ProgressBars {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
