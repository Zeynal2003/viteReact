// import React from "react";
// import TodoItem from "./TodoItem";

// function TodoList() {
//   const data = [
//     { id: 1, title: "1,995", subtitle: "Total sales", icon: "🛍️" },
//     { id: 2, title: "2,001", subtitle: "Daily visits", icon: "📶" },
//     { id: 3, title: "$2,632", subtitle: "Total income", icon: "💰" },
//     { id: 4, title: "1,711", subtitle: "Total orders", icon: "📦" },
//   ];

//   return (
//     <div className="todo-list">
//       {data.map((item) => (
//         <TodoItem key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }

// export default TodoList;

import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const data = [
    { id: 1, title: "1,995", subtitle: "Total sales", icon: "🛍️" },
    { id: 2, title: "2,001", subtitle: "Daily visits", icon: "📶" },
    { id: 3, title: "$2,632", subtitle: "Total income", icon: "💰" },
    { id: 4, title: "1,711", subtitle: "Total orders", icon: "📦" },
  ];

  return (
    <div className="todo-list">
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;




