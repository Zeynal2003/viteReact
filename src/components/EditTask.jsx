import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditTask() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Low",
    assignedTo: []
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedTask = localStorage.getItem("editTask");
    if (savedTask) {
      setFormData(JSON.parse(savedTask));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updated = tasks.map((t) =>
      t.id === formData.id ? formData : t
    );
    localStorage.setItem("tasks", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Edit Task</h2>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default EditTask;