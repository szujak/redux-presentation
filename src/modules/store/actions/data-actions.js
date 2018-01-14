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
