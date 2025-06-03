import './styles/App.css';
import ProductCard from './components/ProductCard';

function App() {

  // import from './components/ProductCard.jsx'
  const plugins = [
    { id: 1, name: 'SuperPlugin', price: 199 },
    { id: 2, name: 'MegaPlugin', price: 299 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <main style={{ padding: '2rem' }}>
      <h1>Pluginshoppen</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {plugins.map(plugin => (
          <ProductCard key={plugin.id} name={plugin.name} price={plugin.price} />
        ))}
      </div>
    </main>
      </header>
    </div>
  );
}

export default App;
