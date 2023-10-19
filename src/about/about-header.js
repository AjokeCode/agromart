import img from './Banner.png';
import './about-header.css'


const AboutHeader =()=>{
    return(
        <section className='about-header'>
            {/* <img src={img} alt='banner' className='about-header-img'/> */}
            <div className='about-header-heads'>
                <h1 className='about-header-head'>
                    About Us
                </h1>
                <p className='about-header-title'>
                    We are passionate about bridging the gaps between farmers and customers.
                    Join our team and help us connect farmer directly with customers.
                </p>
            </div>
        </section>
    )
}
export default AboutHeader;