import '../styles/header.css';
import HeaderCart from '../components/HeaderCart';

export default function Header() {
  return (
    <header className="header" style={{ position: 'relative' }}>
      <h1>Plugin Store</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>

      <HeaderCart />
    </header>
  );
}
