import { Link } from "react-router-dom"



function ProductCard(props) {
    return (
        <div className='col-md-3' style={{ marginBottom: "10px" }}>
            <div className="card">
                <img src={props.product.image} className="card-img-top" alt="..." style={{ width: "100%", height: "140px" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text"> ${props.product.price}</p>
                    <Link to={"/products/" + props.product.id} className="btn btn-primary mx-2">View Details</Link>
                    <button onClick={ () => { props.addToCart(props.product) } } className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard