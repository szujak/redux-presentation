import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

export default () => createStore(
  reducers,
  window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
