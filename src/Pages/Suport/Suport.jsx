/* eslint-disable no-irregular-whitespace */
import { BsCartCheck } from "react-icons/bs";
import { CiShop, CiViewList } from "react-icons/ci";
import { FaRegUser, FaWhatsapp } from "react-icons/fa";
import { IoLockOpenOutline } from "react-icons/io5";
import {
  MdCall,
  MdOutlineEventNote,
  MdOutlineLocalShipping,
  MdOutlineMailLock,
  MdPayment,
} from "react-icons/md";

import { Link } from "react-router-dom";
import bgimage from "../../assets/Images/suportbg.jfif";
import bgimage1 from "../../assets/Images/suportimage.png";
import Newcertificate from "../Home/Newcertificate";
function Suport() {
  const handleWhatsappClick = () => {
    // Replace with your phone number
    const phoneNumber = "18005323367";
    // Optional: Replace with your custom message
    const message = "Hello, I need assistance with my service request.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleCallClick = () => {
    // Replace with your phone number
    const phoneNumber = "1800-532-3367";
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    // Replace with your email address
    const emailAddress = "info@provenonline.in";
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <>
      <div
        className="relative overflow-hidden   bg-cover bg-no-repeat p-12 text-center"
        style={{
          "background-image": `url(${bgimage})`,
          height: "540px",
        }}
      ></div>
      <section className=" w-[100%] mx-auto pt-8 container">
        <div className="  flex items-center justify-center px-4 py-8">
          <div className="bg-white  rounded-lg p-6 w-full ">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Alternatively
              </h2>
              <p className="text-gray-600">
                You can also register your Service Request by clicking on green
                WhatsApp button
              </p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                className="text-green-500 hover:text-green-700"
                onClick={handleWhatsappClick}
              >
                <i className="fas fa-comments fa-3x">
                  <FaWhatsapp className=" text-2xl" />
                </i>
              </button>
            </div>

            <div className="text-center mb-4">
              <p className="text-gray-800">or</p>
              <Link
                to="mailto:info@provenonline.in"
                className="text-blue-600 hover:underline"
              >
                E-mail: info@provenonline.in
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container relative md:mt-24 mt-16 ">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
            <img src={bgimage1} alt="" />
          </div>

          <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
            <h6 className="text-black font-semibold uppercase text-lg">
              Customer Service
            </h6>
            <h5 className="font-semibold text-3xl leading-normal my-4">
              {/* Maria J. Rose */}
            </h5>
            <p className="text-black max-w-xl">
              Service is an essential part of a Water Purifier as you may
              require to change the filters. Getting Genuine Service from Proven
              is important as only from Proven you can get Genuine Spares which
              will continue to ensure that you get 100% Pure Water.
              <br />
              Call only 1800-532-3367from anywhere in India. <br /> <br />
              Please do not call any other number or dealers directly.Service
              Request can also be made here.
            </p>
          </div>
        </div>
      </div>
      <div className="container relative  md:mt-24 mt-16 border mb-4 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
              What can we assist you with today?
            </h2>
          </div>
        </div>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 items-center ">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4  text-white bg-AFPPrimary rounded-full">
              <MdOutlineLocalShipping />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 text-center items-center">
                Track Order
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4 text-white bg-AFPPrimary rounded-full">
              <IoLockOpenOutline />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Reset Password
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4 text-white bg-AFPPrimary rounded-full">
              <MdPayment />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Payment Option
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4 text-white  bg-AFPPrimary rounded-full">
              <FaRegUser />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                User & Account
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4 text-white  bg-AFPPrimary rounded-full">
              <CiViewList />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">Wishlist</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4 text-white bg-AFPPrimary rounded-full">
              <MdOutlineEventNote />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Shipping & Billing
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4  text-white  bg-AFPPrimary rounded-full">
              <BsCartCheck />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Shopping Cart
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border border-AFPPrimary">
            <div className="p-3 mr-4 text-white  bg-AFPPrimary rounded-full">
              <CiShop />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Warranty Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-10 font-[sans-serif] text-[#333]">
        <h2 className="text-3xl font-bold mb-14 text-center">
          Have More Questions ?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
            <h3 className="text-5xl font-extrabold">
              <div
                onClick={handleCallClick}
                className=" bg-AFPPrimaryLight rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 "
              >
                <MdCall className=" text-4xl" />
              </div>
            </h3>
            <div>
              <p className="text-base font-bold">Call us now</p>
              <p className="text-sm text-gray-500 mt-2 mb-2">
                we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
                with use now
              </p>
              <span className=" mt-8 font-bold ">1800-532-3367</span>
            </div>
          </div>
          <div className="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
            <h3 className="text-5xl font-extrabold">
              <div
                className=" bg-AFPPrimaryLight rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 "
                onClick={handleEmailClick}
              >
                <MdOutlineMailLock className=" text-4xl" />
              </div>
            </h3>
            <div>
              <p className="text-base font-bold">Sent us an email</p>
              <p className="text-sm text-gray-500 mt-2 mb-2">
                we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
                with use now
              </p>
              <span className=" font-bold">info@provenonline.in</span>
            </div>
          </div>
        </div>
      </div>
      <Newcertificate />
    </>
  );
}

export default Suport;
