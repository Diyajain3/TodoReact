import { useState, useEffect } from 'react';
import './App.css';
import { addTodo, deleteTodo, getTodo } from './data';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const data = getTodo();
    setTodos(data);
  },[]);

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    }
    addTodo(newTodo);
    setTodos(getTodo());
  }

  const handleDelete = (id) => {
    deleteTodo(id);
    setTodos(getTodo());
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <AddTodo onAdd={handleAdd} />
        <TodoList todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;