import { useState } from 'react';
import '../styles/ProductBrowser.css';

const products = [
  { id: 1, name: 'compressor', category: 'compressor', price: 199, image: './images/compressor.png' },
  { id: 2, name: 'reverb', category: 'reverb', price: 299, image: '/images/reverb.png' },
  { id: 3, name: 'distortion', category: 'distortion', price: 149, image: '/images/distortion.png' },
];

const categories = ['all', 'compressor', 'reverb', 'distortion'];

export default function ProductBrowser() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="product-browser">
      <h2>Plugins</h2>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.price} kr</p>
            <button>Buy</button>
          </div>
        ))}
      </div>
    </section>
  );
}
