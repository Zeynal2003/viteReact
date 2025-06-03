import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditTask() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    status: "Pending",
    priority: "Low",
    assignedTo: []
  });

  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedTask = localStorage.getItem("editTask");
    if (savedTask) {
      const parsed = JSON.parse(savedTask);
      setFormData(parsed);
      setSelectedUsers(parsed.assignedTo || []);
    }

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("İstifadəçilər yüklənə bilmədi:", err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedUsers(selected);
    setFormData((prev) => ({ ...prev, assignedTo: selected }));
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
      <div className="form-group">
        <label>Assign Users*</label>
        <select multiple value={selectedUsers} onChange={handleUserChange}>
          {users.map(user => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <p style={{ fontSize: "12px", color: "#555" }}>
          * Ctrl düyməsi ilə birdən çox istifadəçi seçə bilərsən
        </p>
      </div>

      <button onClick={handleSave} className="my-button">
        Save Changes
      </button>
    </div>
  );
}

export default EditTask;
