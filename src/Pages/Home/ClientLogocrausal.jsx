import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../../assets/Images/clientlogo/client (1).png";
import client2 from "../../assets/Images/clientlogo/client (2).png";
import client3 from "../../assets/Images/clientlogo/client (3).png";
import client4 from "../../assets/Images/clientlogo/client (4).png";
import client5 from "../../assets/Images/clientlogo/client (5).png";
import client6 from "../../assets/Images/clientlogo/client (6).png";
import client7 from "../../assets/Images/clientlogo/client (7).png";
import client8 from "../../assets/Images/clientlogo/client (8).png";
import client9 from "../../assets/Images/clientlogo/client (9).png";
import client10 from "../../assets/Images/clientlogo/client (10).png";
import client11 from "../../assets/Images/clientlogo/client (11).png";
import client12 from "../../assets/Images/clientlogo/client (12).png";
import client13 from "../../assets/Images/clientlogo/client (13).png";
import client14 from "../../assets/Images/clientlogo/client (14).png";
import client15 from "../../assets/Images/clientlogo/client (15).png";
import client16 from "../../assets/Images/clientlogo/client (16).png";
import client17 from "../../assets/Images/clientlogo/client (17).png";
import client18 from "../../assets/Images/clientlogo/client (18).png";
import client19 from "../../assets/Images/clientlogo/client (19).png";
import client20 from "../../assets/Images/clientlogo/client (20).png";
import client21 from "../../assets/Images/clientlogo/client (21).png";
import client22 from "../../assets/Images/clientlogo/client (22).png";
import client23 from "../../assets/Images/clientlogo/client (23).png";
import client24 from "../../assets/Images/clientlogo/client (24).png";
import client25 from "../../assets/Images/clientlogo/client (25).png";
import client26 from "../../assets/Images/clientlogo/client (26).png";
import client27 from "../../assets/Images/clientlogo/client (27).png";
import client28 from "../../assets/Images/clientlogo/client (28).png";
import client29 from "../../assets/Images/clientlogo/client (29).png";
import client30 from "../../assets/Images/clientlogo/client (30).png";
import client31 from "../../assets/Images/clientlogo/client (31).png";
import client32 from "../../assets/Images/clientlogo/client (32).png";
import client33 from "../../assets/Images/clientlogo/client (33).png";
import client34 from "../../assets/Images/clientlogo/client (34).png";
import client35 from "../../assets/Images/clientlogo/client (35).png";
import client36 from "../../assets/Images/clientlogo/client (36).png";
import client37 from "../../assets/Images/clientlogo/client (37).png";
import client38 from "../../assets/Images/clientlogo/client (38).png";
import client39 from "../../assets/Images/clientlogo/client (39).png";
import client40 from "../../assets/Images/clientlogo/client (40).png";
import client41 from "../../assets/Images/clientlogo/client (41).png";
import client42 from "../../assets/Images/clientlogo/client (42).png";
import client43 from "../../assets/Images/clientlogo/client (43).png";
import client44 from "../../assets/Images/clientlogo/client (44).png";
function ClientLogocrausal() {
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
            Our Client
          </h2>

          <Slider {...settings} className="row ">
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client1}
                  alt="logo1"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client2}
                  alt="logo2"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client3}
                  alt="logo3"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client4}
                  alt="logo4"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client5}
                  alt="logo5"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client6}
                  alt="logo6"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client7}
                  alt="logo7"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client8}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client9}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client10}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client11}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client12}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client13}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client14}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client15}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client16}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client17}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client18}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client19}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client20}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client21}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client22}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client23}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client24}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client25}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client26}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client27}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client28}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client29}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client30}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client31}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client32}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client33}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client34}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client35}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client36}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client37}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client38}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client39}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client40}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client41}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client42}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client43}
                  alt="logo8"
                />
              </div>
            </div> <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={client44}
                  alt="logo8"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ClientLogocrausal;
