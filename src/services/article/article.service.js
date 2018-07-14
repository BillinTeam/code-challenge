import { ARTICLES_QUERY, ARTICLE_CREATE, ARTICLE_UPDATE, ARTICLE_DELETE, ARTICLE_QUERY, ARTICLE_LIST_FIELDS } from './article.queries';
import { graphqlRequest } from '../utils';


class ArticleService {

  getArticles(filters = {}) {
    
    return graphqlRequest(ARTICLES_QUERY(ARTICLE_LIST_FIELDS), {filters: filters});
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