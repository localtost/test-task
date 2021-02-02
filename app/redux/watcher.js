import {takeEvery, all} from 'redux-saga/effects';
import getUserDataByCode from './auth/sagas';
import {
  FIND_BY_SEARCH,
  SET_FILTER_BY_STARS,
  SET_FILTER_BY_FORKS,
  CLEAR_FILTER,
  LOGIN,
} from './constants';
import getData from './dashboard/sagas';

function* mySaga() {
  yield takeEvery(FIND_BY_SEARCH, getData);
}
function* filterByStars() {
  yield takeEvery(SET_FILTER_BY_STARS, getData);
}
function* filterByForks() {
  yield takeEvery(SET_FILTER_BY_FORKS, getData);
}
function* clearFilter() {
  yield takeEvery(CLEAR_FILTER, getData);
}
function* login() {
  yield takeEvery(LOGIN, getUserDataByCode);
}
export default function* rootSaga() {
  yield all([
    mySaga(),
    filterByForks(),
    filterByStars(),
    clearFilter(),
    login(),
  ]);
}
