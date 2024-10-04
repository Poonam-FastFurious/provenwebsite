import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
import { useEffect, useState } from "react";
function Crausalforclient() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768); // Small device breakpoint (e.g., 768px)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const responsive = {
    0: {
      items: 3,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 8,
      itemsFit: "contain",
    },
  };

  const items = [
    <div className="item" data-value="1" key={1}>
      <img src={client1} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client2} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client3} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client4} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client5} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client6} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client7} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client8} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client9} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client10} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client11} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client12} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client13} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client14} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client15} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client16} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client17} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client18} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client19} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client20} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client21} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client22} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client23} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client24} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client25} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client26} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client27} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client28} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client29} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client30} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client31} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client32} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client33} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client34} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client35} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client36} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client37} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client38} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client39} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client40} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client41} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client42} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client43} alt="" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={client44} alt="" />
    </div>,
  ];

  return (
    <div className=" w-100 mx-auto sm:px-16 md:mx-16 py-8  ">
      <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
        Our Client
      </h2>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        disableButtonsControls
        disableDotsControls={isSmallDevice} // Disable dots on small devices
      />
    </div>
  );
}

export default Crausalforclient;
