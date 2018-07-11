/// action types

import { ARTICLE_ACTIONS, AUTH_ACTIONS } from './../actions';

const initState = {
  fetching: false,
  error: false,
  message: null
};

export default function (state = initState, action) {

  switch (action.type) {
    case ARTICLE_ACTIONS.API_GET_ARTICLES_REQUEST:
    case ARTICLE_ACTIONS.API_GET_ARTICLE_REQUEST:
    case AUTH_ACTIONS.API_AUTH_REQUEST:
      return { ...state, fetching: true, error: false };


    case ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS:
    case ARTICLE_ACTIONS.API_GET_ARTICLE_SUCCESS:
    case AUTH_ACTIONS.API_AUTH_SUCCESS:
      return { ...state, fetching: false, error: false };

    case ARTICLE_ACTIONS.API_GET_ARTICLES_FAILURE:
    case ARTICLE_ACTIONS.API_GET_ARTICLE_FAILURE:
    case AUTH_ACTIONS.API_AUTH_FAILURE:
      return { ...state, fetching: false, error: action.error, message: action.error.message };

    default:
      return state;
  }
}
