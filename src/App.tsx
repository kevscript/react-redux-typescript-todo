import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './reducers'
import {
  changeTodoInput,
  addTodo,
  removeTodo,
} from './actions/todo/todoActions'
import TodoForm from './components/TodoForm'

const App: React.FC = () => {
  const todoInput = useSelector((state: RootState) => state.todo.todoInput)
  const todos = useSelector((state: RootState) => state.todo.todos)
  const dispatch = useDispatch()

  const todoInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeTodoInput(e.target.value))
  }

  const todoAddClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addTodo(todoInput))
  }

  const todoRemoveClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    const todoId = e.currentTarget.getAttribute('data-todoid')
    todoId && dispatch(removeTodo(todoId))
  }

  return (
    <div>
      <TodoForm
        todoInputValue={todoInput}
        todoInputChange={todoInputChange}
        todoAddClick={todoAddClick}
      />
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={todoRemoveClick} data-todoid={todo.id}>
              X
            </button>
          </li>
        ))}
    </div>
  )
}

export default App
