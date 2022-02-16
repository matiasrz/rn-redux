import { combineReducers } from 'redux'

import { IRootState } from '../types'
import toDoReducer from './ToDo'

export default combineReducers<IRootState>({
  todo: toDoReducer
})
