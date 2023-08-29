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
                    About Us
                </li>
                <li className="header-item">
                    Services
                </li>
                <li className="header-item">
                    Products
                </li>
                <li className="header-item">
                    Cart
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