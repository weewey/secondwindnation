import { getArticlesByCategories, getDrafts } from '../../model/cosmic';

describe('when user searches by categories', () => {
  const categoriesResponse = { category: 'Running' };
  it('should return articles of similar categories', () => {
    fetch.mockResponseOnce(JSON.stringify({ categoriesResponse }));
    expect.assertions(1);
    return getArticlesByCategories('Running').then((result) => {
      expect(result).toBeTruthy();
    });
  },
  );
});

describe('when editors want to view drafts', function() {
  const draftPosts = { status: 'draft' };
  it('should return posts with status as draft', function() {
    fetch.mockResponseOnce(JSON.stringify({ draftPosts }));
    expect.assertions(1);
    return getDrafts().then((result) => {
      expect(result).toBeTruthy();
    });
  });
});

