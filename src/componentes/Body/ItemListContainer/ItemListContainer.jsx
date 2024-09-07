import './ItemListContainer.css'
import ProductCart from '../Product/ProductCart/ProductCart'
function navBar({ gretting }) {

    return (
        <>
            <h3>{gretting}</h3>
            <ProductCart/>
            <h3>{gretting}</h3>
            <h3>{gretting}</h3>
            <h3>{gretting}</h3>
        </>
    )
}

export default navBar