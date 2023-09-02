import './feature-section.css';
import img1 from './Connect.png';
import img2 from './Connect (1).png';
import img3 from './Connect (2).png';
import { Link } from 'react-router-dom';

const Feature =()=>{
    return(
        <section className='feature'>
            <div className='features feature-1'>
                <div className='feature-1-flex'>
                    <img src={img1} alt='img' className='feature-1-img'/>
                    <h1 className='feature-1-header'>Connecting farmers <br/> & Customers</h1>
                </div>
                <p className='feature-1-text'>
                    Shop with us for the freshiest, healthiest <br/> and most sustainable produces
                    directly <br/> from local farmers and enjoy the benefits <br/> of a healthy food system.
                </p>
                
                <Link className='feature-1-link'>Explore available products</Link>
                
            </div>
            <div className='features feature-2'>
            <div className='feature-1-flex'>
                    <img src={img2} alt='img' className='feature-1-img'/>
                    <h1 className='feature-1-header'>Experts Consultation <br/> for farmers </h1>
                </div>
                <p className='feature-1-text'>
                 Get expert advice and consultation <br/> services from our experienced <br/>
                 professionals to improve your farming <br/> practices and increase your profitability.
                </p>
                <Link className='feature-1-link'>Get expert consultation.</Link>
            </div>
            <div className='features feature-3'>
            <div className='feature-1-flex'>
                    <img src={img3} alt='img' className='feature-1-img'/>
                    <h1 className='feature-1-header'>Grow your farming <br/> business</h1>
                </div>
                <p className='feature-1-text'>
                   Partner with us to expand your <br/> customer base, rent farming <br/> equipment,
                and access resources to <br/> help you succeed.
                </p>
                    <Link className='feature-1-link'>Partner with us</Link>
            </div>
        </section>
    )
}
export default Feature;