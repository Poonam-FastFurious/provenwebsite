/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-alice-carousel";
import Certificate from "../Home/Certificate";
import bgimg from "../../assets/Images/aboutus.jfif";
import bgimg1 from "../../assets/Images/about1.jpeg";
import bgimg2 from "../../assets/Images/about2.jpeg";
import bgimg3 from "../../assets/Images/about3.png";
function AboutUs() {
  return (
    <>
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          "background-image": `url(${bgimg})`,
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ "background-color": "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">About Us</h2>
            </div>
          </div>
        </div>
      </div>

      <section className="gi-facts-section py-[40px] max-[767px]:py-[30px] ">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
          <div className="flex flex-wrap w-full my-[-12px]">
            <div className="min-[992px]:w-[50%] min-[768px]:w-[50%] w-full px-[12px] py-[12px]">
              <div className="gi-facts-inner py-[30px] px-[15px] h-full flex items-center justify-center flex-col text-center bg-[#fff] border-[1px] border-solid  border-AFPPrimary rounded-[5px]">
                <div className="gi-facts-desc">
                  <h4 className="text-[20px] text-[#4b5966] font-semibold leading-[1.2] mb-[6px]">
                    Who We Are ?
                  </h4>
                  <p className="max-w-[600px] lg:leading-5 m-0 text-[14px] text-[#777]">
                    A Company of PROVEN Founded by Mr. SIYA RAM PRAJAPATI Sales
                    and service water purifier and RO based mineral water
                    (Domestic , Commercial and Industrial) from India and
                    selling, installing, maintaining in local market from 2002.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-[992px]:w-[50%] min-[768px]:w-[50%] w-full px-[12px] py-[12px]">
              <div className="gi-facts-inner py-[30px] px-[15px] h-full flex items-center justify-center flex-col text-center bg-[#fff] border-[1px] border-solid border-AFPPrimary rounded-[5px]">
                <div className="gi-facts-desc">
                  <h4 className="text-[20px] text-[#4b5966] font-semibold leading-[1.2] mb-[6px]">
                    What We Do Best
                  </h4>
                  <p className="max-w-[600px]px] m-0  lg:leading-5 text-[14px] text-[#777]">
                    Proven Water Industries Private Limited is a 21st century
                    healthcare products company with a vision to make the world
                    a healthy and a happy place. Pioneers in bringing the
                    revolutionary Reverse Osmosis (RO) technology to India,
                    PROVEN started its operations from DELHI, India in 2002.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gi-offer-section overflow-hidden py-[40px] max-[767px]:py-[30px] xl:w-[84%] md:w-[90%] mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap">
            <div
              className="w-[33.33%] max-[1199px]:w-[50%] max-[767px]:w-full  px-[12px] wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners">
                <div className="gi-bnr-body flex flex-row relative overflow-hidden">
                  <div className="gi-bnr-img w-full relative">
                    <img src={bgimg1} alt="banner" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[33.33%] max-[1199px]:w-[50%] max-[767px]:w-full  px-[12px] wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners max-[767px]:mt-[30px]">
                <div className="gi-bnr-body flex flex-row relative overflow-hidden">
                  <div className="gi-bnr-img w-full relative">
                    <img src={bgimg2} alt="banner" className="w-full " />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[33.33%] max-[1199px]:hidden max-[767px]:flex max-[767px]:w-full  px-[12px] wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners max-[767px]:mt-[30px]">
                <div className="gi-bnr-body flex flex-row relative overflow-hidden">
                  <div className="gi-bnr-img w-full relative">
                    <img src={bgimg3} alt="banner" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" bg-AFPPrimaryLight mx-auto w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className=" w-full my-4">
            <div className="flex items-center flex-col">
              <div className="w-6 h-6 shrink-0 mx-[-1px] ring-2 ring-gray-300 ring-offset-4 bg-green-500 p-1 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <div className="my-4 text-center max-w-[400px]">
                <h6 className="text-base font-bold text-[#333]">Our Founder</h6>
                <p className="text-sm  mt-1">
                  A Company of PROVEN Founded by Mr. SIYA RAM PRAJAPATI Sales
                  and service water purifier and RO based mineral water
                  (Domestic , Commercial and Industrial) from India and selling,
                  installing, maintainingin local market from 2002..
                </p>
              </div>
              <div className="w-1 h-24 bg-gray-300 rounded-xl"></div>
            </div>
            <div className="flex items-center flex-col">
              <div className="w-6 h-6 shrink-0 mx-[-1px] ring-2 ring-gray-300 ring-offset-4 p-1 flex items-center justify-center rounded-full">
                <span className="w-6 h-6 bg-blue-500 rounded-full shrink-0"></span>
              </div>
              <div className="my-4 text-center max-w-[400px]">
                <h6 className="text-base font-bold text-[#333] ">
                  Delhi, 2002 India
                </h6>
                <p className="text-sm  mt-1">
                  Proven Water Industries Private Limited is a 21st century
                  healthcare products company with a vision to make the world a
                  healthy and a happy place. Pioneers in bringing the
                  revolutionary Reverse Osmosis (RO) technology to India, PROVEN
                  started its operations from DELHI, India in 2002.
                </p>
              </div>
              <div className="w-1 h-24 bg-gray-300 rounded-xl"></div>
            </div>
            <div className="flex items-center flex-col">
              <div className="w-6 h-6 shrink-0 mx-[-1px] ring-2 ring-gray-300 ring-offset-4 p-1 flex items-center justify-center rounded-full">
                <span className="text-base text-gray-500 font-bold">3</span>
              </div>
              <div className="my-4 text-center max-w-[400px]">
                <h6 className="text-base font-bold  text-[#333]">
                  ISO Certified India
                </h6>
                <p className="text-sm mt-1">
                  PROVEN Water industries private limited is ISO 9001:2015
                  certified and has been at the forefront of innovation. It has
                  grown to be a strong organization with offices across India
                  and most importantly, millions of satisfied customers to its
                  credit India.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <section className="bg-white w-[82%] mx-auto pt-8">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <Link
              to="#"
              className="lg:mt-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Customers
              </h5>
              <p className="font-normal text-gray-700">
                We acknowledge that every individual brings different
                perspectives and capabilities to the team and a strong team is
                built on high moral values and fair practice.
              </p>
            </Link>
            <Link
              to="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Honesty
              </h5>
              <p className="font-normal text-gray-700">
                Integrity is the foundation of everything we do. At PROVEN we
                conduct our business with the highest standards of
                professionalism, ethics, quality and fairness and develop
                relationships based on trust. Our core values and philosophy are
                the foundation for every business decision we make. 
              </p>
            </Link>
            <Link
              to="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Our Mission
              </h5>
              <p className="font-normal text-gray-700">
                To be a master class in inventive brilliance. We strive to bring
                to fruition for our customers, the freedom from water-related
                problems and peace of mind for good health through our wide
                range of healthcare products that deliver impeccable standards
                of quality and service.
              </p>
            </Link>
            <Link
              to="#"
              className="lg:mt-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Team Work
              </h5>
              <p className="font-normal text-gray-700">
                We are team players and team builders. We openly communicate
                across all levels of organization because we believe that
                success can be achieved through collective efforts committed to
                achieving common defined goals.
              </p>
            </Link>
          </div>
          <div className="font-light text-gray-500 sm:text-lg mt-4 lg:mt-0 lg:ml-8">
            <h6 className="text-lg font-semibold">All features</h6>
            <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-800">
              Our Core Values
            </h2>
            <p className="mb-4">
              To be a socially responsible brand making a difference in people’s
              lives by affecting all- pervasive areas of their existence- water.
            </p>
            <p>
              Our fundamental vision is defined by producing innovative
              healthcare products that purify the water we drink, the food we
              eat and the air we breathe, and thus help people live healthier.
            </p>
          </div>
        </div>
      </section>

      <Certificate />
    </>
  );
}

export default AboutUs;
