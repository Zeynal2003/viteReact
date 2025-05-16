import React, { useState, useEffect } from "react";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import TodoList from "./components/TodoList";
// import EditTask from "./components/EditTask";
// import AddTodo from "./components/AddTodo";
// import "./App.css";

// function AppContent() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTodos(saved);
//   }, []);

//   const handleDelete = (id) => {
//     const updated = todos.filter((t) => t.id !== id);
//     setTodos(updated);
//     localStorage.setItem("tasks", JSON.stringify(updated));
//   };

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={<TodoList todos={todos} onDelete={handleDelete} />}
//       />
//       <Route path="/edit" element={<EditTask />} />
//       <Route path="/add" element={<AddTodo />} />
//     </Routes>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

