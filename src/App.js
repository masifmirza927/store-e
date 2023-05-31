import './App.css';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Header from "./components/Header";

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

    


      <div className='row'>
      {
          products.map((product) => {
            return (
              <ProductCard product={product} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
