import axios from 'axios';
import Cookies from 'js-cookie';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { COOKIES } from './constants';
import { handleError } from './handleError';
import { logOut } from '../shared/commonFunction';

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  console.log('response', response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const instance = axios.create({
  baseURL: `${
    process.env.NODE_ENV === 'production'
      ? window.SystemConfig.API_URL
      : process.env.API_URL
  }/api`,
});

const refreshAuthLogic = failedRequest => {
  console.log('huynqn refresh token');
  if (Cookies.get(COOKIES.refreshToken) !== '') {
    return axios
      .post(
        `${
          process.env.NODE_ENV === 'production'
            ? window.SystemConfig.URL
            : process.env.URL
        }/Api/User/Refresh`,
        {
          refresh_token: Cookies.get(COOKIES.refreshToken),
        },
      )
      .then(tokenRefreshResponse => {
        Cookies.set(
          COOKIES.accessToken,
          tokenRefreshResponse.data.access_token,
        );
        Cookies.set(
          COOKIES.refreshToken,
          tokenRefreshResponse.data.refresh_token,
        );
        // eslint-disable-next-line no-param-reassign
        failedRequest.response.config.headers.Authorization = `Bearer ${
          tokenRefreshResponse.data.access_token
        }`;
        return Promise.resolve();
      })
      .catch(err => {
        console.log(err);
      });
  }
  return logOut();
};

createAuthRefreshInterceptor(instance, refreshAuthLogic);

instance.defaults.timeout = 25000;

instance.interceptors.request.use(req => {
  req.headers.Authorization = `Bearer ${Cookies.get(COOKIES.accessToken)}`;
  return req;
});

instance.interceptors.response.use(
  response => response,
  error => {
    const responseError = {
      ...error,
      response: {
        ...error.response,
      },
    };

    if (error.response) {
      handleError(error.response);
    }

    return responseError;
  },
);

export async function axiosGet(path, body) {
  // if (MOOK_DATA_GET[path].switch) return MOOK_DATA_GET[path];
  const res = await instance
    .get(path, body)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

export async function axiosPost(path, body) {
  // if (MOOK_DATA_POST[path].switch) return MOOK_DATA_POST[path];
  const res = await instance
    .post(path, body)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

export async function axiosDelete(path) {
  const res = await instance
    .delete(path)
    .then(checkStatus)
    .catch(error => {
      throw error;
    });
  return res;
}

export async function axiosPut(path, body) {
  const res = await instance
    .put(path, body)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}
