import React from 'react';
import { shallow } from 'enzyme';
import { socialNetworks } from '../../../containers/App/initialData';
import constants from '../../../constants';
import avatarUrl from '../../../assets/images/avatar.png';
import Header from './Header';

const {
  header: {
    HEADER_NAME,
    HEADER_DESCRIPTION,
    HEADER_BUTTON_TEXT,
  },
} = constants;

const defaultProps = {
  btnTxt: HEADER_BUTTON_TEXT,
  name: HEADER_NAME,
  description: HEADER_DESCRIPTION,
  socialNetworks,
  avatarUrl,
};

describe('<Header />', () => {
  test('renders correctly', () => {
    const component = shallow(<Header {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
