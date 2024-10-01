
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/Images/Logistick/Blue-Dart-Logistics.png";
import images2 from "../../assets/Images/Logistick/Delivery.png";
import images3 from "../../assets/Images/Logistick/DHL.png";
import images4 from "../../assets/Images/Logistick/DTDC.png";
import images5 from "../../assets/Images/Logistick/E-com-EXpress.png";
import images6 from "../../assets/Images/Logistick/Ekart.png";
import images7 from "../../assets/Images/Logistick/FEDX.png";
import images8 from "../../assets/Images/Logistick/GATi.png";
function ClientCrawsal() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
              infinite: true,
            },
          },
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 3,
              dots: false,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              dots: false,
              arrows: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: false,
              arrows: true,
            },
          },
        ],
      };
  return (
    <>
  <div className="  py-8">
        <div className="container ">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
        Our Logistics Partners
          </h2>
          
          <Slider {...settings} className="row ">
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images4}
                  alt="logo1"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images2}
                  alt="logo2"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images3}
                  alt="logo3"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images5}
                  alt="logo4"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images}
                  alt="logo5"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images6}
                  alt="logo6"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images7}
                  alt="logo7"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={images8}
                  alt="logo8"
                />
              </div>
            </div>
                       
          </Slider>
        </div>
      </div>
    </>
  )
}

export default ClientCrawsal
