import React from 'react';
import renderer from 'react-test-renderer';

import Team from '../../../components/AboutBW/Team';

describe('Team component', () => {
  it('should render', () => {
    const team = renderer.create(<Team />,);
    const tree = team.toJSON();
    expect(tree).toMatchSnapshot();
  },
);
})
