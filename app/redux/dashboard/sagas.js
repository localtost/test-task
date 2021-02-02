import Axios from 'axios';
import {put, call, select} from 'redux-saga/effects';
import {
  findReposFailure,
  findReposStart,
  findReposSuccess,
} from '../dashboard/actionCreator';

const fetchData = async ({query, page, sortParams}) =>
  await Axios.get(
    `https://api.github.com/search/repositories?q=${query}&per_page=${page}&sort=${sortParams}`,
  );

function* getData() {
  yield put(findReposStart());
  const {query, page, sortParams} = yield select((state) => state.reposState);
  try {
    const response = yield call(fetchData, {query, page, sortParams});
    yield put(findReposSuccess(response?.data?.items));
  } catch (error) {
    yield put(findReposFailure(error));
  }
}
export default getData;
