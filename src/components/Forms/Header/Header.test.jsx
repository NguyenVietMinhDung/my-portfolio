import React from 'react';
import { shallow } from 'enzyme';
import { socialNetworks } from '../../../containers/App/initialData';
import Header from './Header';

const defaultProps = {
  socialNetworks,
  btnTxt: 'VIEW MY WORK',
  name: 'Dung Nguyen',
  description: 'A Freelance UI Designer & Web Developer',
  avatarUrl: '../../../assets/images/avatar.jpg',
};

describe('<Header />', () => {
  test('renders correctly', () => {
    const component = shallow(<Header {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
