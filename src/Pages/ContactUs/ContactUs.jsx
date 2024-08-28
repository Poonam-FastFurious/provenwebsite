/* eslint-disable react/no-unescaped-entities */
import { FaHome } from "react-icons/fa";
import { MdCall, MdOutlineMailLock } from "react-icons/md";
import { PiBuildings } from "react-icons/pi";
import contactbanner from "../../assets/Images/analtsis.webp";
import contactbgimage from "../../assets/Images/contactbgimage.jfif";
function ContactUs() {
  return (
    <>
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          "background-image": `url(${contactbgimage})`,
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ "background-color": "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-xl font-extrabold text-gray-800">Contact Us</h2>
            <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
              We'd love to hear from you.
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Don’t find your answer. Contact with us
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-2 gap-y-2 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-2">
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <FaHome className=" text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Registered Address
              </h4>
              <p className="text-sm font-normal text-white">
                D -2/328 Nehru Vihar Delhi -110094 (India)
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <PiBuildings className="text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Corporate Address
              </h4>
              <p className="text-sm font-normal text-white">
                E-5, Dayalpur, Karawal Nagar Road, Delhi-110094
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdOutlineMailLock className="text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Email Us
              </h4>
              <p className="text-sm font-normal text-white">
                info@provenonline.in
                <br />
                info@provenonline.in
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4  border p-8 bg-AFPPrimaryDark">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdCall className=" text-4xl" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Call Now
              </h4>
              <p className="text-sm font-normal text-white">
                1800-532-3367
                <br />
                1800-532-3367
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-2xl text-center font-bold text-gray-900">
            FEEL FREE TO TALK TO US
          </h2>
        </div>
        <div className="w-full flex flex-wrap  max-[576px]:pt-[60px]">
          <div className="min-[768px]:w-[50%] w-full px-[12px]">
            <img
              src={contactbanner}
              className="h-full w-full mb-[-7px] border-[1px] border-solid border-[#eee] rounded-[5px] max-[767px]:h-[300px]"
            ></img>
          </div>
          <div className="min-[768px]:w-[50%] w-full px-[12px]">
            <form className="max-[767px]:mt-[50px]">
              <div className="form-group mb-[30px]">
                <input
                  type="text"
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="fname"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group mb-[30px]">
                <input
                  type="email"
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="umail"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-[30px]">
                <input
                  type="number"
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group mb-[30px]">
                <textarea
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="gi-btn-2 transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium   bg-AFPPrimary text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white pt-[80px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55986.544485233884!2d77.265536!3d28.714793000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc1f6f14d23f%3A0xd80245a480de6914!2sProven%20Water%20Industries%20Private%20Limited%20(Proven%20RO)!5e0!3m2!1sen!2sus!4v1718707692166!5m2!1sen!2sus"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
