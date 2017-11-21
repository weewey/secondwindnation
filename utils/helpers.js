export default function filterArticle(article, relatedArticles) {
  return relatedArticles.objects.all.filter(relatedArticle => relatedArticle.slug !== article.slug);
}

export const filterDrafts = articles =>
  articles.objects.all.filter(article => article.status === 'draft');
