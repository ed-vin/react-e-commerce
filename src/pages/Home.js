import ProductBrowser from '../components/ProductBrowser';
import Cart from '../components/Cart';  // import Cart component
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the plugin store</h1>
      <p>Here you can buy audio plugins.</p>

      <ProductBrowser />
      <Cart />
    </div>
  );
}
