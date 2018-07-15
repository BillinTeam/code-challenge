import * as types from './types';

export const selectArticle = articleId => ({
  type: types.GET_ARTICLE_REQUEST,
  meta: {
    async: true
  },
  articleId
})
export const fetchFilters = articleId => ({
  type: types.GET_FILTERS_REQUEST,
  meta: {
    async: true
  },
})

export const fetchArticles = (filters) => ({
  type: types.GET_ARTICLES_REQUEST,
  meta: {
    async: true
  },
  filters
})

export const createArticle = article => ({
  type: types.CREATE_ARTICLE_REQUEST,
  meta: {
    async: true
  },
  article
})

export const updateArticle = article => ({
  type: types.UPDATE_ARTICLE_REQUEST,
  meta: {
    async: true
  },
  article
})

export const deleteArticles = articleIds => ({
  type: types.DELETE_ARTICLES_REQUEST,
  meta: {
    async: true
  },
  articleIds
})