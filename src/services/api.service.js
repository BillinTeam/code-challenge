import Lokka from 'lokka';
import Transport from 'lokka-transport-http';
import { ARTICLES_QUERY, ARTICLE_CREATE, ARTICLE_UPDATE, ARTICLE_DELETE, ARTICLE_QUERY } from './queries';

const client = new Lokka({
  transport: new Transport('http://localhost:4000/graphql')
});

class ApiService {
  
  static getArticles() {
    return doQuery(ARTICLES_QUERY)
  }
  static getArticle(articleId) {
    return doQuery(ARTICLE_QUERY, { articleId })
  }
  static createArticle(article) {
    return doMutation(ARTICLE_CREATE, {input: article})
  }
  static deleteArticles(articleIds) {
    return doMutation(ARTICLE_DELETE, {input: { articleIds: articleIds}})
  }
  static updateArticle(article) {
    return doMutation(ARTICLE_UPDATE, {input: article})
  }
}

/* Private functions */
function doQuery(query, vars = null) {
  return new Promise((resolve, reject) => {
    return client.query(query, vars)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}
function doMutation(query, vars = null) {
  return new Promise((resolve, reject) => {
    return client.mutate(query, vars)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default ApiService;