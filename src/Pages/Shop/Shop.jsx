import { useEffect, useState } from "react";
import ShopPageCard from "../../Components/Common/ShopPageCard";
import { Link } from "react-alice-carousel";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";
import handleAddToWishlist from "../../Components/Utilty/wishlistUtils";

function Shop() {
  const [activeTab, setActiveTab] = useState("grid");
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quickview, setQuickview] = useState(false);
  const addToWishlist = (productId) => {
    handleAddToWishlist(productId, setLoading);
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
  useEffect(() => {
    // Simulating fetching data from API
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with properties like tag, price, description, title, offprice
        setProducts(data.products); // Store fetched data in state
        const extractedTags = data.products.flatMap((product) =>
          product.tags.map((tag) => ({
            id: `${product._id}_${tag}`,
            name: tag,
          }))
        );

        setTags(extractedTags);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    // Simulating fetching data from API
    fetch(Baseurl + "/api/v1/category/allcategory")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with properties like tag, price, description, title, offprice
        setCategory(data.data.slice(0, 5)); // Store fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <section className="gi-category py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="gi-shop-rightside min-[992px]:order-[6] min-[768px]:order-[-1] min-[992px]:w-[75%] min-[768px]:w-full w-full px-[12px]">
              <div className="gi-pro-list-top flex items-center justify-between text-[14px] border-[1px] border-solid border-[#eee] rounded-[5px] mb-[30px]">
                <div className="min-[768px]:w-[50%] w-full gi-grid-list">
                  <div className="gi-gl-btn ml-[5px] flex items-center flex-row">
                    <button
                      type="button"
                      className={`grid-btn btn-grid-50 h-[40px] w-[40px] border-[0] rounded-[0] flex items-center justify-center flex-row ${
                        activeTab === "grid" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("grid")}
                    >
                      <i className="fi fi-rr-apps text-[20px] text-[#4b5966] leading-[0]"></i>
                    </button>
                    <button
                      type="button"
                      className={`grid-btn btn-list-50 h-[40px] w-[40px] border-[0] rounded-[0] flex items-center justify-center flex-row ${
                        activeTab === "list" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("list")}
                    >
                      <i className="fi fi-rr-list text-[20px] text-[#4b5966] leading-[0]"></i>
                    </button>
                    <div className="min-[768px]:w-[50%]  gi-sort-select md:block sm:block lg:hidden justify-end items-center flex">
                      <div className="gi-select-inner relative flex w-[10px] h-[50px] leading-[1.5] bg-[#fff] overflow-hidden rounded-[0] border-l-[1px] border-solid border-[#eee]">
                        <select
                          name="gi-select"
                          id="gi-select"
                          className="appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] cursor-pointer  "
                        >
                          <option>Ctegory</option>
                          <option value="1">Position</option>
                          <option value="2">Relevance</option>
                          <option value="3">Name, A to Z</option>
                          <option value="4">Name, Z to A</option>
                          <option value="5">Price, low to high</option>
                          <option value="6">Price, high to low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[768px]:w-[50%] w-full gi-sort-select flex justify-end items-center">
                  <div className="gi-select-inner relative flex w-[140px] h-[50px] leading-[1.5] bg-[#fff] overflow-hidden rounded-[0] border-l-[1px] border-solid border-[#eee]">
                    <select
                      name="gi-select"
                      id="gi-select"
                      className="appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] cursor-pointer"
                    >
                      <option selected="" disabled="">
                        Sort by
                      </option>
                      <option value="1">Position</option>
                      <option value="2">Relevance</option>
                      <option value="3">Name, A to Z</option>
                      <option value="4">Name, Z to A</option>
                      <option value="5">Price, low to high</option>
                      <option value="6">Price, high to low</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="gi-select-bar mt-[-5px] mx-[-5px] mb-[25px] flex flex-wrap justify-end ">
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Domestic Ro
                  <Link
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    to="#"
                  >
                    ×
                  </Link>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Commercial Ro
                  <Link
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    to="#"
                  >
                    ×
                  </Link>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Industrial Ro
                  <Link
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    to="#"
                  >
                    ×
                  </Link>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Hydrogen Water
                  <Link
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    to="#"
                  >
                    ×
                  </Link>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Copper Water
                  <Link
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    to="#"
                  >
                    ×
                  </Link>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Spare Parts
                  <Link
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    to="#"
                  >
                    ×
                  </Link>
                </span>
                <span className="gi-select-btn gi-select-btn-clear m-[5px] p-[0] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  <Link
                    className="gi-select-clear transition-all duration-[0.3s] ease-in-out h-full m-[0] py-[3px] px-[10px] text-[14px] flex items-center bg-[#4b5966] text-[#fff] rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                    to="#"
                  >
                    Clear All
                  </Link>
                </span>
              </div>

              <div className="shop-pro-content">
                <div className="shop-pro-inner mx-[-12px]">
                  <div className="flex flex-wrap w-full ">
                    {activeTab === "grid" ? (
                      <>
                        {products.map((product, index) => (
                          <ShopPageCard
                            key={index}
                            tag={product.tag}
                            price={product.price}
                            description={product.description}
                            title={product.name}
                            offprice={product.discount}
                            images={product.thumbnail}
                            ID={product._id}
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        {products.map((product, index) => (
                          <div className="shop-pro-content" key={index}>
                            <div className="shop-pro-inner mx-[-12px]">
                              <div className="flex flex-wrap w-full">
                                <div className="w-full px-[12px] gi-product-box max-[575px]:mx-auto pro-gl-content">
                                  <div className="gi-product-content pb-[24px] h-full flex max-[767px]:max-w-[400px] max-[575px]:max-w-[350px] max-[767px]:m-auto">
                                    <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-row overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px] max-[767px]:flex-col">
                                      <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative max-w-[270px] bg-[#fff] flex items-center max-[767px]:max-w-full">
                                        <div className="gi-pro-image overflow-hidden">
                                          <a
                                            href="product-left-sidebar.html"
                                            className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                                          >
                                            <span className="label veg max-[991px]:hidden">
                                              <span className="dot"></span>
                                            </span>
                                            <img
                                              className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                              src={product.image}
                                              alt="Product"
                                            />
                                            <img
                                              className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                              src={product.image}
                                              alt="Product"
                                            />
                                          </a>
                                          <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                            <a
                                              className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                              title="Wishlist"
                                            >
                                              <i
                                                className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                                                onClick={() =>
                                                  addToWishlist(product._id)
                                                }
                                                disabled={loading}
                                              ></i>
                                            </a>
                                            <a
                                              href="javascript:void(0)"
                                              className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                            >
                                              <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"></i>
                                            </a>
                                            <a
                                              href="javascript:void(0)"
                                              className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                              title="Compare"
                                            >
                                              <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"></i>
                                            </a>
                                            <a
                                              href="javascript:void(0)"
                                              title="Add To Cart"
                                              className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                            >
                                              <i
                                                onClick={() =>
                                                  addToCart(product._id)
                                                }
                                                className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                                              ></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-l-[1px] border-solid border-[#eee] justify-center">
                                        <a href="shop-left-sidebar-col-3.html">
                                          <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                            {product.category}
                                          </h6>
                                        </a>
                                        <h5 className="gi-pro-title h-auto mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                                          <a
                                            href="product-left-sidebar.html"
                                            className="text-[#4b5966] block text-[16px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                                          >
                                            {product.name}
                                          </a>
                                        </h5>
                                        <p className="gi-info my-[5px] text-[13px] text-[#777] block">
                                          Contrary to popular belief, Lorem
                                          Ipsum is not simply random text. It
                                          has roots in a piece of classical
                                          Latin literature from 45 BC, making it
                                          over 2000 years old.
                                        </p>
                                        <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                          <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                            <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                            <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                            <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                            <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                            <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]"></i>
                                          </span>
                                          <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                            <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                              ₹{product.price}
                                            </span>
                                            <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                              ₹{product.price}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div className="gi-pro-pagination pt-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                  <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">
                    Showing 1-12 of 21 item(s)
                  </span>
                  <ul className="gi-pro-pagination-inner">
                    <li className="inline-block float-left mr-[5px]">
                      <Link
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] active"
                        to="#"
                      >
                        1
                      </Link>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <Link
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        to="#"
                      >
                        2
                      </Link>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <Link
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        to="#"
                      >
                        3
                      </Link>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <span className="w-[20px] text-[#777] block text-center text-[14px] tracking-[0.02rem] max-[575px]:mb-[10px]">
                        ...
                      </span>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <Link
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        to="#"
                      >
                        8
                      </Link>
                    </li>
                    <li className="inline-block float-left">
                      <Link
                        className="next w-auto px-[13px] text-[#fff]  bg-AFPPrimary  leading-[30px] h-[32px]  flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
                        to="#"
                      >
                        Next
                        <i className="gicon gi-angle-right ml-[10px] transition-all duration-[0.3s] ease-in-out text-[#fff]"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gi-shop-sidebar  hidden sm:hidden md:hidden lg:block xl:block sticky top-[24px] min-[992px]:order-[-1] min-[768px]:order-[6] min-[992px]:w-[25%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
              <div id="shop_sidebar">
                <div className="gi-sidebar-wrap p-[15px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Category
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px]">
                      <ul>
                        {category.map((cat, index) => (
                          <li key={index}>
                            <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                              <input
                                type="checkbox"
                                className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                              />
                              <Link
                                to="#"
                                className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                              >
                                <span className="flex">
                                  {cat.categoriesTitle}
                                </span>
                              </Link>
                              <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Storage
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px]">
                      <ul>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                              checked
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              Medium
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              Large
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              Small
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              extra larg
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              10ltr
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Color
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[20px]">
                      <ul className="w-full flex flex-wrap flex-row">
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#c4d6f9" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ff748b" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#000000" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="active mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#2bff4a" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ff7c5e" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#f155ff" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ffef00" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#c89fff" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#7bfffa" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#56ffc1" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ffdb9f" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#9f9f9f" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#6556ff" }}
                            ></span>
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Price
                      </h3>
                    </div>
                    <div className="gi-sb-block-content gi-price-range-slider es-price-slider mt-[20px]">
                      <div className="gi-price-filter flex justify-between flex-col">
                        <div className="gi-price-input mb-[15px] p-[10px] flex justify-center items-center rounded-[5px] bg-[#f8f8fb]">
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            From
                            <input
                              type="text"
                              className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]"
                            />
                          </label>
                          <span className="gi-price-divider relative border-b-[1px] border-solid border-[#777] w-[10px] h-[1px] mx-[10px]"></span>
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            To
                            <input
                              type="text"
                              className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]"
                            />
                          </label>
                        </div>
                        <div
                          id="gi-sliderPrice"
                          className="filter__slider-price"
                          data-min="0"
                          data-max="250"
                          data-step="10"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        TRENDING Tags
                      </h3>
                    </div>

                    <div className="gi-tag-block gi-sb-block-content mt-[15px] ">
                      {tags.map((tag, index) => (
                        <Link
                          key={index}
                          to="#"
                          className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem]  bg-AFPPrimary  text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                        >
                          {tag.name} (9)
                        </Link>
                      ))}
                    </div>
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
                          <a
                            href="product-left-sidebar.html"
                            className="mb-[15px] block text-[#4b5966] text-[22px] leading-[1.5] font-medium max-[991px]:text-[20px]"
                          ></a>
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
                                  <a
                                    href="javascript:void(0)"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Small"
                                  >
                                    250g
                                  </a>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                                  <a
                                    href="javascript:void(0)"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Medium"
                                  >
                                    500g
                                  </a>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                                  <a
                                    href="javascript:void(0)"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Large"
                                  >
                                    1kg
                                  </a>
                                </li>
                                <li className="h-[22px] py-[2px] px-[8px] cursor-pointer border-[1px] border-solid border-[#eee] text-[#fff] flex items-center justify-center text-[12px] leading-[22px] rounded-[3px] font-normal float-left mr-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                                  <a
                                    href="javascript:void(0)"
                                    className="gi-opt-sz text-[#777]"
                                    data-tooltip="Extra Large"
                                  >
                                    2kg
                                  </a>
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

export default Shop;
