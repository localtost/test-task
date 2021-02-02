import {
  LOGIN,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
} from '../constants';

export const onLogin = (code) => ({
  type: LOGIN,
  payload: code,
});

export const onLoginStart = () => ({
  type: GET_USER_DATA_START,
});
export const onLoginSuccess = (data) => ({
  type: GET_USER_DATA_SUCCESS,
  payload: data,
});
export const onLoginFailure = () => ({
  type: GET_USER_DATA_FAILURE,
});
