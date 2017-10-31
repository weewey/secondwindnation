import { getArticlesByCategories } from '../../model/cosmic';

describe('when user searches by categories', () => {
  const categoriesResponse = { category: 'Running' };
  it('should return articles of similar categories', () => {
    fetch.mockResponse(JSON.stringify({ categoriesResponse }));
    expect.assertions(1);
    return getArticlesByCategories('Running').then((result) => {
      expect(result).toBeTruthy();
    });
  },
  );
});
