/// action types

import { ARTICLE_ACTIONS, AUTH_ACTIONS, isApiRequest, isApiSuccess, isApiFailure } from './../actions';

const initState = {
  fetching: false,
  error: false,
  message: null
};

export default function (state = initState, action) {

  if (isApiRequest(action.type)) {
    return { ...state, fetching: true };
  }
  else if (isApiSuccess(action.type)) {
    return { ...state, fetching: false, errors: action.errors || null };
  }
  else if (isApiFailure(action.type)) {
    return { ...state, fetching: false, errors: action.errors || null };
  }

  return state;
}
