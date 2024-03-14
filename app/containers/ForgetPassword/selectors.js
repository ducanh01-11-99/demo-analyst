/**
 * ...
 */

import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectConfig = state =>
  state[REDUX_KEY.forgetPassword] || initialState;

function selectLoading() {
  return createSelector(
    selectConfig,
    state => state.isLoading,
  );
}

export { selectLoading };
