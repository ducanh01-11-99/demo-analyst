import _ from 'lodash';

const USER = 'user';
const USER_BY_ID = 'userById';
const THEME = 'theme';
const IS_COLLAPSED_MENU = 'isCollapsedMenu';
const USER_PERMISSION = 'userPermission';
const PAGE_BY_PERMISSION = 'pageByPermission';
const LANG = 'lang';

export function setUser(user) {
  window.localStorage.setItem(USER, JSON.stringify(user));
}

export function setUserByID(user) {
  window.localStorage.setItem(USER_BY_ID, JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(window.localStorage.getItem(USER));
}

export function deleteUser() {
  return window.localStorage.removeItem(USER);
}

export function isCurrentUserAdmin() {
  const user = window.localStorage.getItem(USER);
  const userInfo = JSON.parse(user);
  return _.find(
    userInfo.userRoles,
    role => role.usergrouprolePK.userGroupId === 1,
  );
}

export function setTheme(code) {
  window.localStorage.setItem(THEME, JSON.stringify(code));
}

export function getTheme() {
  return JSON.parse(window.localStorage.getItem(THEME));
}

export function setIsCollapsedMenu(status) {
  window.localStorage.setItem(IS_COLLAPSED_MENU, JSON.stringify(status));
}

export function getIsCollapsedMenu() {
  return JSON.parse(window.localStorage.getItem(IS_COLLAPSED_MENU));
}

export function setUserPermission(userPermission) {
  window.localStorage.setItem(USER_PERMISSION, JSON.stringify(userPermission));
}

export function getUserPermission() {
  return JSON.parse(window.localStorage.getItem(USER_PERMISSION)) || {};
}

export function setPageByPermission(data) {
  window.localStorage.setItem(PAGE_BY_PERMISSION, JSON.stringify(data));
}

export function getPageByPermission() {
  return JSON.parse(window.localStorage.getItem(PAGE_BY_PERMISSION)) || {};
}

export function setLangLocalStorage(lang) {
  window.localStorage.setItem(LANG, JSON.stringify(lang));
}

export function getLangLocalStorage() {
  return JSON.parse(window.localStorage.getItem(LANG));
}
