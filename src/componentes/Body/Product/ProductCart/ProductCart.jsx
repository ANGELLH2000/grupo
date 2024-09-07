import {EtiquetaCart,ImagenCart,PrecioCart,BotonCart} from '../ComponetsCart/ComponetsCart';
import './ProductCart.css'
function ProductCart() {
    return (
        <div className='containerCart'>
            <EtiquetaCart tipo="dscto" texto="-21%"/>
            <ImagenCart src="" alt="Producto de la tienda"/>
            <p className='NombreProducto'>Lira Eirling</p>
            <PrecioCart precio="20,00" precioDcto="22,00"/>
            <BotonCart/>
        </div>
    )
}
export default ProductCart