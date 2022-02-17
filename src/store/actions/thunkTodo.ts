import { Dispatch } from 'redux'

import * as types from '../actionTypes/todo'
import { ITodoItem, TodoStatus } from '../types'


/**
 * Add an item from the reducer list.
 * @param {ITodoItem} itemParams
 * @returns {Dispatch} ActionCreator
 */
export const thunkAddItem = (itemParams: ITodoItem) =>
  (dispatch: Dispatch) => 
    dispatch({ type: types.ADD_ITEM, payload: itemParams })

/**
 * Remove an item from the reducer list.
 * @param {number} id
 * @returns {Dispatch} ActionCreator
 */
export const thunkRemoveItem = (id: number) =>
  (dispatch: Dispatch) => 
    dispatch({ type: types.REMOVE_ITEM, payload: { id } })

/**
 * Remove an item from the reducer list.
 * @param {number} id
 * @returns {Dispatch} ActionCreator
 */
export const thunkItemStatusTransition = (id: number) =>
  (dispatch: Dispatch) => 
    dispatch({ type: types.UPDATE_STATUS, payload: { id, status: TodoStatus.IN_PROGRESS } })
