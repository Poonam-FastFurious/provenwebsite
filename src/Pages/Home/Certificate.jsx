import images from "../../assets/Images/provensertificate.png";
import images2 from "../../assets/Images/proven sertifiacte2.png";
import images3 from "../../assets/Images/provensertificate3.png";
import images4 from "../../assets/Images/provensertificate4.png";
import { Link } from "react-router-dom";
function Certificate() {
  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-normal leading-tight text-center  text-AFPPrimary  md:text-4xl">
            Certification
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <Link to="#" className="flex justify-center items-center">
              <img src={images} alt="logodd" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images2} alt="" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images3} alt="" />
            </Link>

            <Link to="#" className="flex justify-center items-center">
              <img src={images4} alt="" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images2} alt="logodd" />
            </Link>
            <Link to="#" className="flex justify-center items-center">
              <img src={images} alt="" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certificate;
