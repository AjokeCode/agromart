import img from '../about/Banner.png';
import '../about/about-header.css';


const JoinUsHeader =()=>{
    return(
        <section className='about-header'>
            <img src={img} alt='banner' className='about-header-img'/>
            <div className='about-header-heads'>
                <h1 className='about-header-head'>
                    Join our Team 
                </h1>
                <p className='about-header-title'>
                   We are constantly looking for dedicated individuals who share <br/>
                   our passion for sustainable agriculture and local communities.<br/>
                   Fill the form below to join our team.
                </p>
            </div>
        </section>
    )
}
export default JoinUsHeader;