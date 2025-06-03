import '../styles/ProductBrowser.css';

const products = [
  { id: 1, name: 'SuperPlugin', price: 199 },
  { id: 2, name: 'MegaPlugin', price: 299 },
  { id: 3, name: 'UltraPlugin', price: 149 },
];

export default function ProductBrowser() {
  return (
    <section className="product-browser">
      <h2>Plugins</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price} kr</p>
            <button>Köp</button>
          </div>
        ))}
      </div>
    </section>
  );
}
