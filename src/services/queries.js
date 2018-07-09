export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_INSERT = (a) => (`mutation {
  createArticle(input: {
   title:"${a.title}",
   content: "${a.content}",
   author: "${a.author}",
   excerpt:"${a.excerpt}",
   tags:"${JSON.stringify(a.tags)}",
  }) {
   content
 }
}`);

export const ARTICLE_QUERY = `query Article($articleId: String) {
  article(id:$articleId){
    author
    excerpt
    id
    title
    content
  }
}`;
