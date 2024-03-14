import Cookie from 'js-cookie';
import { COOKIES } from '../utils/constants';
import history from '../utils/history';

// Hàm format thời gian
export const formatDateTime = time => {
  const valueTime = new Date(time);
  const format = value => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  const data = `${format(valueTime.getDate())}-${format(
    valueTime.getMonth() + 1,
  )}-${format(valueTime.getFullYear())} ${format(
    valueTime.getHours(),
  )}:${format(valueTime.getMinutes())}`;
  return data;
};

/* Ham thuc hien logout */
export const logOut = () => {
  Cookie.remove(COOKIES.accessToken);
  Cookie.remove(COOKIES.userId);
  Cookie.remove(COOKIES.username);
  Cookie.remove(COOKIES.email);
  Cookie.remove(COOKIES.refreshToken);
  history.push('/');
};

// Hàm format thời gian
export const formatFullDateTime = (time, type) => {
  const valueTime = new Date(time);
  const format = value => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  if (type === 'DD/MM/YYYY HH:MM') {
    return `${format(valueTime.getDate())}/${format(
      valueTime.getMonth() + 1,
    )}/${format(valueTime.getFullYear())} ${format(
      valueTime.getHours(),
    )}:${format(valueTime.getMinutes())}`;
  }
  return `${format(valueTime.getDate())}/${format(
    valueTime.getMonth() + 1,
  )}/${format(valueTime.getFullYear())} ${format(
    valueTime.getHours(),
  )}:${format(valueTime.getMinutes())}:${valueTime.getSeconds()}`;
};
