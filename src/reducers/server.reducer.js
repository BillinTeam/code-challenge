/// action types

import { ARTICLE_ACTIONS, AUTH_ACTIONS, isApiRequest, isApiSuccess, isApiFailure } from '../actions';

const initState = {
  fetching: false,
  errors: null,
};

export default function (state = initState, action) {

  if (isApiRequest(action.type)) {
    state = { ...state, fetching: true };
  }
  else if (isApiSuccess(action.type)) {
    state = { ...state, fetching: false, errors: action.errors || null };
  }
  else if (isApiFailure(action.type)) {
    state = { ...state, fetching: false, errors: action.errors || null };
  }



  return state;
}
