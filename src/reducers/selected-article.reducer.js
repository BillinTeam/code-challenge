import { ARTICLE_ACTIONS } from "../actions";

export default function (state = null, action) {

  switch (action.type) {
    case ARTICLE_ACTIONS.API_GET_ARTICLE_REQUEST:
      return state;

    case ARTICLE_ACTIONS.API_GET_ARTICLE_SUCCESS:
      console.log('fetched', action.article.title);
      return action.article;
      
    case ARTICLE_ACTIONS.API_GET_ARTICLE_FAILURE:
      return null;

    default:
      return state;
  }
}
