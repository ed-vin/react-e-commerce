import '../styles/ProductBrowser.css';

const products = [
  { id: 1, name: 'compressor', price: 199, image: './images/compressor.png' },
  { id: 2, name: 'reverb', price: 299, image: '/images/reverb.png' },
  { id: 3, name: 'distortion', price: 149, image: '/images/distortion.png' },
];

export default function ProductBrowser() {
  return (
    <section className="product-browser">
      <h2>Plugins</h2>
      <div className="product-grid">
        {products.map(product => (
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

