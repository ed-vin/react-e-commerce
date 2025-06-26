import React from 'react';
import ProductBrowser from '../components/ProductBrowser';
import Cart from '../components/Cart';  // import Cart component

export default function Products() {
  return (
    <div>
      <h2>Our products</h2>
      <p>This is our plugins</p>
      <ProductBrowser />
      <Cart />  {/* Render Cart component here */}
    </div>
  );
}