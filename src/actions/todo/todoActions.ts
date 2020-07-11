import { CHANGE_TODO_INPUT, ADD_TODO, REMOVE_TODO, TodoActionTypes } from './todoTypes'

export const changeTodoInput = (todoInputValue: string): TodoActionTypes => {
  return { type: CHANGE_TODO_INPUT, payload: todoInputValue }
}

export const addTodo = (todoInputValue: string): TodoActionTypes => {
  return { type: ADD_TODO, payload: todoInputValue }
}

export const removeTodo = (todoId: string): TodoActionTypes => {
  return { type: REMOVE_TODO, payload: todoId}
}