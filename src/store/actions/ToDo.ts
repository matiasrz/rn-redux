import * as types from '../actionTypes/todo'
import { ITodoItem, TodoStatus } from '../types'

/**
 * Add an item from the reducer list.
 * @param {IToDoItem} itemParams 
 */
export const addItem = (itemParams: ITodoItem) => ({ type: types.ADD_ITEM, payload: itemParams })

/**
 * Remove an item from the reducer list.
 * @param {number} id
 */
export const removeItem = (id: number) => ({ type: types.REMOVE_ITEM, payload: { id } })

/**
 * Remove an item from the reducer list.
 * @param {number} id
 */
export const itemStatusTransition = (id: number) => (
  { type: types.UPDATE_STATUS, payload: { id, status: TodoStatus.IN_PROGRESS } }
)
