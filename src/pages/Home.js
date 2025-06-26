import ProductBrowser from '../components/ProductBrowser';
import Cart from '../components/Cart';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <img src="/images/plugins.png" alt="Plugins Hero" className="hero-image" />
        {/* Lägg till detta block för text ovanpå bilden */}
        <div className="hero-content">
          <h1>Plugin store</h1>
          <p>audio-plugins.</p>
        </div>
      </div>

      <h1>Welcome to the plugin store</h1>
      <p>Here you can buy audio plugins.</p>

      <ProductBrowser />
      <Cart />
    </div>
  );
}