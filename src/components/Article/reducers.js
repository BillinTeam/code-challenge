import {
  SET_ARTICLE
} from './actions'

const initialState = {
  article: undefined
};

export default function articles(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        ...action.article
      }
    default:
      return state;
  }
}