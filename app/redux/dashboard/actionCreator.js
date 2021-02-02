import {
  FIND_BY_SEARCH,
  GET_REPOS_FAILURE,
  GET_REPOS_START,
  GET_REPOS_SUCCESS,
  SET_QUERY_TITLE,
  SET_FILTER_BY_FORKS,
  SET_FILTER_BY_STARS,
  GET_REPOS_PER_PAGE,
  CLEAR_FILTER,
} from '../constants';

export const findRepos = () => ({
  type: FIND_BY_SEARCH,
});
export const filterByForks = () => ({
  type: SET_FILTER_BY_FORKS,
});
export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
export const addPerPageItems = () => ({
  type: GET_REPOS_PER_PAGE,
});
export const filterByStars = () => ({
  type: SET_FILTER_BY_STARS,
});
export const setTitle = (value) => ({
  type: SET_QUERY_TITLE,
  payload: value,
});

export const findReposStart = () => ({
  type: GET_REPOS_START,
});
export const findReposSuccess = (data) => ({
  type: GET_REPOS_SUCCESS,
  payload: data,
});
export const findReposFailure = (error) => ({
  type: GET_REPOS_FAILURE,
  payload: error,
});
