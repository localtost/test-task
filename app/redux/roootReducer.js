import {combineReducers} from 'redux';
import reposState from './dashboard/reducer';
import authState from './auth/reducer';
export const root = combineReducers({
  reposState,
  authState,
});
