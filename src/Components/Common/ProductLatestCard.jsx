/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";

function ProductLatestCard({ name, images, prices, ratings, ID }) {
  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(Baseurl + "/api/v1/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Product added to cart:", data);
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart.");
    }
  };
  return (
    <>
      <div className="gi-product-content h-full  wi-[50px]  px-[12px] flex">
        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee]">
          <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
            <div className="gi-pro-image overflow-hidden">
              <Link
                to="#"
                className="image relative block overflow-hidden pointer-events-none"
              >
                <span className="label veg max-[991px]:hidden">
                  <span className="dot"></span>
                </span>
                <img
                  className="main-image  transition-all duration-[0.3s] ease delay-[0s]"
                  src={images} // Use product thumbnail
                  alt={name}
                />
                <img
                  className="hover-image absolute z-[1] top-[0] left-[0] opacity-[0] transition-all duration-[0.3s] ease delay-[0s]"
                  src={images} // Use product thumbnail
                  alt={name}
                />
              </Link>
              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] left-[10px] z-[2]">
                <span className="sale px-[10px] py-[5px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative">
                  Sale
                </span>
              </span>
              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] top-[10px] bottom-[0] right-[-2px] max-[991px]:opacity-[1] max-[991px]:right-[10px] flex flex-col items-center my-[0] mx-auto opacity-0">
                <Link
                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] my-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee]"
                  title="Wishlist"
                >
                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"></i>
                </Link>

                <Link
                  to="#"
                  title="Add To Cart"
                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] my-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee]"
                >
                  <i
                    className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                    onClick={() => addToCart(ID)}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left">
            <Link to={`/Product/${ID}`}>
              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] leading-[1.2] capitalize">
                category
              </h6>
            </Link>
            <h5 className="gi-pro-title h-full mb-[10px] text-[16px]">
              <Link
                to={`/Product/${ID}`}
                className="block text-[14px] leading-[22px] font-normal text-[#4b5966] tracking-[0.85px] capitalize font-Poppins hover:text-[#5caf90]"
              >
                {name}
              </Link>
            </h5>
            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                <i className="gicon gi-star text-[14px] text-[#777] float-left mr-[3px]">
                  {ratings}
                </i>
              </span>
              <span className="gi-price">
                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">
                  ₹{prices}
                </span>
                <span className="old-price text-[14px] text-[#777] line-through">
                  ₹56.00
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductLatestCard;
