import { applyMiddleware, compose, createStore } from 'redux'
import { batchDispatchMiddleware } from 'redux-batched-actions'
import thunk from 'redux-thunk'

import combinedReducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const thunkEnhancer = composeEnhancers(applyMiddleware(thunk))
const batchThunkEnhancer = composeEnhancers(
  applyMiddleware(batchDispatchMiddleware),
  applyMiddleware(thunk)
)

export const store = createStore(combinedReducers, {}, composeEnhancers())
export const thunkStore = createStore(combinedReducers, {}, thunkEnhancer)
export const batchThunkStore = createStore(combinedReducers, {}, batchThunkEnhancer)

export type AppDispatch = typeof store.dispatch

