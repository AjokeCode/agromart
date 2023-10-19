import img1 from './BG.svg';
import img2 from './BG (1).svg';

import img4 from './Review.svg';
import './customer.css';


const Customer = ()=>{
    return(
        <div className="customer">
            <h1 className='customer-header'>Our Customers</h1>
            <h2 className='customer-header-2'>Don't just take our words</h2>
            <div className="customer-review">
                    <div className="customer-review-1">
                        <div className='customer-review-1-left'>
                        <img src={img1} alt='img' className='customer-review-1-img'/>
                        </div>
                            <div className='customer-review-1-right'>
                                <img src={img4} alt='img' className='customer-review-rate'/>
                                <p className='customer-review-1-text'>
                                    "The quality of the products is outstanding, everything arrives in fresh and in great 
                                    condition. I love that i can support local farmers while enjoying high quality products at 
                                    reasonable prices"
                                </p>
                                <h1 className='customer-review-1-name'>Jenny Wilson</h1>
                        </div>
                    </div>
                    <div className="customer-review-1">
                    <div className='customer-review-1-left'>
                        <img src={img2} alt='img' className='customer-review-1-img'/>
                        </div>
                        <div className='customer-review-1-right'>
                            <img src={img4} alt='img' className='customer-review-rate'/>
                            <p className='customer-review-1-text'>
                                "I recently tried out this website for the first time and i was blown away by the varieties of 
                                products available. I was able to find all of my favorite fruts and vegetables as 
                                well as some unique and hard to find item"
                            </p>
                            <h1 className='customer-review-1-name'>Davon lane</h1>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}
export default Customer;