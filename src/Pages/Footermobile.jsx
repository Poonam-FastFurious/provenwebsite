/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiGift } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMenu, IoMdHome } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logoproven.png";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className=" sm:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200  ">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <IoMdHome className=" text-2xl  mb-2 text-gray-500" />
            <span className="text-sm text-gray-500   ">
              <Link to="/">Home</Link>
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <FaWhatsapp className=" text-2xl  mb-2 text-gray-500" />
            <span className="text-sm text-gray-500   ">
              <Link to={`https://wa.me/${+918851515949}`} target="_blank">
                Whatsapp
              </Link>
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <CiGift className=" text-2xl  mb-2 text-gray-500" />
            <span className="text-sm text-gray-500   ">
              <Link to="/Book-Demo">Demo</Link>
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <TbPhoneCall className=" text-2xl  mb-2 text-gray-500" />
            <span className="text-sm text-gray-500   ">
              <Link to="/contact-us">Contact</Link>
            </span>
          </button>
          <button
            onClick={toggleDrawer}
            className="  flex-col items-center justify-center px-5 hover:bg-gray-50  group gi-site-menu-icon transition-all duration-[0.3s] ease-in-out  flex text-[#4b5966]"
            type="button"
          >
            <IoIosMenu className=" text-2xl  mb-2 text-gray-500" />

            <span className="text-sm text-gray-500   ">Menu</span>
          </button>
        </div>
        <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase "
        >
          <img className=" w-20" src={logo} alt="logo" />
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
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
              <AccordionItem title="Product">
                <Link
                  onClick={toggleDrawer}
                  to="/Water-purifier"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Water Purifier
                </Link>
              </AccordionItem>
            </li>
            <li className="relative"></li>
            <li className="relative">
              <Link
                onClick={toggleDrawer}
                to="/Spare_Parts"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Spare Parts
              </Link>
            </li>
            <li className="dropdown ">
              <Link
                onClick={toggleDrawer}
                to="/AboutUs"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                About Us
              </Link>
            </li>
            <li className="dropdown ">
              <Link
                onClick={toggleDrawer}
                to="/contact-us"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Contact-Us
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={toggleDrawer}
                to="/Client"
                className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Client
              </Link>
            </li>
            <li className="relative pt-2">
              <Link
                onClick={toggleDrawer}
                to="/Book-Demo"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Book Demo
              </Link>
            </li>
            <li className="relative pt-2">
              <Link
                onClick={toggleDrawer}
                to="/Hydrogen-Water"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Hydrogen-Water
              </Link>
            </li>
            <li className="relative pt-2">
              <Link
                onClick={toggleDrawer}
                to="/Copper-Water"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Copper-Water
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
