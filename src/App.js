import './App.css';
import { useEffect, useState } from 'react';

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
      <div className='row'>
      {
          products.map((product) => {
            return (
              <div className='col-md-3' style={{ marginBottom: "10px" }}>
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="..." style={{width: "100%", height: "140px"}}  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text"> ${product.price}</p>
                    <button  className="btn btn-primary mx-2">View Details</button>
                    <button  className="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
