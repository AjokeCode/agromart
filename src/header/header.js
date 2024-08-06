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
                <Link to={'/service'} className='header-link'>Services</Link> 
                </li>
                <li className="header-item">
                    <Link to={'/product'} className='header-link'>Products</Link>
                </li>
                <li className="header-item">
                    <Link to={'/cart'} className='header-link'>Cart</Link>
                </li>
                <li className="header-item header-btn btn-white">
                <Link to={'/signin'} className='header-link'>Sign in</Link>
                </li>
                <li className="header-item header-btn btn-green">
                <Link to={'/sign up'} className='header-link header-link-2'>Sign up</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;