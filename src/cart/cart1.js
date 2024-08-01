import "./cart.css";
import Cartcheckout from "./cartcheckout";
import Cartlist from "./cartlist";


const Cart1 =()=>{
    return(
        <div className="cart">
            <Cartlist/>
            <Cartcheckout/>
        </div>
    )
}
export default Cart1;