import React from 'react'
import { useState } from 'react'

const AddTodo = ({onAdd}) => {
  const [text,setText]=useState("");
  const handleSumbit=(e)=>
  {
    e.preventDefault();

    if(text==="") return;
    onAdd(text);
    setText("");
  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input 
        type="text" 
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        placeholder='Enter a new task'
        />
        <button type='Submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
