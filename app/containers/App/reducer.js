import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  notificationMessage: '',
  message: '',
  messageType: 'info',
  notificationType: 'info',
  openedSubmenus: [],
  theme: 'light',
  isShowNotify: JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).userInfo.notificationEnable
    : 0,
  isTheme: true,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.NOTIFY_FAIL:
        draft.notificationMessage = action.message;
        draft.notificationType = 'error';
        break;
      case constants.NOTIFY_SUCCESS:
        draft.notificationMessage = action.message;
        draft.notificationType = 'success';
        break;
      case constants.NOTIFY_INFO:
        draft.notificationMessage = action.message;
        draft.notificationType = 'info';
        break;
      case constants.NOTIFY_WARNING:
        draft.notificationMessage = action.message;
        draft.notificationType = 'warning';
        break;
      case constants.NOTIFY_RESET:
        draft.notificationMessage = '';
        draft.notificationType = 'info';
        break;

      case constants.MESSAGE_FAIL:
        draft.message = action.message;
        draft.messageType = 'error';
        break;
      case constants.MESSAGE_SUCCESS:
        draft.message = action.message;
        draft.messageType = 'success';
        break;
      case constants.MESSAGE_INFO:
        draft.message = action.message;
        draft.messageType = 'info';
        break;
      case constants.MESSAGE_WARNING:
        draft.message = action.message;
        draft.messageType = 'warning';
        break;
      case constants.MESSAGE_OPEN:
        draft.message = action.message;
        draft.messageType = 'open';
        break;
      case constants.MESSAGE_RESET:
        draft.message = '';
        draft.messageType = 'info';
        break;
      case constants.MESSAGE_LOADING:
        draft.message = action.message;
        draft.messageType = 'loading';
        break;

      case constants.UPDATE_SLIDER:
        draft.openedSubmenus = action.submenus;
        draft.notificationType = 'info';
        break;
      case constants.CHANGE_THEME:
        draft.theme = action.code;
        break;
      case constants.SHOW_NOTIFY:
        draft.isShowNotify = action.payload;
        break;
      case '@@router/LOCATION_CHANGE': {
        const {
          location: { pathname },
        } = action.payload;
        if (
          pathname === '/dashboard' ||
          pathname.startsWith('/monitor-setting') ||
          pathname.startsWith('/processor-setting') ||
          pathname.startsWith('/category') ||
          pathname.startsWith('/system-administration') ||
          pathname.startsWith('/report') ||
          pathname.startsWith('/search') ||
          pathname.startsWith('/connection') ||
          pathname.startsWith('/timelapse')
        )
          draft.isTheme = true;
        else draft.isTheme = false;
        break;
      }
    }
  });

export default appReducer;
