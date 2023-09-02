import img1 from './img2.png';
import './about2.css'
import { Link } from 'react-router-dom';


const About2 =()=>{
    return(
        <div className="about2">
            <div className='about2-right'>
            <h1 className='about2-header about2-header1'>
                Our Team
            </h1>
            <h1 className='about2-header about2-header2'>
                Meet our awesome team
            </h1>
            <p className='about2-text about2-text1'>
                We are passionate about bridgig the gap between farmers and consumers. Our team 
                is made up of professionals who are committed to creating a sustainable futures 
                from agriculture. From experts in farming techniques to marketing specialist, we have 
                the skills and experience needed to connect farmers with customers to help them succeed.
                We work closely with clients to understand their unique needs and goals, and we strived to deliver personalized 
                solutions that meet their expectations. Get to know us and discover how we can help you connects with the 
                right customers and grom your business.

            </p>
           
            <button className='about2-btn'>
                <Link className='about2-link'>
                Learn more
                </Link>
            </button>
            </div>
            <img src={img1} alt='img1' className='about2-img'/>
        </div>
    )
}

export default About2;