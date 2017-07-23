export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export function articleQuery(id){
  return(`{
      article(id: "${id}") {
        author
        content
        published
        tags
        title
      }
    }`
  );
}
