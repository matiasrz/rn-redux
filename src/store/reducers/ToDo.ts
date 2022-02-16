import { Reducer } from 'redux'

import * as types from '../actionTypes/ToDo'
import { IToDoItem, IToDoState } from '../types'

const initialState: IToDoState = {
  filter: 'NONE',
  list: []
}

const toDoReducer: Reducer<IToDoState> = (state = initialState, { type, payload }) => {
  const { list } = state
  let newList: IToDoItem[]

  switch (type) {
    case types.ADD_ITEM:
      newList = [...list]
      newList.push(payload)
      return { ...state, list: newList }

    case types.REMOVE_ITEM:
      newList = list.filter(({ id }) => id !== payload.id)
      return { ...state, list: newList }

    default:
      return state
  }
}

export default toDoReducer
