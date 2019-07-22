import React from 'react';
import { shallow } from 'enzyme';
import { socialNetworks } from '../../../containers/App/initialData';
import SocialNetworkMenu from './SocialNetworkMenu';

const defaultProps = {
  items: socialNetworks,
};

describe('<SocialNetworkMenu />', () => {
  test('renders correctly', () => {
    const component = shallow(<SocialNetworkMenu {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
