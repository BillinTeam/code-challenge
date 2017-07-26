import {
  REMOVE_ARTICLE_FORM,
  SET_ARTICLE_FORM,
  SET_INPUT,
} from './actions'

const initialState = {
  author: '',
  content: '',
  excerpt: '',
  id: '',
  published: false,
  tags: [],
  title: '',
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case REMOVE_ARTICLE_FORM:
      return {
        ...initialState
      }
    case SET_ARTICLE_FORM:
      return {
        ...state,
        ...action.article
      }
    case SET_INPUT:
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state;
  }
}