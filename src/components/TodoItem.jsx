import React from "react";

function TodoItem({ item }) {
  return (
    <div className="card">
      <div className="icon">{item.icon}</div>
      <div className="info">
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
}

export default TodoItem;