import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    
      <li>
        <span>{todo.text}</span>

        <button onClick={()=>onDelete(todo.id)}>Delete</button>
      </li>
    
  )
}

export default TodoItem

