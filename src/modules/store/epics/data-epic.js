import axios from 'axios'
import { Observable } from 'rxjs'

import { FETCHING_DATA } from '../constants'
import { getDataSuccess, getDataFailure } from '../actions/data-actions'

const featchData = (username) =>
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => getDataSuccess(response.data))
    .catch(response => getDataFailure(response.data))

export const appDataEpic = action$ => {
  return action$
    .ofType(FETCHING_DATA)
    .switchMap(action =>
      Observable.from(featchData(action.payload))
    )
}
