import Footer from "../footer/footer";
import Payment from "./payment";
import Summary from "./summary";
import "./success.css";

const Success =()=>{
    return(
        <>
        <div className="success">
            <Payment/>
            <Summary/>
        </div>
        <Footer/>
        </>
    )
}
export default Success;