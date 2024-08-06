import { Link } from "react-router-dom";
import "../signin/signin.css";

const Signup = ()=>{
    return(
        <div className="signin">
            <form className="signin-form">
                <h1 className="sign-header">Sign in</h1>
                <div className="sign-div">
                    <label className="sign-label">Email</label>
                    <input type="email" className="sign-input"/>
                </div>

                <div className="sign-div">
                    <label className="sign-label">Pssword</label>
                    <input type="password" className="sign-input"/>
                </div>
                <button className="sign-btn"><Link to={"/"} className="sign-link">Sign in</Link></button>
            </form>
        </div>
    )
}
export default Signup;