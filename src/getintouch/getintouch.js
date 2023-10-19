import './getintouch.css';
import img from './Feature.svg';
import { Link } from 'react-router-dom';

const GetInTouch = ()=>{
    const handleURL =(url)=>{
        window.open(url, '_blank')
    }
    return(
        <div className="git">
            <h1 className='git-header'>Contact us</h1>
            <h1 className='git-header-2'>Get in touch with us</h1>
            <h1 className='git-header-3'>Let us know if there is anything we can do for you</h1>
            <div className='git-grid'>
                <div className='git-grid-1'>
                    <img src={img} alt='img' className='git-grid-1-img'/>
                    <h1 className='git-grid-1-header'>
                        Email
                    </h1>
                    <h1 className='git-grid-1-header-2'>Leave us an Email</h1>
                    <Link className='git-link git-link-2'>Agromart@gmail.com</Link>
                </div>
                <div className='git-grid-1'>
                    <img src={img} alt='img' className='git-grid-1-img'/>
                    <h1 className='git-grid-1-header'>
                        Phone
                    </h1>
                    <h1 className='git-grid-1-header-2'>Give us a call during office hour</h1>
                    <p className='git-link git-link-2'>+2349039367997</p>
                </div>
                <div className='git-grid-1'>
                    <img src={img} alt='img' className='git-grid-1-img'/>
                    <h1 className='git-grid-1-header'>
                        Chat
                    </h1>
                    <h1 className='git-grid-1-header-2'>Use our live chat</h1>
                    <Link onClick={()=> handleURL('https://wa.me/2349039367997')} className='git-link git-link-3'>Start chat &rarr;</Link>
                </div>
                <div className='git-grid-1'>
                    <img src={img} alt='img' className='git-grid-1-img'/>
                    <h1 className='git-grid-1-header'>
                        Locations
                    </h1>
                    <h1 className='git-grid-1-header-2'>Come and see us Mon-Fri 9am-5pm</h1>
                    <p className='git-link git-link-2'>OAU farm, Ile-Ife.Osun state</p>
                </div>
            </div>
        </div>
    )
}
export default GetInTouch;