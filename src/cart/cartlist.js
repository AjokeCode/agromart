import "./cart.css";
import { useCart } from "react-use-cart";
import img1 from "./material-symbols_delete-outline-rounded (1).svg";


const Cartlist =()=>{
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
    return(
        <div className="cl">
            <div className="cl-hs">
            <h1 className="cl-h1">Your order list</h1>
            <h1 className="cl-h2">{totalUniqueItems} items in the cart</h1>
            </div>
            <div className="cl-div">
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
                                <img src={img1} alt="img" onClick={() => removeItem(item.id)} className="cl-del"/>
                            </div>
                            <div className="cl-3-1">
                                <p onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="cl-3-1-1">+</p>
                                <p className="cl-3-1-2">{item.quantity}</p>
                                <p onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="cl-3-1-3">-</p>
                            </div>
                        </div>
                    </div>
                   )) 
                }
            </div>
        </div>
    )
}
export default Cartlist;