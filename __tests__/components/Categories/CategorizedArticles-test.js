import React from 'react';
import renderer from 'react-test-renderer';
import CategorizedArticles from '../../../components/Categories/CategorizedArticles';

describe('CategorizedArticles component', () => {
  it('should render the container with children', () => {
    const CategorizedArticlesComponent = renderer.create(<CategorizedArticles />);
    const tree = CategorizedArticlesComponent.toJSON();
    expect(tree).toMatchSnapshot();
  },
  );
});
