import RelatedArticles from '../../../components/Article/RelatedArticles';

const testArticles = [{
  slug: 'testSlug',
  metadata: {
    header_image: {
      imgix_url: 'www.google.com',
    },
  },
  title: 'test article',
}];

describe('Related Articles', () => {
  const wrapper = mount(<RelatedArticles articles={testArticles} />);
  it('should have the props articles', () => {
    expect(wrapper.prop('articles')).toEqual(testArticles);
  });
  it('should render a gridlist of image', () => {
    const fullMount = mount(<RelatedArticles articles={testArticles} />)
    expect(fullMount.find('GridListTile')).toHaveLength(1);
  });
  it('should have href to the original article', () => {
    const fullMount = mount(<RelatedArticles articles={testArticles} />)
    expect(fullMount.find('a')).not.toBeNull();
  });
});
