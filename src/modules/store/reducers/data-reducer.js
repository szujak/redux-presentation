import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'

const initialState = {
  data: {},
  error: false,
  isFetching: false,
  dataFetched: false
}

export default function dataReducer (state = initialState, {data, type}) {
  switch (type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: {},
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data,
        isFetching: false
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false
      }
    default:
      return state
  }
}
