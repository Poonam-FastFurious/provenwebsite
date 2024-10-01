import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
function Crausalforimage() {
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };

  const items = [
    <div className="item" data-value="1" key={1}>
      <Link to={certification6} target="_blank" rel="noopener noreferrer">
        <img src={images} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification2} target="_blank" rel="noopener noreferrer">
        <img src={images2} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification3} target="_blank" rel="noopener noreferrer">
        <img src={images3} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification8} target="_blank" rel="noopener noreferrer">
        <img src={images4} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification4} target="_blank" rel="noopener noreferrer">
        <img src={images5} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification9} target="_blank" rel="noopener noreferrer">
        <img src={images6} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification} target="_blank" rel="noopener noreferrer">
        <img src={images7} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification7} target="_blank" rel="noopener noreferrer">
        <img src={images8} alt="" />
      </Link>
    </div>,
    <div className="item" data-value="2" key={2}>
      <Link to={certification5} target="_blank" rel="noopener noreferrer">
        <img src={images9} alt="" />
      </Link>
    </div>,
  ];

  return (
    <div className=" w-100 mx-auto sm:px-32 md:mx-32 py-8 ">
      <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
        Certification
      </h2>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        disableButtonsControls
      />
    </div>
  );
}

export default Crausalforimage;
