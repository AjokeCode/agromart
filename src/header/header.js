import "./header.css";
import { Link } from "react-router-dom";
import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="header">
      <h1 className="header-title">Agromart</h1>
      <ul className="header-lists">
        <li className="header-item">
          <Link to={"/"} className="header-link">
            Home
          </Link>
        </li>
        <li className="header-item">
          <Link to={"/about"} className="header-link">
            About Us
          </Link>
        </li>
        <li className="header-item">
          <Link to={"/service"} className="header-link">
            Services
          </Link>
        </li>
        <li className="header-item">
          <Link to={"/product"} className="header-link">
            Products
          </Link>
        </li>
        <li className="header-item">
          <Link to={"/cart"} className="header-link">
            Cart
          </Link>
        </li>
        <li className="header-item header-btn btn-white">
          <Link to={"/signin"} className="header-link">
            Sign in
          </Link>
        </li>
        <li className="header-item header-btn btn-green">
          <Link to={"/sign up"} className="header-link header-link-2">
            Sign up
          </Link>
        </li>
      </ul>

      {!click ? (
        <BsListNested
          className={`${isClick ? "hidden" : ""} mobile-icon`}
          onClick={() => setClick(true)}
        />
      ) : (
        <div className="ham-div">
          <AiOutlineClose className="icon-1" onClick={() => setClick(false)} />
          <ul className="nav">
            <li className="mobile-link">
              <Link to={"/"} className="header-link-1">
                Home
              </Link>
            </li>
            <li className="mobile-link">
              <Link to={"/about"} className="header-link-1">
                About Us
              </Link>
            </li>
            <li className="mobile-link">
              <Link to={"/service"} className="header-link-1">
                Services
              </Link>
            </li>
            <li className="mobile-link">
              <Link to={"/product"} className="header-link-1">
                Products
              </Link>
            </li>
            <li className="mobile-link">
              <Link to={"/cart"} className="header-link-1">
                Cart
              </Link>
            </li>
            <li className="mobile-link">
              <Link to={"/signin"} className="header-link-1">
                Sign in
              </Link>
            </li>
            <li className="mobile-link">
              <Link to={"/sign up"} className="header-link-1">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Header;

{
  /* mobile */
}
{
  /* <div className="header-mobile">
        <h1 className="header-title-2">Agromart</h1>
      
      </div> */
}
