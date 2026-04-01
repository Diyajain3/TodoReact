
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { addTodo, deleteTodo, getTodo } from './data';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  const [todos,setTodos]=useState([]);

  useEffect(()=>
  {
    const data=getTodo();
    setTodos(data);
  },[])
 
  const handleAdd=((text)=>
  {
    const newTodo={
      id:Date.now(),
      text: text,
      done: false,
    }
    addTodo(newTodo);
    setTodos(getTodo());
  })

   function handleDelete(id) {
    deleteTodo(id);
    setTodos(getTodo());
  }

  return (
    <>
      <h1>Todo App</h1>

      <AddTodo onAdd={handleAdd}></AddTodo>
      <TodoList todos={todos} onDelete={handleDelete}/>
    </>
  )
}

export default App
