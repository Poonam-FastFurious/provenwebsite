import { FaGift, FaWhatsapp } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";

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
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <IoIosMenu className=" text-2xl" />

            <span className="text-sm text-gray-500  group-hover:text-blue-600 ">
              Menu
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footermobile;
