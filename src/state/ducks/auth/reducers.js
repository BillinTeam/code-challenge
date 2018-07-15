import * as types from './types';


const authReducer = (state = null, action) => {

  switch (action.type) {
    case types.AUTH_REQUEST:
    case types.LOGOUT_REQUEST:
      return state;

    case types.AUTH_SUCCESS:
      return action.me;

    case types.LOGOUT_SUCCESS:
    case types.LOGOUT_FAILURE:
    case types.AUTH_FAILURE:
      return null;

    default:
      return state;
  }
}

export default authReducer;
