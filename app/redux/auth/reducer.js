import {
  LOGIN,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
} from '../constants';
const initialState = {
  auth: false,
  data: {},
  loading: false,
  code: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, code: payload};
    case GET_USER_DATA_START:
      return {...state, loading: true};
    case GET_USER_DATA_SUCCESS:
      return {...state, loading: false, data: {...payload}, auth: true};
    case GET_USER_DATA_FAILURE:
      return {...state, loading: false};
    default:
      return state;
  }
};
