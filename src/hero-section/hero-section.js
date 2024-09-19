//import Header from '../header/header';
import "./hero-section.css";
import hero from "./hero.png";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Hero = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <>
      <section className="hero">
        {/* <img src={hero} alt='hero' className='hero-img'/> */}

        <div className="hero-flex">
          <h1 className="hero-title">Agromart</h1>
          <h1 className="hero-subtitle">
            Connecting You To Fresh, Local Produce.
          </h1>
          <p className="hero-text">
            Our platform connect farmers and consumers for fresh, sustainable
            products. Shop with us to support local farmers and enjoy high
            quality foods and vegetables straight from the source.
          </p>
          <div className="hero-btns">
            <button className="hero-btn hero-btn-1">
              <Link to={"/signup"} className="hero-link">
                Shop with us
              </Link>
            </button>
            <button className="hero-btn hero-btn-2">
              <Link to={"/signup"} className="hero-link">
                Partner with us
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
