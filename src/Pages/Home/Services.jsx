import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";

import { GrTechnology } from "react-icons/gr";
function Services() {
  return (
    <div className="bg-AFPPrimaryLight py-8">
      <div className="max-w-6xl mx-auto py-12  ">
        <h2 className=" text-AFPPrimary sm:text-4xl text-2xl font-extrabold text-center mb-16">
          Discover Our Exclusive Features
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 px-4 sm:px-4  md:px-4 lg:px-0 ">
          <div className="text-center border p-12 shadow-xl rounded-md bg-white">
            <MdFamilyRestroom className=" text-8xl  text-AFPPrimary w-full  h-44" />
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Family Size
            </h3>
            <p className="text-gray-600 text-sm">
              Family Size Choose purifier as per your
            </p>
          </div>

          <div className="text-center border p-12 shadow-xl rounded-md bg-white">
            <MdOutlineWaterDrop className="text-4xl text-AFPPrimary  w-full h-36" />
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Water Type
            </h3>
            <p className="text-gray-600 text-sm">
              Water Type Choose purifier based on the source
            </p>
          </div>

          <div className="text-center border p-12 shadow-xl rounded-md bg-white">
            <GrTechnology className=" text-4xl  text-AFPPrimary w-full h-36" />
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Support
            </h3>
            <p className="text-gray-600 text-sm">
              Tailor our product to suit your needs 24/7 customer support for
              all your inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
