import { Link } from 'react-router-dom';
import './footer.css';

const Footer =()=>{
    return(
        <footer className="footer">
            <div className='footer-1'>
                <div className='footer-1-content-1'>
                <h1 className='footer-1-content-1-header'>Agromart</h1>
                <p className='footer-1-content-1-text'>
                    You are just one step ahead from <br/> revolutionizing the way 
                    you shop for <br/> fresh, locally sourced products with <br/> our online 
                    platforms that connects <br/> farmers directly to customers.
                </p>
                </div>
                <div className='footer-1-content-2'>
                    <h1 className='footer-1-content-2-header'>Links</h1>
                    <ul className='footer-1-content-2-list'>
                        <li className='footer-1-content-2-item'>Home</li>
                        <li className='footer-1-content-2-item'>About us</li>
                        <li className='footer-1-content-2-item'>Products</li>
                        <li className='footer-1-content-2-item'>Contact us</li>
                        <li className='footer-1-content-2-item'>
                            <Link className='footer-1-content-2-link' to={'/joinus'}>Join us</Link> </li>
                    </ul>
                </div>
                <div className='footer-1-content-3'>
                    <h1 className='footer-1-content-3-header'>Services</h1>
                    <p className='footer-1-content-3-text'>Partner with us </p>
                    <p className='footer-1-content-3-text'>Consultations </p>
                    <p className='footer-1-content-3-text'>Rent farm equipments</p>
                </div>
                <div className='footer-1-content-4'>
                    <h1 className='footer-1-content-4-header'>Subscribe to our newsletter</h1>
                    <p className='footer-1-content-4-text'>Be the first to know the latest farm trends</p>
                    <div className='footer-1-content-4-inputs'>
                        <input type='email' placeholder='Email Address' name='email' className='footer-1-content-4-input'/>
                        <button className='footer-1-content-4-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-2'>

            </div>
            <div className='footer-3'>
                <p className='footer-3-text'>&copy; 2022 Agromart All right reserved</p>
                <ul className='footer-3-list'>
                    <li className='footer-3-item'>
                        <Link className='footer-3-link'>Terms and conditions</Link>
                    </li>
                    <li className='footer-3-item'>
                        <Link className='footer-3-link'>Cookies</Link>
                    </li>
                    <li className='footer-3-item'>
                        <Link className='footer-3-link'>Privacy policy</Link>
                    </li>
                </ul>
            </div>

        </footer>
    )
}
export default Footer;