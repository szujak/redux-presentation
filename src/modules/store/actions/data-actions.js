import axios from 'axios'

import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'

export const getData = (payload) => ({
  type: FETCHING_DATA,
  payload
})

export const getDataSuccess = (payload) => ({
  type: FETCHING_DATA_SUCCESS,
  payload
})

export const getDataFailure = (payload) => ({
  type: FETCHING_DATA_FAILURE,
  payload
})

export const getAsyncUserData = (username) =>
  (dispatch) => {
    dispatch(getData(username))

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        dispatch(getDataSuccess(response.data))
      })
      .catch(error => {
        dispatch(getDataFailure(error))
      })
  }
