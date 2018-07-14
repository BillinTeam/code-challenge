import { ARTICLE_ACTIONS } from "../actions";

const initState = {
  authors: [],
  tags: []
}

export default function (state = initState, action) {

  switch (action.type) {
    case ARTICLE_ACTIONS.API_GET_FILTERS_REQUEST:
      return state;

      case ARTICLE_ACTIONS.API_GET_FILTERS_SUCCESS:
      return action.availableFilters;

    case ARTICLE_ACTIONS.API_GET_FILTERS_FAILURE:
      return initState;

    default:
      return state;
  }
}
