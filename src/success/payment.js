import { useCart } from "react-use-cart";
import img1 from"./Vector (17).svg";
import "../cart/cart.css";
import "./success.css";

const Payment =()=>{
    const {items, removeItem} = useCart();
    return(
        <div className="pay-div">
            <h1 className="pay-header">Payment is successful</h1>
            <img alt="img" src={img1} className="pay-img"/>
            <p className="pay-text">
            Your payment is successful. Your order #2994567 is confirmed and ready to be delivered.
            </p>
            <h1 className="pay-text">Order details</h1>
            {
                   items.map((item, index)=>(
                    <div className="cl-flex" key={index}>
                        <img src={item.imgSrc} alt="img" className="cl-1"/>
                        <div className="cl-2">
                            <h1 className="cl-2-1">{item.imgHeader}</h1>
                            <h1 className="cl-2-2">Origin: <span className="cl-span">{item.country}</span></h1>
                            <h1 className="cl-2-2">Description: <span className="cl-span">{`${item.description}`.substring(0, 16)}</span></h1>
                        </div>
                        <div className="cl-3">
                            <div className="cl-3-1">
                                <p className="cl-price">{item.price}</p>
                            </div>
                        </div>
                    </div>
                   )) 
                }
        </div>
    )
}
export default Payment;