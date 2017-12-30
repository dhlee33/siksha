import { take, takeEvery,put, call, fork, select, all } from 'redux-saga/effects'

import { getMenuSuccess, getMenuFailure, rateSuccess,rateFailure } from "../actions";
import { GET_MENU_REQUEST,RATE_REQUEST } from "../actions";
import api from '../api/api'

export function* watchGetMenuRequest() {
  yield takeEvery(GET_MENU_REQUEST,getMenuRequest)
}

export function* getMenuRequest(action) {
  const response = yield call(api.getMenu)
  if (response.ok) {
    yield put(getMenuSuccess(response.data));
  } else {
    yield put(getMenuFailure());
  }
}

export function* watchRateRequest() {
  yield takeEvery(RATE_REQUEST,rateRequest)
}

export function* rateRequest(action) {
  const response = yield call(api.rate,action.rating,action.meal)
  if (response.ok) {
    const menuResponse = yield call(api.getMenu)
    if(menuResponse.ok) {
      yield put(getMenuSuccess(menuResponse.data));
      yield put(rateSuccess());
    }
    else{
      yield put(getMenuFailure());
      yield put(rateFailure());
    }

  } else {
    yield put(rateFailure());
  }
}
export default function* rootSaga() {
  yield [
    watchGetMenuRequest(),
      watchRateRequest()
    ]
}