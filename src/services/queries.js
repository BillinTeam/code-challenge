export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;


export const ARTICLE_QUERY = (articleId) => (`{
  articles(id:"${articleId}"){
    author
    excerpt
    id
    title
    content
  }
}`);
