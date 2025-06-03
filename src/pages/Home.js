import ProductBrowser from '../components/ProductBrowser';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home">

        <h1>Välkommen till Pluginshoppen</h1>
        <p>Det här är din rena startsida.</p>

        <ProductBrowser />
        
        </div>

    );
  }