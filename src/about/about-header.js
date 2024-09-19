import "./about-header.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const AboutHeader = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <section
      className="about-header"
      data-aos="zoom-in-left"
      data-aos-duration="1500"
    >
      <div className="about-header-heads">
        <h1 className="about-header-head">About Us</h1>
        <p className="about-header-title">
          We are passionate about bridging the gaps between farmers and
          customers. Join our team and help us connect farmer directly with
          customers.
        </p>
      </div>
    </section>
  );
};
export default AboutHeader;
