import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import NewcatCard from "../../Components/Common/NewcatCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import provencategoryimg from "../../assets/Images/provencategory.png";
import provencategoryimg2 from "../../assets/Images/provencat2.png";
import provencategoryimg3 from "../../assets/Images/provencat3.png";
import provencategoryimg4 from "../../assets/Images/provencat4.png";
import provencategoryimg5 from "../../assets/Images/provencat5.png";
import provencategoryimg6 from "../../assets/Images/provencat6.png";
const responsive = {
  0: {
    items: 1.5,
  },
  600: {
    items: 3,
  },
  1024: {
    items: 7,
  },
  1440: {
    items: 7,
  },
};

const items = [
  <div className="item mx-2" data-value="1" key="1">
    <NewcatCard icon={provencategoryimg} title={"Domestic RO"} />
  </div>,
  <div className="item mx-2" data-value="2" key="2">
    <NewcatCard icon={provencategoryimg2} title={"Commercial"} />
  </div>,
  <div className="item mx-2" data-value="3" key="3">
    <NewcatCard icon={provencategoryimg3} title={"Industrial RO"} />
  </div>,
  <div className="item mx-2" data-value="4" key="4">
    <NewcatCard icon={provencategoryimg4} title={"Spare Part"} />
  </div>,
  <div className="item mx-2" data-value="5" key="5">
    <NewcatCard icon={provencategoryimg5} title={"Home & Kitchen"} />
  </div>,
  <div className="item mx-2" data-value="6" key="6">
    <NewcatCard icon={provencategoryimg6} title={"Appliances"} />
  </div>,
];

function HomeCategory() {
  const carouselRef = useRef(null);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };
  return (
    <>
      <section
        className="gi-deal-section  wow fadeInUp  py-4 "
        data-wow-duration="2s"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
            <div className="gi-deal-section w-full">
              <div className="gi-products">
                <div
                  className="section-title mb-[20px] relative flex justify-between pb-[20px] z-[5] max-[767px]:flex-col"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="section-detail">
                    <h2 className="gi-title mb-[0] text-[25px] font-semibold text-AFPPrimary relative inline p-[0] capitalize leading-[1]  font-manrope max-[991px]:text-[25px] max-[767px]:text-[25px] max-[575px]:text-[25px]">
                      Browse By categories
                      <span className=""></span>
                    </h2>
                  </div>
                  <div className="">
                    <div className=" gap-2 w-auto h-auto hidden sm:hidden md:flex ">
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l border-AFPPrimary border"
                        onClick={slidePrev}
                      >
                        <IoIosArrowBack />
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r border-AFPPrimary border "
                        onClick={slideNext}
                      >
                        <IoIosArrowForward />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="  flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]  ">
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
          disableDotsControls
        />
      </div>
    </>
  );
}

export default HomeCategory;
