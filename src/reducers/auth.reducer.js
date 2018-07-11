import { AUTH_ACTIONS } from "../actions";


export default function (state = null, action) {

  switch (action.type) {
    case AUTH_ACTIONS.API_AUTH_REQUEST:
    case AUTH_ACTIONS.API_LOGOUT_REQUEST:
      return state;

    case AUTH_ACTIONS.API_AUTH_SUCCESS:
      return action.me;

    case AUTH_ACTIONS.API_LOGOUT_SUCCESS:
    case AUTH_ACTIONS.API_LOGOUT_FAILURE:
    case AUTH_ACTIONS.API_AUTH_FAILURE:
      return null;

    default:
      return state;
  }
}
