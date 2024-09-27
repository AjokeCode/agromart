import img1 from "../cart/material-symbols_delete-outline-rounded (1).svg"
import { useCartStore } from "../store/cartstore";
import OrderSummary2 from "./ordersummary2";


const OrderSummary =()=>{
    const { cart, updateItemQuantity } = useCartStore((state) => ({
        cart: state.cart,
        updateItemQuantity: state.updateItemQuantity
    }))
    return(
        <div className="ordersummary">
            <h1>Order Summary</h1>
            {
                cart.map((item, index)=> (
                    <div className="os-div">
                        <img className="os-img" src={item.imgSrc} alt="img"/>
                        <div className="os-flex-1">
                            <h1 className="os-h1">{item.imgHeader}</h1>
                            <h1 className="os-h1">{item.price}</h1>
                        
                        <div className="os-flex-2">
                                <p onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="os-plus">+</p>
                                <p className="os-quantity">{item.quantity}</p>
                                <p onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="os-minus">-</p>
                        </div>
                        </div>
                        <img src={img1} alt="img" className="os-del"/>
                    </div>

                ))
            }
            <OrderSummary2/>
        </div>
    )
}
export default OrderSummary;