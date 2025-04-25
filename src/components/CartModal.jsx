import React from "react";

export default function CartModal({ cart, onClose, onUpdateAmount }) {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

  return (
    <div className="modal-backdrop">
      <div className="modal updated-modal">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <div className="item-details">
                      <span className="price">${item.price.toFixed(2)}</span>
                      <span className="amount">x {item.amount}</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button onClick={() => onUpdateAmount(item.id, -1)}>-</button>
                    <button onClick={() => onUpdateAmount(item.id, 1)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <span>Total Amount</span>
              <span className="total-price">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="modal-actions">
              <button onClick={onClose}>Close</button>
              <button className="order-btn">Order</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
