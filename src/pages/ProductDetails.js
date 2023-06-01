
import { useParams } from "react-router-dom"

function ProductDetails() {
    const params = useParams();
    const productId = params.pid;

    return(
        <>
            view product details
        </>
    )
}

export default ProductDetails