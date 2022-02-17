import { FC } from 'react'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { AppDispatch } from '@/store/'
import { IRootState, ITodoItem, TodoStateMap, TodoDispatchMap } from '@/store/types'
import { addItem, removeItem, itemStatusTransition } from '@/store/actions/todo'
import { thunkAddItem, thunkRemoveItem, thunkItemStatusTransition } from '@/store/actions/thunkTodo'
import { btAddItem, btRemoveItem, btItemStatusTransition } from '@/store/actions/batchThunkTodo'

export type rdxConnect = TodoStateMap & TodoDispatchMap

const mapStateToProps = (state: IRootState) => ({
  todo: state.todo
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  _addItem: (itemParams: ITodoItem) => dispatch(addItem(itemParams)),
  _removeItem: (id: number) => dispatch(removeItem(id)),
  _itemStatusTransition: (id: number) => dispatch(itemStatusTransition(id)),
  
})

const thunkDispatch = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  _addItem: (itemParams: ITodoItem) => dispatch(thunkAddItem(itemParams)),
  _removeItem: (id: number) => dispatch(thunkRemoveItem(id)),
  _itemStatusTransition: (id: number) => dispatch(thunkItemStatusTransition(id)),
})

const thunkBatchDispatch = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  _addItem: (itemParams: ITodoItem) => dispatch(btAddItem(itemParams)),
  _removeItem: (id: number) => dispatch(btRemoveItem(id)),
  _itemStatusTransition: (id: number) => dispatch(btItemStatusTransition(id)),
})

export const connectTo = (Component: FC<rdxConnect>) =>  connect(mapStateToProps, mapDispatchToProps)(Component)
export const connectThunkTo = (Component: FC<rdxConnect>) =>  connect(mapStateToProps, thunkDispatch)(Component)
export const connectBatchThunkTo = (Component: FC<rdxConnect>) =>  connect(mapStateToProps, thunkBatchDispatch)(Component)
