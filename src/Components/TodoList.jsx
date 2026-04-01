import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onDelete}) => {
  return (
    
      <ul>
        {todos.map((todo)=>
        {
          return(
            <TodoItem
              key={todo.id}
              onDelete={onDelete}
              todo={todo}
            ></TodoItem>
          )
        })}
      </ul>
    
  )
}

export default TodoList
