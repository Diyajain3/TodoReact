import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSumbit} className="flex mb-4">
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo;