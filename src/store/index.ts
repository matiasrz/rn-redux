import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import combinedReducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhacers = composeEnhancers(
  applyMiddleware(thunk)
)

export const store = createStore(combinedReducers, {}, composeEnhancers())
export const thunkStore = createStore(combinedReducers, {}, enhacers)

export type AppDispatch = typeof store.dispatch

