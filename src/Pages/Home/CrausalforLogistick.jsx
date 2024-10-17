import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import images from "../../assets/Images/Logistick/Blue-Dart-Logistics.png";
import images2 from "../../assets/Images/Logistick/Delivery.png";
import images3 from "../../assets/Images/Logistick/DHL.jpg";
import images4 from "../../assets/Images/Logistick/DTDC.png";
import images5 from "../../assets/Images/Logistick/E-com-EXpress.png";
import images6 from "../../assets/Images/Logistick/Ekart.png";
import images7 from "../../assets/Images/Logistick/FEDX.png";
import images8 from "../../assets/Images/Logistick/GATi.png";
function CrausalforLogistick() {
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };

  const items = [
    <div className="item" data-value="1" key={1}>
      <img src={images} alt="" className="slider-image" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={images2} alt="" className="slider-image" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={images3} alt="" className="slider-image" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={images4} alt="" className="slider-image" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={images5} alt="" className="slider-image" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={images6} alt="" className="slider-image" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={images7} alt="" className="slider-image" />
    </div>,
    <div className="item" data-value="2" key={2}>
      <img src={images8} alt="" className="slider-image" />
    </div>,
  ];

  return (
    <div className=" w-100 mx-auto sm:px-16 md:mx-16 py-8 ">
      <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
        Our Logistics Partners
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

export default CrausalforLogistick;
