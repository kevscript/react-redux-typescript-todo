export const CHANGE_TODO_INPUT = 'CHANGE_TODO_INPUT'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

type ChangeTodoInputAction = {
  type: typeof CHANGE_TODO_INPUT,
  payload: string
}

type AddTodoAction = {
  type: typeof ADD_TODO,
  payload: string
}

type RemoveTodoAction = {
  type: typeof REMOVE_TODO,
  payload: string
}

export type TodoActionTypes = ChangeTodoInputAction | AddTodoAction | RemoveTodoAction