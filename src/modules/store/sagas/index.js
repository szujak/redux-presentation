import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { FETCHING_DATA } from '../constants'
import { getDataSuccess, getDataFailure } from '../actions/data-actions'

const featchData = (username) =>
  axios
    .get(`https://api.github.com/users/${username}`)

function * fetchUser (action) {
  try {
    const response = yield call(featchData, action.payload)

    yield put(getDataSuccess(response.data))
  } catch (e) {
    yield put(getDataFailure(e.data))
  }
}

function * mySaga () {
  yield takeLatest(FETCHING_DATA, fetchUser)
}

export default mySaga
