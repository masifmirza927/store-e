import './App.css';
import { useEffect, useState } from 'react';

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import CategoryProducts from './pages/CategoryProducts';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const notify = () => toast.success("Product added to cart");


  useEffect(() => {

    fetch('https://fakestoreapi.com/products').then((res) => {
      return res.json()
    }).then((data) => {
      setProducts(data);
    })

  }, []);


  const addToCart = (product) => {

    const productExist = cart.find((item) => {
      return item.id == product.id
    })

    if (productExist == undefined) {
      const newAr = [...cart, product];
      setCart(newAr);
      notify();
    }else {
      alert("this product is already in cart")
    }


  }

  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />

      <Header cart={cart} />

      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} products={products} />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/products/:category' element={<CategoryProducts />} />
      </Routes>

    </div>
  );
}

export default App;
