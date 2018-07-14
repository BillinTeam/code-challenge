
export const ARTICLE_FIELDS_ALL = 'id, title, author, content, excerpt, tags, published';
export const ARTICLE_LIST_FIELDS = 'id, title, author, excerpt, tags';

export const ARTICLES_QUERY = (fields = ARTICLE_FIELDS_ALL) => `query 
($filters: ArticleFilterInput!){
  articles(filters:$filters){
    ${fields}
  }
}`;

export const ARTICLE_CREATE = `mutation ($input: ArticleInput!){
  createArticle(input : $input) {
    article{
      ${ARTICLE_FIELDS_ALL}
    }
    articles{
      ${ARTICLE_FIELDS_ALL}
    }
  }
}`;
export const AVAILABLE_FILTERS = `{
  availableFilters{
    tags
    authors
  }
}`;
export const ARTICLE_UPDATE = `mutation ($input: ArticleInput!){
  updateArticle(input : $input) {
    article{
      ${ARTICLE_FIELDS_ALL}
    }
    articles{
      ${ARTICLE_FIELDS_ALL}
    }
  }
}`;

export const ARTICLE_DELETE = `mutation ($input: ArticleIdsInput!){
  deleteArticles(input : $input) {
    {
      ${ARTICLE_FIELDS_ALL}
    }
  }
}`;

export const ARTICLE_QUERY = `query Article($articleId: String) {
  article(id:$articleId){
      ${ARTICLE_FIELDS_ALL}
    }
  }`;
