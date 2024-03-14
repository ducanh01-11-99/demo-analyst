/**
 * ...
 */
import { call, takeLatest } from 'redux-saga/effects';
import { axiosGet } from 'utils/request';
import { CALL_API } from './constants';

export function* callApi() {
  const path = '/v1/topics';
  console.log('vao saga');
  try {
    const res = yield call(axiosGet, path);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(CALL_API, callApi);
}
