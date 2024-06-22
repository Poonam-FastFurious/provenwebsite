/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
function ProductCard({
  title = " Domestic Ro",
  Image = "https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg",
  desc = " Lorem, ipsum dolor sit ",
  price = "450rs",
}) {
  return (
    <>
      <div className="w-full md:w-[48%] lg:w-[15%] min-w-[200px] border-[1px] border-AFPPrimary p-2 px-3 rounded-[25px] custom-box-shadow mt-4 md:mt-0 relative cursor-pointer overflow-hidden transform transition-transform hover:scale-105">
        <img
          className="w-full rounded-[20px] cursor-pointer"
          src={Image}
          alt="Product img"
        ></img>
        <div className="text-start pt-4 md:pt-0">
          <div className="text-[#f20606]"> {title}</div>
          <div className=" absolute top-16 left-[190px]">
            <BsCart />
          </div>
          <h5 className="pt-2 md:pt-7 text-[#943b6f] text-[15px]">{desc}</h5>
        </div>

        <div className="text-start flex">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <div className="pt-2 md:pt-7 font-[15px] text-green-500">{price}</div>
        <div className="w-[100px]  shadow-xl flex items-center justify-center cursor-pointer h-[40px] rounded-md bg-AFPPrimary font-medium text-white border-[1px]  absolute bottom-[20px] right-[10px] transition-background-color hover:bg-gray-400">
          Add to cart
        </div>
      </div>
    </>
  );
}

export default ProductCard;
