import ProductBrowser from '../components/ProductBrowser';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home">

        <h1>Welcome to the plugin store</h1>
        <p>Here you can buy audio plugins.</p>

        <ProductBrowser />
        
        </div>

    );
  }