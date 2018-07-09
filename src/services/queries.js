
const ARTICLE_FIELDS_ALL = 'id, title, author, content, excerpt, tags, published';

export const ARTICLES_QUERY = `{ articles { author, excerpt, id, title} }`;

export const ARTICLE_CREATE = `($input: ArticleInput!){
  article: createArticle(input : $input) {
    ${ARTICLE_FIELDS_ALL}
  }
}`;
export const ARTICLE_UPDATE = `($input: ArticleInput!){
  article: updateArticle(input : $input) {
    ${ARTICLE_FIELDS_ALL}
  }
}`;

export const ARTICLE_DELETE = `($input: ArticleIdsInput!){
  articles: deleteArticles(input : $input) {
    ${ARTICLE_FIELDS_ALL}
  }
}`;

export const ARTICLE_QUERY = `query Article($articleId: String) {
    article(id:$articleId){
      ${ARTICLE_FIELDS_ALL}
    }
  }`;
