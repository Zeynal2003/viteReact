// import React, { useState } from "react";

// function AddTodo({ onAdd }) {
//   const [title, setTitle] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (title.trim() === "") return;
//     onAdd({ title });
//     setTitle("");
//   }

//   return (
//     <form className="add-todo" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter task"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default AddTodo;

import React, { useEffect, useState } from "react";

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("todo");
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    onAdd({
      title,
      description,
      priority,
      status,
      assignedTo: selectedUsers,
    });
    setTitle("");
    setDescription("");
    setPriority("medium");
    setStatus("todo");
    setSelectedUsers([]);
  }

  function handleUserChange(e) {
    const options = Array.from(e.target.selectedOptions);
    setSelectedUsers(options.map(option => option.value));
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description (max 200 chars)"
        maxLength="200"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select multiple value={selectedUsers} onChange={handleUserChange}>
        {users.map(user => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;