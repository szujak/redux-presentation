import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'

export const getData = (username) => ({
  type: FETCHING_DATA
})

export const getDataSuccess = (payload) => ({
  type: FETCHING_DATA_SUCCESS,
  payload
})

export const getDataFailure = () => ({
  type: FETCHING_DATA_FAILURE
})
