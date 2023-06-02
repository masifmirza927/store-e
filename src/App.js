import './App.css';
import { useEffect, useState } from 'react';

import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";

// pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products').then((res) => {
      return res.json()
    }).then((data) => {
      setProducts(data);
    })

  }, []);


  const addToCart = (product) => {
      const newAr = [...cart, product];
      setCart(newAr);
  }

console.log(cart);

  return (
    <div className="container">
      <Header />

    <Routes>
        <Route path='/' element={<Home addToCart={addToCart} products={products} />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
  
    </div>
  );
}

export default App;
