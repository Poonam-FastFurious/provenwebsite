import images from "../../assets/Images/certificate/certi1.png";
import images2 from "../../assets/Images/certificate/certi2.png";
import images3 from "../../assets/Images/certificate/certi3.png";
import images4 from "../../assets/Images/certificate/certi4.png";
import images5 from "../../assets/Images/certificate/certi5.png";
import images6 from "../../assets/Images/certificate/certi6.png";
import images7 from "../../assets/Images/certificate/certi7.png";
import images8 from "../../assets/Images/certificate/certi8.png";
import images9 from "../../assets/Images/certificate/certi9.png";
import certification from "../../assets/Images/certificate/UKF.jpg";
import certification2 from "../../assets/Images/certificate/WAPTEMA-Certificate.jpg";
import certification3 from "../../assets/Images/certificate/Rohs (1).jpg";
import certification4 from "../../assets/Images/certificate/OTABU.jpg";
import certification5 from "../../assets/Images/certificate/Rohs.jpg";
import certification6 from "../../assets/Images/certificate/IPPROVEN.jpg";
import certification7 from "../../assets/Images/certificate/Msme-Certificate_provenindia.jpg";
import certification8 from "../../assets/Images/certificate/India500msme.jpg";
import certification9 from "../../assets/Images/certificate/Ce.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Newcertificate() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 5,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          dots: false,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="  py-8">
        <div className="container  ">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
            Certification
          </h2>
        
          <Slider {...settings} className="row partner-slider clientlogo">
            <div className="col-md-12">
              <Link
                to={certification6}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images}
                  alt="logo1"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification2}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images2}
                  alt="logo2"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification3}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images3}
                  alt="logo3"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification8}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images4}
                  alt="logo4"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification4}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images5}
                  alt="logo5"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification9}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images6}
                  alt="logo6"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images7}
                  alt="logo7"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification7}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images8}
                  alt="logo8"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <Link
                to={certification5}
                target="_blank"
                className="partner-img text-center"
              >
                <img
                  className="w-50 mx-auto slider-image"
                  src={images9}
                  alt="logo9"
                />
              </Link>
            </div>
           
          </Slider>
        </div>
      </div>
      {/* <section className="bg-white ">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
            Certification
          </h2>
          <div className="new-product-carousel owl-carousel gi-product-slider w-full h-full  flex justify-center items-center ">
            <Link to="#" className="flex justify-center items-center">
              <img src={images} alt="logodd" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images2} alt="" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images3} alt="" />
            </Link>

            <Link to="#" className="flex justify-center items-center">
              <img src={images4} alt="" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images2} alt="logodd" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images} alt="" />
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Newcertificate;
