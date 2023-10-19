import img1 from '../about/img2.png';
import '../about/about1.css';
import { Link } from 'react-router-dom';


const Joinus1 =()=>{
    return(
        <div className="about1">
            <div className='about1-left'>
            <img src={img1} alt='img1' className='about1-img'/>
            </div>
            <div className='about1-right'>
            <h1 className='about1-header about1-header1'>
                Our Mission
            </h1>
            <h1 className='about1-header about1-header2'>
                Creating a sustainable future
            </h1>
            <p className='about1-text about1-text1'>
                Agromart is on a misson to create a sustainable future,
                by connecting consumers to small scale farmers. We believe in the power of local
                food system to promote healthy eating, support rural communities and protect our environment.
            </p>
            <p className='about1-text about1-text2'>
                By using our platforms, 
                you are joining us in this mission and supporting a better food system for all.
            </p>
            <button className='about1-btn'>
                <Link className='about1-link'>
                Learn more
                </Link>
            </button>
            </div>
        </div>
    )
}

export default Joinus1;