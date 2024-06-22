import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";
import technologyIcon from "../../assets/Images/technology-icon.png";
import { Link } from "react-alice-carousel";
function Services() {
  return (
    <>
      <div className="bg-gray-200 md:w-[100%] sm:w-[82%] w-full xl:w-[82%]  h-auto justify-between flex mx-auto gap-8 ">
        <div className="container flex flex-col mx-auto justify-between  bg-gray">
          <div className="w-full draggable">
            <div className="container flex flex-col items-center gap-16 mx-auto my-8">
              <div className="grid w-full grid-cols-1 gap-5 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center gap-3 px-12 py-10 bg-white rounded-3xl shadow-main ">
                  <span>
                    <MdFamilyRestroom className=" text-4xl  text-AFPPrimary w-full h-36" />
                  </span>
                  <p className=" lg:text-xl font-extrabold text-dark-grey-900">
                    Family Size
                  </p>
                  <p className="text-base leading-4 text-dark-grey-600 text-center ">
                    Family Size Choose purifier as per your
                  </p>
                  <Link
                    className="text-lg font-bold text-purple-blue-500"
                    to="#"
                  >
                    Explore more
                  </Link>
                </div>
                <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                  <span>
                    <MdOutlineWaterDrop className="text-4xl text-AFPPrimary  w-full h-36" />
                  </span>
                  <p className="lg:text-xl font-extrabold text-dark-grey-900">
                    Water Type
                  </p>
                  <p className="text-base leading-4 text-dark-grey-600  text-center">
                    Water Type Choose purifier based on the source
                  </p>
                  <Link
                    className="text-lg font-bold text-purple-blue-500"
                    to="#"
                  >
                    Explore more
                  </Link>
                </div>
                <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                  <span>
                    <img
                      src={technologyIcon}
                      className=" w-full h-36 "
                      alt=""
                    />
                  </span>
                  <p className="lg:text-xl font-extrabold text-dark-grey-900">
                    Technology
                  </p>
                  <p className="text-base leading-4 text-dark-grey-600 text-center">
                    Technology Choose purifier as based on Technology Explore
                  </p>
                  <Link
                    className="text-lg font-bold text-purple-blue-500"
                    target="_blank"
                    to="#"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
