
import ProductCard from "../components/ProductCard"

function Home(props) {
    return (
        <div className='row'>
            {
                props.products.map((product) => {
                    return (
                        <ProductCard addToCart={props.addToCart} product={product} key={product.id} />
                    )
                })
            }
        </div>
    )
}

export default Home