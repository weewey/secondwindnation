import React from 'react';
import renderer from 'react-test-renderer';

import Mission from '../../../components/AboutBW/Mission';

describe('Mission component', () => {
  it('should render', () => {
    const mission = renderer.create(<Mission />,);
    const tree = mission.toJSON();
    expect(tree).toMatchSnapshot();
  },
);
});
