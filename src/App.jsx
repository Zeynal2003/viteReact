import React from "react";
// import AddTodo from "./components/AddTodo";
import AddTodo from "./components/AddTodo";
import TodoList from "./TodoList";
import "./styles.css";

function App() {<AddTodo />
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>🛍️ enior.az</h2>
        <nav>
          <ul>
            <li>📊 Dashboard</li>
            <li>👥 Customers</li>
            <li>📦 Products-List</li>
            <li>📈 Statistics</li>
            <li>📁 Product</li>
            <li>🛒 Basket</li>
            <li>💖 Wishlist</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="header">
          <img
            src="https://via.placeholder.com/40"
            alt="user"
            className="user-img"
          />
          <span>Surkhayli Shukur</span>
        </div>

        <h1>Dashboard</h1>

        <div className="cards">
          <TodoList />
        </div>

        <div className="chart-placeholder">
          📈 Qrafik yerində olacaq
        </div>
      </main>
    </div>
  );
}

export default App;