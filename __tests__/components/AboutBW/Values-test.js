import React from 'react';
import renderer from 'react-test-renderer';

import Values from '../../../components/AboutBW/Values';

describe('Values component', () => {
  it('should render', () => {
    const value = renderer.create(<Values />,);
    const tree = value.toJSON();
    expect(tree).toMatchSnapshot();
  },
);
})
