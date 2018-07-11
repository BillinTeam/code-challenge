import { ARTICLES_QUERY, ARTICLE_CREATE, ARTICLE_UPDATE, ARTICLE_DELETE, ARTICLE_QUERY } from './article.queries';
import { graphqlRequest } from '../utils';


class ArticleService {

  getArticles() {
    return graphqlRequest(ARTICLES_QUERY);
  }
  getArticle(articleId) {
    return graphqlRequest(ARTICLE_QUERY, { articleId })
  }
  createArticle(article) {
    return graphqlRequest(ARTICLE_CREATE, { input: article })
  }
  deleteArticles(articleIds) {
    return graphqlRequest(ARTICLE_DELETE, { input: { articleIds: articleIds } })
  }
  updateArticle(article) {
    return graphqlRequest(ARTICLE_UPDATE, { input: article })
  }
}

export default ArticleService;