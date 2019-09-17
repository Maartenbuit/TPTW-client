import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import reduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk)
)

const store = createStore(reducer, enhancer)

export default store