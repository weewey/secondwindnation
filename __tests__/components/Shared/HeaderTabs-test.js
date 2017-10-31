import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import HeaderTabs from '../../../components/Shared/HeaderTabs';

describe('HeaderTabs', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it('should have 3 tabs, [Home, About, Contact]', () => {
    const wrapper = shallow(<HeaderTabs pathname="/" />);
    expect(wrapper.find('.CenteredTabs-tab-5')).toHaveLength(3);
    const texts = wrapper.find('.CenteredTabs-tab-5').map(node => node.prop('label'));
    expect(texts).toEqual(['Home', 'About', 'Contact']);
  });
});
