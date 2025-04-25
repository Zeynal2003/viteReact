import React from "react";

export default function AddTodo({ meal, amount, onAmountChange, onAdd }) {
  return (
    <div className="actions">
      <input
        type="number"
        min="1"
        value={amount}
        onChange={(e) => onAmountChange(meal.id, e.target.value)}
      />
      <button onClick={() => onAdd(meal)}>+ Add</button>
    </div>
  );
}


