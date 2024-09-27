import "./feature-section.css";
import img1 from "./Connect.png";
import img2 from "./Connect (1).png";
import img3 from "./Connect (2).png";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Feature = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <section className="feature"
      // data-aos="zoom-in-up" data-aos-duration="1500"
    >
      <div className="features feature-1">
        <div className="feature-1-flex">
          <img src={img1} alt="img" className="feature-1-img" />
          <h1 className="feature-1-header">Connecting farmers & Customers</h1>
        </div>
        <p className="feature-1-text">
          Shop with us for the freshiest, healthiest and most sustainable
          produces directly from local farmers and enjoy the benefits of a
          healthy food system.
        </p>

        <Link className="feature-1-link" to={"/product"}>
          Explore available products
        </Link>
      </div>
      <div className="features feature-2">
        <div className="feature-1-flex">
          <img src={img2} alt="img" className="feature-1-img" />
          <h1 className="feature-1-header">
            Experts Consultation for farmers{" "}
          </h1>
        </div>
        <p className="feature-1-text">
          Get expert advice and consultation services from our experienced
          professionals to improve your farming practices and increase your
          profitability.
        </p>
        <Link className="feature-1-link">Get expert consultation.</Link>
      </div>
      <div className="features feature-3">
        <div className="feature-1-flex">
          <img src={img3} alt="img" className="feature-1-img" />
          <h1 className="feature-1-header">Grow your farming business</h1>
        </div>
        <p className="feature-1-text">
          Partner with us to expand your customer base, rent farming equipment,
          and access resources to help you succeed.
        </p>
        <Link className="feature-1-link">Partner with us</Link>
      </div>
    </section>
  );
};
export default Feature;




