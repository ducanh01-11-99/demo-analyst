/**
 * ...
 */

import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectAccountManagement = state =>
  state[REDUX_KEY.accountManagement] || initialState;

function selectLoading() {
  return createSelector(
    selectAccountManagement,
    state => state.isLoading,
  );
}

export { selectLoading };
