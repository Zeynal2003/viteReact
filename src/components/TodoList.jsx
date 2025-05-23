import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";

function TodoList() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
    setFilteredTasks(saved);
  }, []);

  useEffect(() => {
    let tempTasks = [...tasks];
    if (filterStatus !== "All") {
      tempTasks = tempTasks.filter((t) => t.status === filterStatus);
    }
    if (filterPriority !== "All") {
      tempTasks = tempTasks.filter((t) => t.priority === filterPriority);
    }
    setFilteredTasks(tempTasks);
  }, [filterStatus, filterPriority, tasks]);

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const handleEdit = (task) => {
    localStorage.setItem("editTask", JSON.stringify(task));
    navigate("/edit");
  };

  return (
    <div>
      <header className="header">
        <h2>Task Manager</h2>
        <button className="add-task-btn" onClick={() => navigate("/add")}>
          + Add New Task
        </button>
      </header>
      <div className="filters-container">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Statuses</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="todo-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              todo={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
