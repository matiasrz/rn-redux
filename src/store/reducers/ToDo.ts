import { Reducer } from 'redux'

import * as types from '../actionTypes/todo'
import { ITodoItem, ITodoState } from '../types'

const initialState: ITodoState = {
  filter: 'NONE',
  list: []
}

const toDoReducer: Reducer<ITodoState> = (state = initialState, { type, payload }) => {
  const { list } = state
  let newList: ITodoItem[]
  let itemIndex: number
  let item: ITodoItem

  switch (type) {
    case types.ADD_ITEM:
      newList = [...list]
      newList.push(payload)
      return { ...state, list: newList }

    case types.REMOVE_ITEM:
      newList = list.filter(({ id }) => id !== payload.id)
      return { ...state, list: newList }

    case types.UPDATE_STATUS:
      itemIndex = list.findIndex(({ id }) => id === payload.id)
      if (itemIndex === -1) return state

      item = list[itemIndex]
      item.status = payload.status
      newList = [...list]
      newList[itemIndex] = item
      return { ...state, list: newList }
    default:
      return state
  }
}

export default toDoReducer
