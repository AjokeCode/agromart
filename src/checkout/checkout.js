import ContactInfo from "./contactinfo"
import OrderSummary from "./ordersummary";
import "./checkout.css";
import Footer from "../footer/footer";
import Header from "../header/header";

const Checkout =()=>{
    return(
        <div className="checkout-bg">
        <h1 className="checkout-header">Checkout</h1>
        <div className="checkout">
            <ContactInfo/>
            <OrderSummary/>
        </div>
        <Footer/>
        </div>
    )
}
export default Checkout;