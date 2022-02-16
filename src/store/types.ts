/**
 * Enum to list all the possible status for a ToDo item.
 */
export enum ToDoStatus { PENDING, IN_PROGRESS, COMPLETED, FAILED }

/**
 * Interface for Todo item for IToDoState list.
 * @interface IToDoItem
 */
 export interface IToDoItem {
  id: number,
  title: string,
  description?: string
  status: ToDoStatus,
}

/**
 * Interface for Todo Reducer Initial State
 * @interface IToDoState
 */
 export interface IToDoState {
  filter: string,
  list: IToDoItem[]
}

/**
 * Interface for Root Reducer Initial State
 * @interface IRootState
 */
 export interface IRootState {
  todo: IToDoState,
}

/**
 * Interface to map state when connect occurs.
 * @interface ToDoStateMap
 */
export interface ToDoStateMap {
  todo: IToDoState,
}

/**
 * Interface to map state when connect occurs.
 * @interface ToDoStateMap
 */
export interface ToDoDispatchMap {
  _addItem: (itemParams: IToDoItem) => any,
  _removeItem: (id: number) => any,
}