import { useEffect, useState } from "react";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import handleAddToWishlist from "../../Components/Utilty/wishlistUtils";

/* eslint-disable react/no-unescaped-entities */
function Newproducts() {
  const [product, setProduct] = useState([]);
  const [quickview, setQuickview] = useState(false);
  const [loading, setLoading] = useState(false);

  const addToWishlist = (productId) => {
    handleAddToWishlist(productId, setLoading);
  };
  const toggleQuickview = () => {
    setQuickview(!quickview);
  };

  useEffect(() => {
    fetch(Baseurl + "/api/v1/Product/products")
      .then((responce) => responce.json())
      .then((data) => setProduct(data.products));
  }, []);
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
  return (
    <>
      <section
        className="gi-product-tab gi-products py-[40px] max-[767px]:py-[30px] wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col">
            <div className="gi-main-title">
              <div className="section-title mb-[20px] pb-[20px] flex flex-start">
                <div className="section-detail">
                  <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                    New <span className="text-[#5caf90]">Arrivals</span>
                  </h2>
                  <p className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px] font-light">
                    Shop online for new arrivals and get free shipping!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap mb-[-24px]">
            <div className="w-full">
              <div className="tab-content">
                <div className="tab-pro-pane" id="all">
                  <div className="w-full flex flex-wrap">
                    {product.map((pro, index) => (
                      <div
                        key={index}
                        className="min-[1200px]:w-[20%] min-[768px]:w-[33.33%] min-[576px]:w-[50%] max-[575px]:w-[50%] max-[480px]:w-full px-[12px]"
                      >
                        <div className="gi-product-content h-full pb-[24px] flex">
                          <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee]">
                            <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                              <div className="gi-pro-image overflow-hidden">
                                <Link
                                  to={`/Product/${pro._id}`}
                                  className="image relative block overflow-hidden pointer-events-none"
                                >
                                  <span className="label veg max-[991px]:hidden">
                                    <span className="dot"></span>
                                  </span>
                                  <img
                                    className="main-image max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                    src={pro.image}
                                    alt="Product"
                                  />
                                  <img
                                    className="hover-image absolute z-[1] top-[0] left-[0] opacity-[0] transition-all duration-[0.3s] ease delay-[0s]"
                                    src={pro.image}
                                    alt="Product"
                                  />
                                </Link>
                                <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-0">
                                  <Link
                                    className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                                    title="Wishlist"
                                  >
                                    <i
                                      className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                                      onClick={() => addToWishlist(pro._id)}
                                      disabled={loading}
                                    ></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="gi-btn-group quickview transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] modal-toggle"
                                  >
                                    <i
                                      className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                                      onClick={toggleQuickview}
                                    ></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                                    title="Compare"
                                  >
                                    <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    title="Add To Cart"
                                    className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                                  >
                                    <i
                                      className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                                      onClick={() => addToCart(pro._id)}
                                    ></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left">
                              <Link to={`/Product/${pro._id}`}>
                                <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] leading-[1.2] capitalize">
                                  {pro.category}
                                </h6>
                              </Link>
                              <h5 className="gi-pro-title h-full mb-[10px] text-[16px]">
                                <Link
                                  to={`/Product/${pro._id}`}
                                  className="block text-[14px] leading-[22px] font-normal text-[#4b5966] tracking-[0.85px] capitalize font-Poppins hover:text-[#5caf90]"
                                >
                                  {pro.name}
                                </Link>
                              </h5>
                              <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                  <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                                  <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                                  <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                                  <i className="gicon gi-star fill text-[14px] text-[#f27d0c] float-left mr-[3px]"></i>
                                  <i className="gicon gi-star text-[14px] text-[#777] float-left mr-[3px]"></i>
                                </span>
                                <span className="gi-price">
                                  <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">
                                    ₹{pro.price}
                                  </span>
                                  <span className="old-price text-[14px] text-[#777] line-through">
                                    ₹{pro.price}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {quickview && (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
          <div className="gi-modal-overlay w-full h-screen  fixed top-0 left-0 z-[30] bg-[#000000b3]"></div>
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
                              src="https://provenonline.in/wp-content/uploads/2023/08/proven-daimond.jpg"
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
                            to="product-left-sidebar.html"
                            className="mb-[15px] block text-[#4b5966] text-[22px] leading-[1.5] font-medium max-[991px]:text-[20px]"
                          >
                            Proven Ro
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
                            $50.00
                          </span>
                          <span className="old-price text-[18px] ml-[10px] line-through text-[#777]">
                            $62.00
                          </span>
                        </div>
                        <div className="gi-pro-variation mt-[5px]">
                          <div className="gi-pro-variation-inner flex flex-col mb-[15px] gi-pro-variation-size gi-pro-size">
                            <div className="gi-pro-variation-content">
                              <ul className="gi-opt-size">
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90] active">
                                  <Link
                                    to="#"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Small"
                                  >
                                    250g
                                  </Link>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                                  <Link
                                    to="#"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Medium"
                                  >
                                    500g
                                  </Link>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                                  <Link
                                    to="#"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Large"
                                  >
                                    1kg
                                  </Link>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                                  <Link
                                    to="#"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Extra Large"
                                  >
                                    2kg
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="gi-quickview-qty mt-[15px] inline-flex">
                          <div className="qty-plus-minus w-[100px] h-[43px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between rounded-[3px]">
                            <input
                              className="qty-input w-[40px] h-[50px] text-[#777] text-[14px] text-center outline-[0]"
                              type="text"
                              name="gi_qtybtn"
                              value="1"
                            />
                          </div>
                          <div className="gi-quickview-cart">
                            <button
                              type="button"
                              className="gi-btn-1 ml-[15px] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[10px] max-[767px]:py-[6px] px-[15px] max-[767px]:px-[10px] bg-[#4b5966] text-[#fff] border-[0] text-[15px] max-[767px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#5caf90] hover:text-[#fff]"
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

export default Newproducts;
