import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";
import handleAddToWishlist from "../Utilty/wishlistUtils";
/* eslint-disable react/prop-types */
function ShopPageCard({
  tag = "New",
  price = " ₹250",
  description = "Lorem ipsum dolor sit amet consectetur.  ",
  title = "Domestic RO",
  offprice = "4150 ₹",
  images,
  ID,
}) {
  const [quickview, setQuickview] = useState(false);
  const [loading, setLoading] = useState(false);
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  const toggleQuickview = () => {
    setQuickview(!quickview);
  };
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
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart.");
    }
  };
  const addToWishlist = (productId) => {
    handleAddToWishlist(productId, setLoading);
  };
  return (
    <>
      <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content ">
        <div className="gi-product-content pb-[24px] h-full flex">
          <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
            <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
              <div className="gi-pro-image overflow-hidden">
                <Link
                  to={`/Product/${ID}`}
                  className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                >
                  <span className="label veg max-[991px]:hidden">
                    <span className="dot"></span>
                  </span>
                  <img
                    className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                    src={images}
                    alt="Product"
                  />
                  <img
                    className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                    src={images}
                    alt="Product"
                  />
                </Link>
                <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                  <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center  bg-AFPPrimary text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                    {tag}
                  </span>
                </span>
                <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                  <Link
                    className=" wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-AFPPrimary"
                    title="Wishlist"
                  >
                    <i
                      onClick={() => addToWishlist(ID)}
                      disabled={loading}
                      className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                    ></i>
                  </Link>
                  <Link
                    onClick={toggleQuickview}
                    className=" modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-AFPPrimary"
                  >
                    <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"></i>
                  </Link>

                  <Link
                    to="#"
                    title="Add To Cart"
                    className=" add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-AFPPrimary"
                  >
                    <i
                      className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                      onClick={() => addToCart(ID)}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
              <Link to={`/Product/${ID}`}>
                <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                  {title}
                </h6>
              </Link>
              <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                <Link
                  to={`/Product/${ID}`}
                  className="text-[#4b5966]  text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins hidden"
                >
                  {truncateText(description, 60)}
                </Link>
              </h5>
              <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                  <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                  <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                  <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                  <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]"></i>
                  <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]"></i>
                </span>
                <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                  <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                    ₹{price}
                  </span>
                  <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                    {offprice}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {quickview && (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="modal gi-modal max-[575px]:w-full fixed top-[50%] left-[50%] z-[30] max-[767px]:w-full  max-[767px]:max-h-full max-[767px]:overflow-y-auto">
            <div className="modal-dialog modal-dialog-centered h-full my-[0%] mx-auto max-w-[900px] w-[900px] max-[991px]:max-w-[650px] max-[991px]:w-[650px] max-[767px]:w-[80%] max-[767px]:h-auto max-[767px]:max-w-[80%] max-[767px]:m-[0] max-[767px]:py-[35px] max-[767px]:mx-auto max-[575px]:w-[90%] transition-transform duration-[0.3s] ease-out">
              <div className="modal-content quickview-modal p-[30px] relative bg-[#fff] rounded-[5px] max-[360px]:p-[15px]">
                <button
                  onClick={toggleQuickview}
                  type="button"
                  className="gi-close-modal qty_close absolute top-[10px] right-[10px] leading-[18px] max-[420px]:top-[5px] max-[420px]:right-[5px]"
                ></button>
                <div className="modal-body mx-[-12px] max-[767px]:mx-[0]">
                  <div className="w-full flex flex-wrap ">
                    <div className="min-[768px]:w-[41.66%] px-[12px] max-[767px]:px-[0] w-full">
                      <div className="single-pro-img single-pro-img-no-sidebar h-full border-[1px] border-solid border-[#eee] rounded-[5px] overflow-hidden">
                        <div className="single-product-scroll h-full">
                          <div className="single-slide h-full flex items-center zoom-image-hover">
                            <img
                              className="img-responsive h-full w-full"
                              src={
                                "https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[768px]:w-[58.33%] px-[12px] max-[767px]:px-[0] w-full max-[767px]:mt-[30px]">
                      <div className="quickview-pro-content">
                        <h5 className="gi-quick-title">
                          <Link
                            to="/detail"
                            className="mb-[15px] block text-[#4b5966] text-[22px] leading-[1.5] font-medium max-[991px]:text-[20px]"
                          >
                            {title}
                          </Link>
                        </h5>
                        <div className="gi-quickview-rating flex mb-[15px]">
                          <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[5px]"></i>
                          <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[5px]"></i>
                          <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[5px]"></i>
                          <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[5px]"></i>
                          <i className="gicon gi-star text-[14px] text-[#777] mr-[5px]"></i>
                        </div>
                        <div className="gi-quickview-desc mb-[10px] text-[15px] leading-[24px] text-[#777] font-light">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry standard dummy text ever since the 1900s,
                        </div>
                        <div className="gi-quickview-price pt-[5px] pb-[10px] flex items-center justify-left">
                          <span className="new-price text-[#4b5966] font-bold text-[22px]">
                            {price}
                          </span>
                          <span className="old-price text-[18px] ml-[10px] line-through text-[#777]">
                            {offprice}
                          </span>
                        </div>
                        <div className="gi-pro-variation mt-[5px]">
                          <div className="gi-pro-variation-inner flex flex-col mb-[15px] gi-pro-variation-size gi-pro-size">
                            <div className="gi-pro-variation-content">
                              <ul className="gi-opt-size">
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee]  flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-AFPPrimary hover:text-[#fff] hover:border-[#5caf90] bg-AFPPrimary text-[#fff]">
                                  <Link
                                    to="/detail"
                                    className="gi-opt-sz text-[#fff]"
                                    data-tooltip="Small"
                                  >
                                    Medium
                                  </Link>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-AFPPrimary hover:text-[#fff] hover:border-[#5caf90]">
                                  <Link
                                    to="#"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Medium"
                                  >
                                    Larg
                                  </Link>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-AFPPrimary hover:text-[#fff] hover:border-[#5caf90]">
                                  <Link
                                    to="#"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Large"
                                  >
                                    Small
                                  </Link>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-AFPPrimary hover:text-[#fff] hover:border-[#5caf90]">
                                  <Link
                                    to="#"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Extra Large"
                                  >
                                    Extra
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="gi-quickview-qty mt-[15px] inline-flex  ">
                          <form className="max-w-xs mx-auto">
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                              >
                                <CiCircleMinus />
                              </button>
                              <input
                                type="text"
                                id="quantity-input"
                                data-input-counter
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5  "
                                placeholder="999"
                                required
                                value={1}
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                              >
                                <CiCirclePlus />
                              </button>
                            </div>
                          </form>

                          <div className="gi-quickview-cart">
                            <button
                              type="button"
                              className="gi-btn-1 ml-[15px] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[10px] max-[767px]:py-[6px] px-[15px] max-[767px]:px-[10px] bg-[#4b5966] text-[#fff] border-[0] text-[15px] max-[767px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-AFPPrimary hover:text-[#fff]"
                            >
                              <i className="fi-rr-shopping-basket text-[14px] leading-[0] mr-[5px]"></i>
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShopPageCard;
