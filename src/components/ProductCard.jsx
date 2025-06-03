export default function ProductCard({ name, price }) {
    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
        <h2>{name}</h2>
        <p>{price} kr</p>
        <button>Köp</button>
      </div>
    );
  }
  