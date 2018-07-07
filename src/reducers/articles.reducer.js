/// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";


export default function (state = null, action) {
  
  switch (action.type) {
    case API_CALL_REQUEST:
      return null;
    case API_CALL_SUCCESS:
      return action.articles;
    case API_CALL_FAILURE:
      return null;
    default:
      return state;
  }
}
