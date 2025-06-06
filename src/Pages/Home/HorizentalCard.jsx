/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";
import { IoCartOutline } from "react-icons/io5";

function HorizentalCard({ name, price, images, discount, ID }) {
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
      toast.warn("Login fist to add to cart.");
    }
  };
  return (
    <>
      <div className="gi-all-product-block px-[12px]">
        <div className="w-full gi-all-product-block px-[12px]">
          <div className="gi-all-product-inner mr-[1px] p-[15px] flex flex-wrap items-center bg-[#fff] border-[1px] border-solid border-[#eee] overflow-hidden relative">
            <div className="gi-pro-image-outer ">
              <div className="gi-pro-image overflow-hidden">
                <Link to={`/Product/${ID}`} className="image">
                  <img
                    className="main-image w-full"
                    src={images}
                    alt="Product"
                  />
                </Link>
              </div>
            </div>
            <div className="gi-pro-content w-[calc(100%-70px)] basis-[calc(100%-70px)] pl-[15px]">
              <h5 className="gi-pro-title text-[16px]">
                <Link
                  to={`/Product/${ID}`}
                  title="Healthy Nutmix, 200g Pack"
                  className="text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block font-Poppins text-[14px] leading-[24px] font-medium tracking-[0.2px] capitalize"
                ></Link>
              </h5>
              <h6 className="gi-pro-stitle text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block text-[12px] leading-[24px] font-normal tracking-[0.3px] capitalize mb-[5px]">
                <Link
                  to={`/Product/${ID}`}
                  className="text-[#999] hover:text-[#5caf90]"
                >
                  {name}
                </Link>
              </h6>
              <div className="gi-pro-rat-price">
                <div className="gi-pro-rat-pri-inner">
                  <span className="gi-price text-[14px] flex items-center text-[#5caf90]">
                    <span className="new-price text-[#4b5966] font-bold text-[14px]">
                      ₹{price}
                    </span>
                    <span className="old-price text-[12px] line-through text-[#777] ml-[9px]">
                      ₹{discount}
                    </span>
                  </span>
                </div>
              </div>
              <Link
                to="#"
                className="add-to-cart w-[30px] h-[30px] absolute bottom-[10px] right-[10px]  bg-AFPPrimary border-[1px] border-solid border-[#eee] flex items-center justify-center "
                title="Add To Cart"
              >
                <IoCartOutline
                  className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#fff] leading-[10px] text-xl"
                  onClick={() => addToCart(ID)}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizentalCard;
