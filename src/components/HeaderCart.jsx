// src/components/HeaderCart.jsx
import React, { useState } from 'react';
import { useCart } from './CartContext';
import Cart from './Cart';
import '../styles/HeaderCart.css';

export default function HeaderCart() {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="header-cart" style={{ position: 'relative' }}>
      <button
        className="header-cart-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle cart"
      >
        🛒 {cartItems.length}
      </button>

      {/* Dropdown cart, only show if open */}
      {open && <Cart className="cart--dropdown" />}
    </div>
  );
}
