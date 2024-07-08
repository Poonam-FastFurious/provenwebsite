import { BsCartCheck } from "react-icons/bs";
import { CiShop, CiViewList } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoLockOpenOutline } from "react-icons/io5";
import {
  MdCall,
  MdOutlineEventNote,
  MdOutlineLocalShipping,
  MdOutlineMailLock,
  MdPayment,
} from "react-icons/md";

/* eslint-disable no-irregular-whitespace */
function Suport() {
  return (
    <>
      <div className="container relative md:mt-24 mt-16 shadow-lg">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
            <img
              src="https://s3-alpha-sig.figma.com/img/eb25/e7a2/08b91723b76aa02b85398d72e37a24c7?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0sW7uQyiFQrPMr0PSVxNAYjvW3vff76eNIv~WBL42uCaj-Tmk1TApT8zkih4qUy0ic4FAltpnhFQSb~E-ExskzICXtR7EXVSRyhxtmyfQkpvVkLdxqfMpAv69e-JBC7YzWz0DsotZNwY6LDVDHA7npHVd5Q5BaQcHMcqvsGuncUTDvq6JgdOfeYyEi1B0De08hRDyJCA5tXfGDuHPPh8JY0NwlJEIAXRUdcvI7rri9y82n1QaA29we7vLutubyb2ggIFV151mYBEZo4HDfyWzdl21qPri3bBkI6~KnGQPFhC4y-UwnQvp5hjtzyEVz3I0BAfSBs6if~rIuhhXAhgg__"
              className="rounded-b-full shadow-md "
              alt=""
            />
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
              <div className=" bg-AFPPrimaryLight rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdCall className=" text-4xl" />
              </div>
            </h3>
            <div>
              <p className="text-base font-bold">Call us now</p>
              <p className="text-sm text-gray-500 mt-2 mb-2">
                we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
                with use now
              </p>
              <span className=" mt-8 font-bold ">9876543210</span>
            </div>
          </div>
          <div className="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
            <h3 className="text-5xl font-extrabold">
              <div className=" bg-AFPPrimaryLight rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdOutlineMailLock className=" text-4xl" />
              </div>
            </h3>
            <div>
              <p className="text-base font-bold">Sent us an email</p>
              <p className="text-sm text-gray-500 mt-2 mb-2">
                we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
                with use now
              </p>
              <span className=" font-bold">Support@Proven.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Suport;
