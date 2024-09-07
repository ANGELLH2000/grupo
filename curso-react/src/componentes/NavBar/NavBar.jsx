import './navBar.css';
import logo from '../../assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
import { IoIosSearch } from "react-icons/io";
function navBar() {

    return (
        <div className='fixed'>
            <nav>
                <div>
                    <img src={logo} alt="Logo de Dulce Tarta" />
                </div>
                <ul>
                    <li>
                        <a href="#">Tienda</a>
                        <span className='active'></span>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                        <span className='no-active'></span>
                    </li>
                    <span className='barra'></span>
                    <div className='icons-navbar'>
                        <IoIosSearch size={20} />
                        <CartWidget items="2" />
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default navBar