import { combineEpics } from 'redux-observable'

import { appDataEpic } from './data-epic'

export default combineEpics(
  appDataEpic
)
