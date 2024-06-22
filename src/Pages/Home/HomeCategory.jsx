import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import NewcatCard from "../../Components/Common/NewcatCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

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
    <NewcatCard
      icon={
        "https://s3-alpha-sig.figma.com/img/a1ad/027c/1b85e8a09506aaeb3fb80687b5e12212?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKCTuE9GjhP-GVprnNBO12Dowx2rZnhpGv~shHZvID-oR44t2eBED9rJsNCKJzCf75go~sgRvLICYZ5a5JJURy4kLESYYKkLsvku~cVPkKv6Ycar6YMQ5bB7BLouE0eF7y1bjx8phRKe~-MhJFP5bKocRgr1XrYns1vbbQz363J3OZ8aia0WOTMsyMFwwkrRDFO1DS4sjH-qtW8Yp589~oqyW0I3toPqJ8P1HUaZ0TzaycbgiLNNAdmKHpmhC19~o-RauBUFBm~9qPeMZB09tM7CCNEfs68LVVW32h73L6vhZRSu6D7pZ3-j8YQ0naB73s4FOrqW65qRc0ozchzqfw__"
      }
      title={"Domestic RO"}
    />
  </div>,
  <div className="item mx-2" data-value="2" key="2">
    <NewcatCard
      icon={
        "https://s3-alpha-sig.figma.com/img/67a5/3b7f/664399edc26b97fd01e290d5cd13c368?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWDWTGT2r1R46HfawFnx9tFDRA2HKkMsoACiHd4B9m~p8zgPfLWl2bssMpyWom4gq05hOd~P90nkWHs0VuC~O1jtusVqaduPcrfBjh0TybTsoQwUx1lJrcf9u2xEf8QLXvZ77i~Bulwhsdliojz9a9CQqJhy1eVeQpJVGJlaZgKEpU6J5~mFb-E33kEsadr2MFiyfa5~knymRcUcD3j4xP1jsiDJtk94QIYxO0WhPqQEs2BAPAPagjlH6os0CCyW4FAr1QVMgBCwqRjOfPFM6ZXQwgar3qz4xcDVlrtBgR-eCyI1SuXLojts8O7YODoQ6wj7P9hzxjiG8cU2RQAJow__"
      }
      title={"Commercial"}
    />
  </div>,
  <div className="item mx-2" data-value="3" key="3">
    <NewcatCard
      icon={
        "https://s3-alpha-sig.figma.com/img/cc1b/f332/9ddce6aa547fd51ae082510c71b6d5e2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHbuSwVeULHUZcoqyGef~0z~cYyVtKet03QRS4Iqm9FiIyjvxHMOIjOb5h5-8kd551Zg5YT2jmXio1Cwu1R3WmIiOqyqBKufXGdZ6SL2fkKCloxJkg7fxTwUCqK499k62tj9EemkF31nwBUBDzI~weTFHjvn5CIw8EmvRszVzVLw5yOynEhLLDx4dyNE4rfSxoB3HxcAkk3jjJOwsS33lRFvGQlQDqjq~0NRzSKOHYjwLWkXQgEYoGhfAxL44E6G2I9mobzG2Zrxpl9TuTzMnupyUkPYq9Xr4wyUKeJ5uV~Yj5HQFNwswWMb7ARpp~toNrPj8vN8sovMbMsBpk4iNw__"
      }
      title={"Industrial RO"}
    />
  </div>,
  <div className="item mx-2" data-value="4" key="4">
    <NewcatCard
      icon={
        "https://s3-alpha-sig.figma.com/img/41be/e66b/1b0c24bf1954b0c517c9307127ff0a1c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VLZuExEIBZWmeBB58C2jBbH9b3Diec9q4YpSgUG9JZtnYUkpVM1s6TC8tAqAD5k~Zwqy1p~qKq~QFkUZ0-BV5AcAWJAiWlNeTNTDYCm~DU~sJmY5uY5a6ClUCzWCfGhXuhU5TRbsTlOnkdHlhxAgu7K39RpSbuB9NgXKS29ex1EPT3WyEkdpaNONK8iOnsf2SQl-6dAWVggNuY8NVaxrTZmg-8r2Gg5r~ZPR9ScxZ-V5cLc9QdaFrzJDPJhecNEpvOGV1INHDCzAEyjjHt9g5p2IVIHgekallRp28b429BCuCZJKGlNU~byQcev2~jJaVQIFda0-R3Asaz-dm8pJnQ__"
      }
      title={"Spare Part"}
    />
  </div>,
  <div className="item mx-2" data-value="5" key="5">
    <NewcatCard
      icon={
        "https://s3-alpha-sig.figma.com/img/952f/8a80/4d3e43b1fb2c71b2ecd166d9d7bfc4f2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ebDVqKNfFE~aIdPpJmMvjmo7-PJjy8muCWGT8OYLzPpvKu2be3tDdQ-TI3K90s~unS6592p5xHfMnXPo0IExkKFeFfqOqrDCC9fbc2VbS2p6tPXWxMWAQgGwl1wzeb68feeyUbr4rWtM2KJdvt2dVMQl1onO2WilUM0rbXubUWW1pqC-fHhfew9YaXQKIwvFXzQw923VIynnJjXe-2CVTnj29ys67ZCmgaD7po~rpAy-ZjDAnz1ATGovCzpK6qL-rAeFD9bnGc6NJ5EbISok3RAQzARmsJoCzj5Tu3Ny~zuXBp6c1whC4b5sM3xg0R5LUhDg1~Nwb0hG-OMxTklyBg__"
      }
      title={"Home & Kitchen"}
    />
  </div>,
  <div className="item mx-2" data-value="6" key="6">
    <NewcatCard
      icon={
        "https://s3-alpha-sig.figma.com/img/7202/2302/7c995db011c4786dc5c4094fc7195818?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhFDrHgzCI2GepKA8-JZ9YqM627BJ3fuT2shBQ0tVjx3UyXhCM7H~igRHKOPZRyalKiDG5ByxxlP-A-omp4WNyfsiYnG85y3dBDKiv9YY-9xTa~X2-YPmkSsfI00gQscWn780A7iFXS9LCkX7gFSXVYGDNMuvPNNy1jDAj8U7RnCIKo8S-L8LfZiWgCFp6dSO14asBdF0xRrJT2NMGJvqYCWTtJrQ8OT7SRpgFh~3Xbf3ryOHv0f4tL0ciC-oJMPbrBvXN6Y5hc7B3~y-AoAFcwoeaQCWn69Z8GVHkJLgoOmu9CChb1WYdyk~qZel3S2Ff-nqj~KVbpa9F3ltZje0g__"
      }
      title={"Appliances"}
    />
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
        className="gi-deal-section  wow fadeInUp "
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
                      Browse By Ctegory
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
