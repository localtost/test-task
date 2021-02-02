import Axios from 'axios';
import {put, call, select} from 'redux-saga/effects';
import {urlWithCode, USER_URL} from '../../helpers/config';
import {onLoginFailure, onLoginStart, onLoginSuccess} from './actionCreators';

const fetchToken = async (code) => await Axios.post(urlWithCode(code));
const fetchUserData = async (token) =>
  await Axios.get(USER_URL, {headers: {Authorization: `Bearer ${token}`}});

function* getUserDataByCode() {
  const {code} = yield select((state) => state.authState);
  yield put(onLoginStart());
  try {
    const res = yield call(fetchToken, code);
    const token = res.data.replace(/([^&=]+)=/g, '').replace(/&.*/g, '');
    const data = yield call(fetchUserData, token);
    yield put(onLoginSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(onLoginFailure(error));
  }
}
export default getUserDataByCode;
