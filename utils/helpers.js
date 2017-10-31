export default function filterArticle(article, relatedArticles) {
  return relatedArticles.objects.all.filter(relatedArticle => relatedArticle.slug !== article.slug);
}
