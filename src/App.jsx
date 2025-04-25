import React, { useState } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import CartModal from "./components/CartModal";

const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
  { id: "m2", name: "Schnitzel", description: "A german specialty!", price: 16.5 },
  { id: "m3", name: "Barbecue Burger", description: "American, raw, meaty", price: 12.99 },
  { id: "m4", name: "Green Bowl", description: "Healthy...and green...", price: 18.99 },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [amounts, setAmounts] = useState({});
  const [showCart, setShowCart] = useState(false);

  const handleAmountChange = (id, value) => {
    setAmounts((prev) => ({ ...prev, [id]: +value }));
  };

  const addToCart = (meal) => {
    const amount = amounts[meal.id] || 1;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === meal.id);
      if (existing) {
        return prev.map((item) =>
          item.id === meal.id ? { ...item, amount: item.amount + amount } : item
        );
      }
      return [...prev, { ...meal, amount }];
    });
  };

  const updateItemAmount = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, amount: Math.max(1, item.amount + delta) } : item
        )
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="app">
      <header className="header">
        <h1>ReactMeals</h1>
        <button className="wishlist-btn" onClick={() => setShowCart(true)}>
          Your Cart <span className="cart-count">{totalItems}</span>
        </button>
      </header>

      <section className="summary">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals and enjoy a delicious
          lunch or dinner at home.
        </p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </section>

      <TodoList
        meals={DUMMY_MEALS}
        amounts={amounts}
        onAmountChange={handleAmountChange}
        onAdd={addToCart}
      />

      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateAmount={updateItemAmount}
        />
      )}
    </div>
  );
}

