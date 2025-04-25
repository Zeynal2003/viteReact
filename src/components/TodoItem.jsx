import React from "react";
import AddTodo from "./AddTodo";

export default function TodoItem({ meal, amount, onAmountChange, onAdd }) {
  return (
    <div className="meal-item">
      <div>
        <h2>{meal.name}</h2>
        <p>{meal.description}</p>
        <div className="price">${meal.price.toFixed(2)}</div>
      </div>
      <AddTodo
        meal={meal}
        amount={amount}
        onAmountChange={onAmountChange}
        onAdd={onAdd}
      />
    </div>
  );
}

