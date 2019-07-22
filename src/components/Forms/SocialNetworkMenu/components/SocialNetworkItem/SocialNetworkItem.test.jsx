import React from 'react';
import { shallow } from 'enzyme';
import facebookIconUrl from '../../../../../assets/images/facebook.png';
import SocialNetworkItem from './SocialNetworkItem';

const defaultProps = {
  url: 'https://www.facebook.com/minh.dung.391',
  iconUrl: facebookIconUrl,
};

describe('<SocialNetworkItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<SocialNetworkItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
