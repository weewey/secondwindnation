import React from 'react';
import renderer from 'react-test-renderer';

import TypographyDesign from '../../../components/Home/TypographyDesign';

describe('Home Page', () => {
  it('should render', () => {
    const typo = renderer.create(
      <TypographyDesign />,
    );
    const tree = typo.toJSON();
    expect(tree).toMatchSnapshot();
  },
  );
});
