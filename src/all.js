import About1 from "./about/about1";
import Customer from "./customer/customer";
import Feature from "./feature-section/feature-section";
import GetInTouch from "./getintouch/getintouch";
import Header from "./header/header"
import Hero from "./hero-section/hero-section"
import Joinus1 from "./join-us/joinus-1";
import Product from "./product/product";
import Services from "./services/service";
import Footer from "./footer/footer";
import ProductHeader from "./product/product_header";

const All = ()=>{
    return(
        <>
        <Header/>
        <Hero/>
        <About1/>
        <Services/>
        <Feature/>
        <ProductHeader/>
        <Product/>
        <Customer/>
        <Joinus1/>
        <GetInTouch/>
        <Footer/>
        </>
    )
}
export default All;