function TodoItem({ todo, onDelete, onEdit }) {
  const assignedCount = todo.assignedTo.length || 0;
  const displayAssigned =
    assignedCount > 2
      ? `${assignedCount} users assigned`
      : todo.assignedTo.join(", ") || "No assigned users";

  return (
    <li className="todo-item">
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <span className="badge">{todo.priority}</span>
        <span className="status">{todo.status}</span>
        <div>
          <strong>Assigned to:</strong> {displayAssigned}
        </div>
      </div>
      <div>
        <button onClick={() => onEdit(todo)} style={{ backgroundColor: "#4e89ff", color: "white", marginRight: "8px" }}>
          Edit
        </button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;