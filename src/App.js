import './App.css';
import { useEffect, useState } from 'react';

import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";

// pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products').then((res) => {
      return res.json()
    }).then((data) => {
      setProducts(data);
      console.log(data);
    })

  }, []);


  return (
    <div className="container">
      <Header />

    <Routes>
        <Route path='/' element={<Home products={products} />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
    
    </div>
  );
}

export default App;
