/**
 * ...
 */

import { RESET_REDUX } from './constants';

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}
