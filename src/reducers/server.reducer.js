/// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initState = {
    fetching: false,
    error: false,
    message: null
};

export default function (state = initState, action) {
  
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: false};
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, error: false};
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: true, message: action.error, articles: null };
    default:
      return state;
  }
}
