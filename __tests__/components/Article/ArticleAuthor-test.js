import ArticleAuthor from '../../../components/Article/ArticleAuthor';

describe('ArticleAuthor Component', () => {
  const article = {
    'metadata.author.metadata.avatar.imgix_url': 'www.unsplash.com',
    'metadata.author.title': 'Yew Wee',
    'metadata.date': '24 Jan 2018',
  };

  it('should render the author name, avatar and article data', () => {
    const wrapper = shallow(<ArticleAuthor article={article} />);
    expect(wrapper.contains('Yew Wee')).toBe(true);
    expect(wrapper.contains('24 Jan 2018')).toBe(true);
  });
});
