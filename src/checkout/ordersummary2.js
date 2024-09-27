import { Link } from "react-router-dom";
import "./checkout.css"
import { useCartStore } from "../store/cartstore";

const OrderSummary2 =()=>{
    const { cartTotal } = useCartStore((state) => ({
        cartTotal: state.cartTotal
    }))
    const shippingCost = {cartTotal} >= 5000 ? 1000 : 2000;
    const tax = (`${cartTotal}` / 10) * 0.02;
    const totalCost = cartTotal + shippingCost + tax;
    return(
        
            <div className="os2-div">
                <div className="os2-flex">
                    <h1 className="os2-header">Subtotal</h1>
                    <p className="os2-text">#{cartTotal}</p>
                </div>
                <div className="os2-flex">
                    <h1 className="os2-header">Tax</h1>
                    <p className="os2-text">#{tax}</p>
                </div>
                <div className="os2-flex">
                    <h1 className="os2-header">Delivery fee</h1>
                    <p className="os2-text">#{shippingCost}
                    </p>
                </div>
                <div className="os2-flex">
                    <h1 className="os2-header">Total</h1>
                    <p className="os2-text">#{totalCost}</p>
                </div>
                <button className="os2-btn os2-btn-1"><Link className="os2-link">Payment</Link></button> 
            </div>
    )
}
export default OrderSummary2;