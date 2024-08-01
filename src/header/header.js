import './header.css';
import { Link } from 'react-router-dom';


const Header =()=>{
    return(
        <div className="header">
            <h1 className="header-title">Agromart</h1>
            <ul className="header-lists">
                <li className="header-item">
                    <Link to={'/'} className='header-link'>Home</Link>
                </li>
                <li className="header-item">
                <Link to={'/about'} className='header-link'>About Us</Link>
                </li>
                <li className="header-item">
                    Services
                </li>
                <li className="header-item">
                    <Link to={'/product'} className='header-link'>Products</Link>
                </li>
                <li className="header-item">
                    <Link to={'/cart'} className='header-link'>Cart</Link>
                </li>
                <li className="header-item header-btn btn-white">
                    Sign in 
                </li>
                <li className="header-item header-btn btn-green">
                    Sign up
                </li>
            </ul>
        </div>
    )
}
export default Header;