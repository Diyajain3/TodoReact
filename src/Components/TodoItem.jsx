import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition">
      <span>{todo.text}</span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem;