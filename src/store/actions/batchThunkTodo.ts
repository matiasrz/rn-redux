import { Dispatch } from 'redux'
import { batchActions } from 'redux-batched-actions'

import * as types from '../actionTypes/todo'
import { ITodoItem, TodoStatus } from '../types'


/**
 * Add an item from the reducer list.
 * @param {ITodoItem} itemParams
 * @returns {Dispatch} ActionCreator
 */
export const btAddItem = (itemParams: ITodoItem) =>
  (dispatch: Dispatch) => 
    dispatch(batchActions([
      dispatch({ type: types.ADD_ITEM, payload: { ...itemParams, id: 1 } }),
      dispatch({ type: types.ADD_ITEM, payload: { ...itemParams, id: 2 } }),
      dispatch({ type: types.ADD_ITEM, payload: { ...itemParams, id: 3 } })
    ], types.BATCH_ADD_ITEM))

/**
 * Remove an item from the reducer list.
 * @param {number} id
 * @returns {Dispatch} ActionCreator
 */
export const btRemoveItem = (id: number) =>
  (dispatch: Dispatch) => 
    dispatch(batchActions([
      dispatch({ type: types.REMOVE_ITEM, payload: { id } })
    ], types.BATCH_REMOVE_ITEM))

/**
 * Remove an item from the reducer list.
 * @param {number} id
 * @returns {Dispatch} ActionCreator
 */
export const btItemStatusTransition = (id: number) =>
  (dispatch: Dispatch) => 
    dispatch(batchActions([
      dispatch({ type: types.UPDATE_STATUS, payload: { id, status: TodoStatus.IN_PROGRESS } }),
      dispatch({ type: types.UPDATE_STATUS, payload: { id, status: TodoStatus.COMPLETED } }),
    ], types.COMPLETE_ITEM))
