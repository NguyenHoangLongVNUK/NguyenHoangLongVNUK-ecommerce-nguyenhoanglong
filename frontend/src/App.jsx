import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Card from './components/Card';
import Home from './components/Home';
import Product from './components/Product';
import Header from './components/layout/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css';
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
