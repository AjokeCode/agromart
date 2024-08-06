import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./cart.css";


const Cartcheckout =()=>{
        const {
            isEmpty,
            totalUniqueItems, 
            items,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart
    
        } = useCart();
        const shippingCost = {cartTotal} >= 5000 ? 1000 : 2000;
        const tax = (`${cartTotal}` / 10) * 0.02;
        const totalCost = cartTotal + shippingCost + tax;
    return(
        <div className="cc">
            <h1 className="cl-h1">Order Summary</h1>
            <div className="cc-div">
                <div className="cc-flex">
                    <h1 className="cc-header">Subtotal</h1>
                    <p className="cc-text">#{cartTotal}</p>
                </div>
                <div className="cc-flex">
                    <h1 className="cc-header">Tax</h1>
                    <p className="cc-text">#{tax}</p>
                </div>
                <div className="cc-flex">
                    <h1 className="cc-header">Delivery fee</h1>
                    <p className="cc-text">#{shippingCost}
                    </p>
                </div>
                <div className="cc-flex">
                    <h1 className="cc-header">Total</h1>
                    <p className="cc-text">#{totalCost}</p>
                </div>
                <div className="cc-flex cc-flex-1">
                    <button className="cc-btn"><Link to={"/checkout"} className="cc-link">Checkout</Link></button>
                    <button className="cc-btn cc-btn-1">Continue shopping</button>
                </div>
                
            </div>
        </div>
    )
}
export default Cartcheckout;