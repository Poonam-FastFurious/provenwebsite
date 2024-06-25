import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";

import { GrTechnology } from "react-icons/gr";
function Services() {
  return (
    <div className="bg-gray-400  ">
      <div className="grid-cols-1 sm:grid  md:grid-cols-3  place-items-center   sm:grid-cols-1  w-full mx-auto container py-8  ">
        <div className="relative  flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="p-6">
            <MdFamilyRestroom className=" text-8xl  text-AFPPrimary w-full  h-44" />
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Family Size
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Family Size Choose purifier as per your
            </p>
          </div>
          <div className="p-6 pt-0">
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="p-6">
            <MdOutlineWaterDrop className="text-4xl text-AFPPrimary  w-full h-36" />
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Water Type
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Water Type Choose purifier based on the source
            </p>
          </div>
          <div className="p-6 pt-0">
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="p-6">
            <GrTechnology className=" text-4xl  text-AFPPrimary w-full h-36" />
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Technology
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Technology Choose purifier as based on Technology Explore
            </p>
          </div>
          <div className="p-6 pt-0">
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
