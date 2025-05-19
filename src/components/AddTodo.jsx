import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AddTodo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("To Do");
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status,
      assignedTo: selectedUsers,
    };
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setStatus("To Do");
    setSelectedUsers([]);
    navigate("/");
  };
  const handleUserChange = (e) => {
    const options = Array.from(e.target.selectedOptions);
    setSelectedUsers(options.map(option => option.value));
  };
  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <h2>Create New Task</h2>
      <div className="form-group">
        <label>Title*</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={100}
          placeholder="Enter description"
        />
        <small>{description.length} / 100</small>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>Assign Users*</label>
        <select multiple value={selectedUsers} onChange={handleUserChange}>
          {users.map(user => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div className="btn-row">
        <button type="button" onClick={() => navigate("/")} className="cancel-btn">
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          Create Task
        </button>
      </div>
    </form>
  );
}
export default AddTodo;