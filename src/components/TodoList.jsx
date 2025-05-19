import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
function TodoList() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);
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
    <div className="header">
  <h2>Task Manager</h2>
  <button className="add-task-btn" onClick={() => navigate("/add")}>
    + Add New Task
  </button>
  <ul>
    {tasks.map((task) => (
      <TodoItem key={task.id} todo={task} onDelete={handleDelete} onEdit={handleEdit} />
    ))}
  </ul>
</div>
  );
}
export default TodoList;


