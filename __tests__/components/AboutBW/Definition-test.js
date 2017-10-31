import React from 'react';
import renderer from 'react-test-renderer';

import Definition from '../../../components/AboutBW/Definition';

describe('Definition component', () => {
  it('should render', () => {
    const definition = renderer.create(<Definition />,);
    const tree = definition.toJSON();
    expect(tree).toMatchSnapshot();
  },
);
});
