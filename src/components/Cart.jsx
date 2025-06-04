import React from 'react';
import { useCart } from './CartContext';
import '../styles/Cart.css';

export default function Cart({ className = '' }) {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Placeholder checkout function — later replace with real API call
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // For now, just alert success and clear the cart
    alert(`Thank you for your purchase! Total: ${total} kr`);
    clearCart();
  };

  return (
    <aside className={`cart ${className}`}>
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span className="item-info">{item.name} – {item.price} kr</span>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> {total} kr</p>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </aside>
  );
}
