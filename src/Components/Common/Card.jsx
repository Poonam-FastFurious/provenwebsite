import { Link } from "react-alice-carousel";

/* eslint-disable react/prop-types */
function Card({ icons, title }) {
  return (
    <>
      <div className="w-[173px] p-6 bg-AFPPrimaryLight border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700  shadow-lg  ">
        <div className=" flex w-full h-auto justify-center items-center  ">
          <img
            style={{
              width: "76px",
              height: "76px",
              top: "787px",
              left: "116px",
            }}
            src={icons}
            alt=""
          />
        </div>
        <Link to="#">
          <h5 className="mb-2  font-semibold tracking-tight text-gray-900 dark:text-white text-center mt-4">
            {title}
          </h5>
        </Link>
      </div>
    </>
  );
}

export default Card;
