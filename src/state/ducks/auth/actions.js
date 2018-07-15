import * as types from './types';

export const doLogin = credentials => ({
  type: types.AUTH_REQUEST,
  credentials
});

export const doLogout = credentials => ({
  type: types.LOGOUT_REQUEST
});
