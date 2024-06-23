/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getProducts } from './config/api'
import Home from './components/Home';
import ProductList from './components/ProductList';
import Card from './components/Card';
import Header from './components/layout/Header';
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response.data);
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);
  return (
    <>
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
