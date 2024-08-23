import "../about/about-header.css";
import "../hero-section/hero-section.css";
import { Link } from "react-router-dom";
import Product from "./product";
import Footer from "../footer/footer";
import Header from "../header/header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductFilter = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <section
        className="about-header-2"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <div className="about-header-heads">
          <h1 className="about-header-head">Our Products</h1>
          <p className="about-header-title">
            Discover all categories of our farm-to-table pricing and order fresh
            products deliver straight to your doorstep, or visit us at the farm
            for a closer look to our sustainable farming practices.
          </p>
          <p className="pf-text">
            Unable to find what you are looking for here? Order manually
          </p>
          <div className="hero-btns">
            <button className="hero-btn hero-btn-1">
              <Link to={"/"} className="hero-link">
                Order Manually
              </Link>
            </button>
            <button className="hero-btn hero-btn-2">
              <Link to={"/"} className="hero-link">
                Track Order
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div className="explore-flex">
        <h1 className="explore-header">Explore different categories here</h1>
        <input
          placeholder="Search any products here"
          type="text"
          className="explore-input1"
        />
        <select className="explore-input2">
          <option>Sort: All categories</option>
          <option>Flowers</option>
          <option>Vegetables</option>
          <option>Grains</option>
        </select>
        <select className="explore-input3">
          <option>Size: All</option>
          <option>Flowers</option>
          <option>Vegetables</option>
          <option>Grains</option>
        </select>
      </div>
      <Product />
      <Footer />
    </div>
  );
};
export default ProductFilter;
