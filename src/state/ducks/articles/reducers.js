import * as types from './types';
import { combineReducers } from 'redux';

const INIT_STATE_FILTERS = {
  author: [],
  tags: []
};

export const articlesReducer = (state = null, action) => {

  switch (action.type) {
    case types.GET_ARTICLES_REQUEST:
      return state;

    case types.GET_ARTICLES_SUCCESS:
    case types.DELETE_ARTICLES_SUCCESS:
      return action.articles || [];

    case types.GET_ARTICLES_FAILURE:
      return [];

    default:
      return state;
  }
}

export const articleReducer = (state = null, action) => {

  switch (action.type) {
    case types.GET_ARTICLE_REQUEST:
      return state;

    case types.GET_ARTICLE_SUCCESS:
    case types.CREATE_ARTICLE_SUCCESS:
    case types.UPDATE_ARTICLE_SUCCESS:
      return action.article;

    case types.GET_ARTICLE_FAILURE:
      return null;

    default:
      return state;
  }
}


export const filtersReducer = (state = INIT_STATE_FILTERS, action) => {

  switch (action.type) {
    case types.GET_FILTERS_REQUEST:
      return state;

      case types.GET_FILTERS_SUCCESS:
      return action.filters;

    case types.GET_FILTERS_FAILURE:
      return state;

    default:
      return state;
  }
}


export default combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  filters: filtersReducer
});
