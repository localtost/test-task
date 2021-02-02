import {
  GET_REPOS_START,
  GET_REPOS_FAILURE,
  GET_REPOS_SUCCESS,
  SET_QUERY_TITLE,
  SET_FILTER_BY_FORKS,
  SET_FILTER_BY_STARS,
  GET_REPOS_PER_PAGE,
  CLEAR_FILTER,
} from '../constants';
const initialState = {
  data: [],
  error: null,
  loading: false,
  page: 15,
  query: '',
  sortParams: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_REPOS_START:
      return {...state, loading: true};
    case GET_REPOS_SUCCESS:
      return {...state, loading: false, data: [...payload]};
    case GET_REPOS_FAILURE:
      return {...state, loading: false, error: payload};
    case GET_REPOS_PER_PAGE:
      return {...state, page: (state.page += 15)};
    case SET_QUERY_TITLE:
      return {...state, query: payload};
    case SET_FILTER_BY_STARS:
      return {...state, sortParams: 'stars'};
    case SET_FILTER_BY_FORKS:
      return {...state, sortParams: 'forks'};
    case CLEAR_FILTER:
      return {...state, sortParams: '', page: 15};
    default:
      return state;
  }
};
