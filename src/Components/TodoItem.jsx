import React from 'react';
import { Trash } from "lucide-react";
const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-white p-2 rounded-md hover:bg-gray-200 transition">
      <span>{todo.text}</span>
      
      <button 
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition "
      >
        <Trash size={20}/>
      </button>
    </li>
  )
}

export default TodoItem;