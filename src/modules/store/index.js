import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import mySaga from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store
