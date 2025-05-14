import React, { useState } from "react";

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") return;
    onAdd({ title });
    setTitle("");
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;