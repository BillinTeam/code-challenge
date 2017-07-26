export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export function articleQuery(id){
  return(
    `{
      article(id: "${id}") {
        id
        author
        content
        published
        tags
        title
      }
    }`
  );
}

export function createArticle(data){
  return(`
      mutation {
        createArticle(
          author: "${data.author}"
          content: "${data.content}"
          excerpt: "${data.excerpt}"
          published: ${data.published}
          tags: "${data.tags}"
          title: "${data.title}"
        ){
          id
        }
      }
    `
  );
}

export function deleteArticle(id){
  return(`
      mutation {
        deleteArticle(id: "${id}"){
          id
        }
      }
    `
  );
}

export function updateArticle(data){
  return(`
      mutation {
        updateArticle(
          id: "${data.id}"
          author: "${data.author}"
          content: "${data.content}"
          excerpt: "${data.excerpt}"
          published: ${data.published}
          tags: "${data.tags}"
          title: "${data.title}"
        ){
          id
        }
      }
    `
  );
}
