import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ meals, amounts, onAmountChange, onAdd }) {
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <TodoItem
          key={meal.id}
          meal={meal}
          amount={amounts[meal.id] || 1}
          onAmountChange={onAmountChange}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

