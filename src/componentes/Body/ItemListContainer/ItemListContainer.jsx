import './ItemListContainer.css'
import ProductCart from '../Product/ProductCart/ProductCart'
function navBar({ gretting }) {
    return (
        <>
            <h3>{gretting}</h3>
            <div className='contenedor'>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </>
    )
}

export default navBar