
import ProductCard from "../components/ProductCard"

function Home(props) {
    return (
        <div className='row'>
            {
                props.products.map((product) => {
                    return (
                        <ProductCard product={product} />
                    )
                })
            }
        </div>
    )
}

export default Home