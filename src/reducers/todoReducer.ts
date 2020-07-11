import { TodoActionTypes, CHANGE_TODO_INPUT, ADD_TODO, REMOVE_TODO } from '../actions/todo/todoTypes'

export type TodoState = {
  todoInput: string,
  todos: {id: string, title: string}[]
}

const initialState = {
  todoInput: "",
  todos: []
}

const todoReducer = (state: TodoState = initialState, action: TodoActionTypes) => {
  switch(action.type) {
    case CHANGE_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }

    case ADD_TODO:
      const newTodo = { id: action.payload, title: action.payload }
      return {
        ...state,
        todoInput: "",
        todos: [...state.todos, newTodo]
      }

    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== action.payload)
      }

    default:
      return state
  }
}

export default todoReducer