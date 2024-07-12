import { useEffect, useState } from "react";

import secondnbanner2 from "../../assets/Images/secondbanner2.jpeg";
import { Baseurl } from "../../confige";
function HomeSecondBanner() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          Baseurl + "/api/v1/Banner/allabnner?type=1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBanners(data.data); // Assuming data is an array of banner objects
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchData();
  }, []);
  console.log(banners);
  return (
    <div className=" pt-24">
      <div className="container mx-auto py-10 md:py-12 px-3 md:px-8 bg-AFPPrimaryLight  pt-14">
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          {banners.slice(0, 1).map((banner, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-stretch justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 ${
                index === 0
                  ? "md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12"
                  : "md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
              }`}
            >
              <div className="flex flex-col justify-center md:w-1/2">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 ">
                  {banner.title}
                </h1>
                <p className="text-base lg:text-xl text-gray-800 mt-2">
                  <span className="font-bold">{banner.details}</span>
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <img src={banner.image} alt={banner.title} className="" />
              </div>
            </div>
          ))}
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50  py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 ">
                Proven Ro
              </h1>
              <p className="text-base lg:text-xl text-gray-800 ">
                Save Upto <span className="font-bold">30%</span>
              </p>
            </div>
            <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img
                src={secondnbanner2}
                alt=""
                className="md:w-20 md:h-20 lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSecondBanner;
