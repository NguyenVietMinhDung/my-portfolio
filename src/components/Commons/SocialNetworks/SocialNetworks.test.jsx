import React from 'react';
import { shallow } from 'enzyme';
import { socialNetworks } from '../../../containers/App/initialData';
import SocialNetworks from './SocialNetworks';

const defaultProps = {
  items: socialNetworks,
};

describe('<SocialNetworks />', () => {
  test('renders correctly', () => {
    const component = shallow(<SocialNetworks {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
