import React from 'react'

type TodoFormProps = {
  todoInputValue: string,
  todoInputChange: React.ChangeEventHandler<HTMLInputElement>,
  todoAddClick: React.MouseEventHandler<HTMLButtonElement>
}

const TodoForm: React.FC<TodoFormProps> = ({ todoInputValue, todoInputChange, todoAddClick }) => {
  return (
    <div>
      <input type="text" value={todoInputValue} onChange={todoInputChange}/>
      <button onClick={todoAddClick}>Add</button>
    </div>
  )
}

export default TodoForm