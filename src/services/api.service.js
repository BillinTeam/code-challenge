import Lokka from 'lokka';
import Transport from 'lokka-transport-http';
import { ARTICLES_QUERY, ARTICLE_INSERT, ARTICLE_QUERY } from './queries';

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
  static postArticle(article) {
    return doMutation(ARTICLE_INSERT, article)
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