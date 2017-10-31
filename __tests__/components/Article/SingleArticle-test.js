import { createShallow } from 'material-ui/test-utils';

import SingleArticle from '../../../components/Article/SingleArticle';
import RelatedArticles from '../../../components/Article/RelatedArticles';
import mockArticle from './mockArticle.json';

describe('<MyComponent />', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });
  it('should work', () => {
    const wrapper = shallow(<SingleArticle article={mockArticle} relatedArticles={[]} />);
  });
});
