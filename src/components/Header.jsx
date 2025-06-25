import { Link } from 'react-router-dom';
import '../styles/header.css';
import HeaderCart from '../components/HeaderCart';

export default function Header() {
  return (
    <header className="header" style={{ position: 'relative' }}>
      <h1>Plugin Store</h1>
      <nav>
        <Link to="/">Home</Link>       {/* Använd Link to="..." */}
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <HeaderCart />
    </header>
  );
}