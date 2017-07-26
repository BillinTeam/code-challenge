export const REMOVE_ARTICLE_FORM = 'REMOVE_ARTICLE_FORM'
export const SET_ARTICLE_FORM = 'SET_ARTICLE_FORM'
export const SET_INPUT = 'SET_INPUT'

export function removeArticleForm() {
  return {
    type: REMOVE_ARTICLE_FORM
  }
}

export function setArticleForm(article) {
  return {
    type: SET_ARTICLE_FORM,
    article
  }
}

export function setInput(name, value) {
  return {
    type: SET_INPUT,
    name,
    value
  }
}