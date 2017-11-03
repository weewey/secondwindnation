import React from 'react';
import { shallow } from 'enzyme';
import { createShallow } from 'material-ui/test-utils';
import renderer from 'react-test-renderer';
import CategorizedArticles from '../../../components/Categories/CategorizedArticles';

describe('CategorizedArticles component', () => {
  it('should render the container with children',() => {
    const CategorizedArticles = renderer.create(<CategorizedArticles />,);
    const tree = About.toJSON();
    expect(tree).toMatchSnapshot();
  },
);
});
