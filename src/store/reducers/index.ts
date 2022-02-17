import { combineReducers } from 'redux'

import { IRootState } from '../types'
import todoReducer from './todo'

export default combineReducers<IRootState>({
  todo: todoReducer
})
