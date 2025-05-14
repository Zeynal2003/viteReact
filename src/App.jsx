import React, { useState } from "react";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;