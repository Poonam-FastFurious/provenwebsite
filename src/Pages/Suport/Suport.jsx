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
import Certificate from "../Home/Certificate";

/* eslint-disable no-irregular-whitespace */
function Suport() {
  return (
    <>
      <div
        className="relative overflow-hidden   bg-cover bg-no-repeat p-12 text-center"
        style={{
          "background-image":
            "url('https://s3-alpha-sig.figma.com/img/f481/9791/c00ba055ffdbcfb5a62900ce374afbc2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgWTVOOoWsS3YlMebApeFO1tVynCOorn5hvsMFtv7L5Z0O7Ls-C6qlaPHpTEBEcJlmCkptzMHPLLQZCYrYyyyUf5MkwpktpiHefLDUhBunt2U7LfeAo5wrb7uulhgwJ6Pd-wGnzYflhHPeEw-p5Sa1KLeManEqe8xXj1V68pthnXRNHkviDNC7lf2LocJaQLwnI-GvmElnQ-HOQmSENZialUGguCfHz5phm2LeIlAVz8HcOXxqS7OAIq~acqInVBPI9oCAb8K0m09LhNVRUA7thNahG2l2HTuI~-ssz55ZpSeewrblRxu33yjlKm9HCGFU93OrbJtXTTownNE~B0nA__')",
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
              <button className="text-green-500 hover:text-green-700">
                <i className="fas fa-comments fa-3x"></i>
              </button>
            </div>

            <div className="text-center mb-4">
              <p className="text-gray-800">or</p>
              <a
                href="mailto:support@proven.com"
                className="text-blue-600 hover:underline"
              >
                E-mail: Support@Proven.com
              </a>
            </div>

            <div className="text-center">
              <p className="text-gray-800">or</p>
              <p className="font-bold text-black text-xl">Escalation Matrix</p>
              <p className="text-gray-600 mt-2">
                In case your Service Request is not addressed properly, please
                get in touch with the Escalation Matrix below.
              </p>
            </div>

            <form className="mt-6 flex items-center justify-center">
              <input
                type="text"
                placeholder="Please Enter your Case Id"
                className="border border-gray-300 rounded-l-full py-2 px-4 w-full max-w-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-r-full hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
            </form>

            <p className="text-gray-500 text-center mt-2">Eg: 2105047-689</p>
          </div>
        </div>
      </section>
      <div className="container relative md:mt-24 mt-16 ">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
            <img
              src="https://s3-alpha-sig.figma.com/img/eb25/e7a2/08b91723b76aa02b85398d72e37a24c7?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H4~BgN~sNVNc9yhk8Ei~dGmojNn19xfMa3F1Y3H8Y7qvTMovYuNmqXRkXcRCGBgHtKPJ0cTqVeCG93zWGSmu-lrZrmURoPZzbTef9crqhKTZ7SCSOChGtvaw4tPY8J8aAiYSuv2Y65CUtkZOqXH7MG9oa5SNjk-enpCLKleZU6uaimrMJH1AciO8NOqDSRGBhupWKx0RmD8LnSNxldgQ0SkvuO0nK1oSYwVliIWnsz~XdlSqMmYZKkkryiFsxVFb~6UVlsxQjOGDasltS0paHbpWXi4PHY6yhDdT6Lwq-xr282juVe37fn9yvvGSnrqNbEWEog57WcjoYWiikekO7Q__"
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
      <Certificate />
    </>
  );
}

export default Suport;
