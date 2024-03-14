/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectGlobal = state => state.global || initialState;

export const selectRouter = state => state.router;

export const selectNotificationMessage = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.notificationMessage,
  );

export const selectNotificationType = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.notificationType,
  );

export const selectOpenedSubmenus = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.openedSubmenus,
  );

export const selectTheme = () =>
  createSelector(
    selectGlobal,
    globalState => ({ theme: globalState.theme, isTheme: globalState.isTheme }),
  );

export const selectMessage = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.message,
  );

export const selectMessageType = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.messageType,
  );
