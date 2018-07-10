import { ARTICLES_QUERY, ARTICLE_CREATE, ARTICLE_UPDATE, ARTICLE_DELETE, ARTICLE_QUERY } from './article.queries';
import { doMutation, doQuery } from '../utils';


class ArticleService {

  getArticles() {
    return doQuery(ARTICLES_QUERY);
  }
  getArticle(articleId) {
    return doQuery(ARTICLE_QUERY, { articleId })
  }
  createArticle(article) {
    return doMutation(ARTICLE_CREATE, {input: article})
  }
  deleteArticles(articleIds) {
    return doMutation(ARTICLE_DELETE, {input: { articleIds: articleIds}})
  }
  updateArticle(article) {
    return doMutation(ARTICLE_UPDATE, {input: article})
  }
}

export default ArticleService;