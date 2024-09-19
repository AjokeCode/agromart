import "../about/about2.css";
import img from "./Img (1).png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Service = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="about2">
      <div
        className="about2-right"
        // data-aos="zoom-in-left"
        // data-aos-duration="1500"
      >
        <h1 className="about2-header about2-header1">Our Services</h1>
        <h1 className="about2-header about2-header2">
          Designed for everyone to participate in a healthy food system with
          ease.
        </h1>
        <p className="about2-text about2-text1">
          At Agromart, we provide the perfect services for connecting farmers
          and customers looking for the freshiest, healthiest and most
          sustainable produce. Our platform is designed to make it easy for
          everyone to participate in a sustainable and healthy food system. With
          our services, you can support local farmers and get the highest
          quality foods and vegetables directly from the sources. Whether you
          are a farmer looking to expand your customer base or for expert
          consultation or a customer looking for the best produces. We are here
          to help you.
        </p>
      </div>
      <div
        className="about2-left"
        data-aos="zoom-in-right"
        data-aos-duration="1500"
      >
        <img src={img} alt="img1" className="about2-img" />
      </div>
    </div>
  );
};
export default Service;
