/**
 * Enum to list all the possible status for a Todo item.
 */
export enum TodoStatus { PENDING, IN_PROGRESS, COMPLETED, FAILED }

/**
 * Interface for Todo item for ITodoState list.
 * @interface ITodoItem
 */
 export interface ITodoItem {
  id: number,
  title: string,
  description?: string
  status: TodoStatus,
}

/**
 * Interface for Todo Reducer Initial State
 * @interface ITodoState
 */
 export interface ITodoState {
  filter: string,
  list: ITodoItem[]
}

/**
 * Interface for Root Reducer Initial State
 * @interface IRootState
 */
 export interface IRootState {
  todo: ITodoState,
}

/**
 * Interface to map state when connect occurs.
 * @interface TodoStateMap
 */
export interface TodoStateMap {
  todo: ITodoState,
}

/**
 * Interface to map state when connect occurs.
 * @interface TodoStateMap
 */
export interface TodoDispatchMap {
  _addItem: (itemParams: ITodoItem) => any,
  _removeItem: (id: number) => any,
  _itemStatusTransition: (id: number) => any,
}