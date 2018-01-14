import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware, compose } from 'redux'

import epics from './epics'
import reducers from './reducers'

const epicMiddleware = createEpicMiddleware(epics)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)
