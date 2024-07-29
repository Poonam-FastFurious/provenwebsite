// import { useEffect, useState } from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Baseurl } from "../../confige";
function HomeSecondBanner() {
  const [banner, setBanner] = useState(null); // Initialize as null to handle loading state

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
        // Set the first item of the data array
        setBanner(data.data[0] || null); // Default to null if no data is available
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    fetchData();
  }, []);

  if (!banner) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  return (
    <div>
      <section
        className="gi-banner py-[40px] max-[767px]:py-[30px] wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px]">
            <div className="w-full">
              <div
                className="w-full bg-center bg-no-repeat bg-cover overflow-hidden relative rounded-[5px] h-auto"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div className="gi-bnr-detail h-full py-[80px] px-[100px] max-[991px]:p-[50px] max-[420px]:p-[15px] flex flex-col justify-center items-end text-right relative">
                  <div className="gi-bnr-info">
                    <h2 className="text-[50px] max-[1399px]:text-[38px] max-[1199px]:text-[30px] max-[991px]:text-[28px] max-[767px]:text-[20px] max-[480px]:text-[18px] font-bold text-white  leading-[65px] max-[1199px]:leading-[40px] max-[991px]:leading-[35px] max-[767px]:leading-[27px] max-[480px]:leading-[25px] z-[2] relative">
                      {banner.title}
                    </h2>
                    <h3 className="mt-[15px] mb-[15px]  text-AFPPrimary leading-[1.2] font-semibold text-[1.75rem] max-[991px]:text-[20px] max-[767px]:text-[16px] max-[767px]:mt-[5px]">
                      {banner.details}
                      <span className="text-white font-normal">
                        Hurry up!!!
                      </span>
                    </h3>
                    <a
                      href={banner.link}
                      className="gi-btn-2 mt-[15px] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[5px] max-[767px]:py-[6px] px-[10px] max-[767px]:px-[10px] bg-[#5caf90] text-[#fff] border-[0] text-[14px] max-[767px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#4b5966] hover:text-[#fff]"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSecondBanner;
