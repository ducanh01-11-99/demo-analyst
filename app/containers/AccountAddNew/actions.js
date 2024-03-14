/**
 * ...
 */

import { CALL_API, RESET_REDUX } from './constants';

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function callApi() {
  return {
    type: CALL_API,
  };
}
