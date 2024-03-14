import * as constants from './constants';

export function changeTheme(code) {
  return {
    type: constants.CHANGE_THEME,
    code,
  };
}

export function notifySuccess(message) {
  return {
    type: constants.NOTIFY_SUCCESS,
    message,
  };
}

export function notifyFail(message) {
  return {
    type: constants.NOTIFY_FAIL,
    message,
  };
}

export function notifyInfo(message) {
  return {
    type: constants.NOTIFY_INFO,
    message,
  };
}

export function notifyWarning(message) {
  return {
    type: constants.NOTIFY_WARNING,
    message,
  };
}

export function resetNotification() {
  return {
    type: constants.NOTIFY_RESET,
  };
}

export function showNotify(payload) {
  return {
    type: constants.SHOW_NOTIFY,
    payload,
  };
}

export function updateSlider(submenus) {
  return {
    type: constants.UPDATE_SLIDER,
    submenus,
  };
}

export function messageSuccess(message) {
  return {
    type: constants.MESSAGE_SUCCESS,
    message,
  };
}

export function messageFail(message) {
  return {
    type: constants.MESSAGE_FAIL,
    message,
  };
}

export function messageInfo(message) {
  return {
    type: constants.MESSAGE_INFO,
    message,
  };
}

export function messageWarning(message) {
  return {
    type: constants.MESSAGE_WARNING,
    message,
  };
}

export function messageOpen(message) {
  return {
    type: constants.MESSAGE_OPEN,
    message,
  };
}

export function messageLoading(message) {
  return {
    type: constants.MESSAGE_LOADING,
    message,
  };
}

export function messageReset() {
  return {
    type: constants.MESSAGE_RESET,
  };
}
