import { Link } from "react-router-dom";
import image from "../../assets/Images/Sparepartimage.png"
function SpareBenifit() {
  return (
    <div className="  bg-[#E7C6A5] ">
      <div className="grid lg:grid-cols-2 items-center gap-10 my-4     container mx-auto p-4">
        <div className="max-lg:text-center">
          <h6 className=" text-sm max-sm:text-2xl font-extrabold text-AFPPrimary">
            Spare Parts
          </h6>

          <h2 className="text-gray-800 text-xl max-sm:text-xl font-extrabold mb-2">
            Industrial RO System and Water Treatment Plant
          </h2>
          <p className="text-black">
            A plethora of products and the finest quality of spares provide the
            most desirable combination of quality and reliability. Brand
            recommended genuine spares not only increase the life of a product
            considerably but also prove out to be highly cost-effective in the
            longer run. The easy to install screw-able filters and extensive
            guidance plus the demo of usage also make the spares replacement
            makes maintenance easier. Add life to your product with Hi-Tech
            Authorized Spares and services and the product will add to your
            life. We at Proven is a high quality RO Spare Parts Manufacturer in
            India that provides almost every RO Spare parts for the domestic,
            commercial as well as Industrial. We provide the quality, reliable
            and genuine products at a relatively affordable price.
          </p>
          <button
            type="button"
            className="  px-4 py-2.5 rounded-md tracking-wide flex items-center text-sm mt-6 bg-AFPPrimary text-white max-lg:mx-auto"
          >
          <Link to="/Spare_Parts">  Shop Now</Link>
           
          </button>
        </div>

        <div className=" w-full">
          <img
            src={image}
            alt=""
            className=" h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SpareBenifit;
