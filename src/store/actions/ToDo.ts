import { Dispatch } from 'redux'

import * as types from '../actionTypes/ToDo'
import { IToDoItem } from '../types'

/**
 * Add an item from the reducer list.
 * @param {IToDoItem} itemParams 
 */
export const addItem = (itemParams: IToDoItem) => ({ type: types.ADD_ITEM, payload: itemParams })

/**
 * Remove an item from the reducer list.
 * @param {number} id
 */
export const removeItem = (id: number) => ({ type: types.ADD_ITEM, payload: { id } })

/**
 * Add an item from the reducer list.
 * @param {IToDoItem} itemParams
 * @returns {Dispatch} ActionCreator
 */
export const asyncAddItem = (itemParams: IToDoItem) =>
  (dispatch: Dispatch) => 
    dispatch({ type: types.ADD_ITEM, payload: itemParams })

/**
 * Remove an item from the reducer list.
 * @param {number} id
 * @returns {Dispatch} ActionCreator
 */
export const asyncRemoveItem = (id: number) =>
  (dispatch: Dispatch) => 
    dispatch({ type: types.ADD_ITEM, payload: { id } })
