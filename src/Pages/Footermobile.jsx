/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGift, FaWhatsapp } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router-dom";
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-solid border-gray-300 mb-6 p-4 rounded-md">
      <button
        className="w-full text-left flex items-center justify-between  text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`w-3 h-3 transform transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};
function Footermobile() {
  return (
    <>
      <div className=" sm:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200  ">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <svg
              className="w-5 h-5 mb-2 text-gray-500  group-hover:text-blue-600 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="text-sm text-gray-500  group-hover:text-blue-600 ">
              Home
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-sm text-gray-500  group-hover:text-blue-600 ">
              WhatsApp
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <FaGift className=" text-2xl" />
            <span className="text-sm text-gray-500  group-hover:text-blue-600 ">
              Demo
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <TbPhoneCall className=" text-2xl" />
            <span className="text-sm text-gray-500  group-hover:text-blue-600 ">
              Contact
            </span>
          </button>
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
            className="  flex-col items-center justify-center px-5 hover:bg-gray-50  group gi-site-menu-icon transition-all duration-[0.3s] ease-in-out  flex text-[#4b5966]"
            type="button"
          >
            <IoIosMenu className=" text-2xl" />

            <span className="text-sm text-gray-500  group-hover:text-blue-600 ">
              Menu
            </span>
          </button>
        </div>
        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 "
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase "
          >
            <img
              className=" w-20"
              src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
              alt=""
            />
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center "
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul>
              <li className="dropdown relative">
                <AccordionItem title="Product summary">
                  <Link
                    to="#"
                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                  >
                    Water Purifier
                  </Link>
                  <Link
                    to="#"
                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                  >
                    Water Purifier
                  </Link>
                </AccordionItem>
              </li>
              <li className="relative">
                <Link
                  to="#"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Book Demo
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="#"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Spare Parts
                </Link>
              </li>
              <li className="dropdown ">
                <Link
                  to="#"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  About Us
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="#"
                  className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Certifications
                </Link>
              </li>
              <li className="relative pt-2">
                <Link
                  to="#"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footermobile;
