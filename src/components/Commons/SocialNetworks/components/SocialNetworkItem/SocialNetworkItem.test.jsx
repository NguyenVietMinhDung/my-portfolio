import React from 'react';
import { shallow } from 'enzyme';
import { socialNetworks } from '../../../../../constants/header';
import SocialNetworkItem from './SocialNetworkItem';

const defaultProps = {
  url: socialNetworks[0].url,
  iconUrl: socialNetworks[0].iconUrl,
};

describe('<SocialNetworkItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<SocialNetworkItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
