import scrAlt from '../../../../assets/img-cart.png';
import './ComponetsCart.css'
function BotonCart() {
    return (
            <div className='BotonCart'>
                <p >Agregar</p>
            </div>
        )
}

function EtiquetaCart() {
    return (
        <div>
            EtiquetaCart
        </div>
    )
}

function PrecioCart({ precio, precioDcto }) {
    return (
        <div className='containderPrecio'>
            <p className='precioDcsto'>S/. {precioDcto}</p>
            <p className='precio'>S/. {precio}</p>
        </div>
    )
}
function ImagenCart({ src, alt }) {

    return (
        <div>
            <img src={src ? src : src = scrAlt} alt={alt} />
        </div>
    )
}

export { EtiquetaCart, ImagenCart, BotonCart, PrecioCart };