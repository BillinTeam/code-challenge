import { ARTICLE_ACTIONS } from "../actions";


export default function (state = null, action) {
  console.log('action',action,'state',state)
  switch (action.type) {
    case ARTICLE_ACTIONS.API_GET_ARTICLES_REQUEST:
      return state;
      case ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS:
      return action.articles;
      case ARTICLE_ACTIONS.API_GET_ARTICLES_FAILURE:
      return null;
    default:
      return state;
  }
}
