import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importera routern
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Din startsida
import Products from './pages/Products'; // Dina nya sidkomponenter
import Contact from './pages/Contact';

function App() {
  return (
    <Router> {/* Wrapper för hela din applikation */}
      <div className="App">
        <Header /> {/* Headern visas alltid, oavsett sida */}
        <main> {/* En <main>-tagg är bra för huvud innehållet */}
          <Routes> {/* Här definierar du dina rutter */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            {/* Lägg till fler Route-komponenter för andra sidor du skapar */}
          </Routes>
        </main>
        <Footer /> {/* Footern visas alltid */}
      </div>
    </Router>
  );
}

export default App;