import { FaAward, FaHandHoldingWater } from "react-icons/fa";
import { GiTransparentTubes } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";

function Newservice() {
  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-normal font-extrabold text-AFPPrimary ">
              Services
            </h2>
            <p className="font-light text-gray-500 sm:text-xl "></p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 ">
              <FaHandHoldingWater className="mx-auto mb-4 w-36 h-36 rounded-full bg-AFPPrimary text-white p-4" />
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">
                <a href="#">Book A Demo</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 ">
              <RiCustomerServiceFill className="mx-auto mb-4 w-36 h-36 rounded-full bg-AFPPrimary text-white p-4" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">Services support </a>
              </h3>
            </div>
            <div className="text-center text-gray-500 ">
              <FaAward className="mx-auto mb-4 w-36 h-36 rounded-full bg-AFPPrimary text-white p-4" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">Extended Warranty</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 ">
              <GiTransparentTubes className="mx-auto mb-4 w-36 h-36 rounded-full bg-AFPPrimary text-white p-4" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">Spare parts</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newservice;
