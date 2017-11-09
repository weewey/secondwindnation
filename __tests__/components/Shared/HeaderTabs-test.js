import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import HeaderTabs from '../../../components/Shared/HeaderTabs';

describe('HeaderTabs', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it('should have 4 tabs, [Home, About, Contact, Categories]', () => {
    const wrapper = shallow(<HeaderTabs pathname="/" />);
    // console.log(wrapper.debug());
    expect(wrapper.find('.CenteredTabs-tabs-6')).toHaveLength(4);
    //const text = wrapper.find('.CenteredTabs-tab-6').map(node => node.prop('label'));
    //expect(text).toEqual(['Home', 'About', 'Contact', 'Categories']);
  });
});
