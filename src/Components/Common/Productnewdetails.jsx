/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";
import HomeBestSelling from "../../Pages/Home/HomeBestSelling";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { CiLocationOn, CiLock } from "react-icons/ci";
function Productnewdetails() {
  const productCoverSlider = useRef(null);
  const navThumbSlider = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [productData, setProductData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const handleAddToWishlist = async (productId) => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");

    if (!token) {
      toast.warn("You must be logged in to add items to your wishlist.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${Baseurl}/api/v1/wishlist/add`, {
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
      console.log("Product added to wishlist:", data);
      toast.success("Product added to wishlist!", {
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
      console.error("Error adding product to wishlist:", error);
      toast.warn("Failed to add product to wishlist.");
    } finally {
      setLoading(false);
    }
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    setNav1(productCoverSlider.current);
    setNav2(navThumbSlider.current);
  }, []);
  useEffect(() => {
    axios
      .get(`${Baseurl}/api/v1/Product/product?id=${id}`)
      .then((response) => {
        setProductData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching the product data:", error);
      });
  }, [id]);
  const productCoverSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: nav2,
  };

  const navThumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
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
      toast.warn("login First to add product.");
    }
  };
  if (!productData) {
    return <div>Loading...</div>;
  }
  const renderMedia = (src, index) => {
    if (typeof src === "string" && src.match(/\.(mp4|webm|ogg)$/)) {
      return (
        <video key={index} className="img-responsive h-full w-full" controls>
          <source src={src} type={`video/${src.split(".").pop()}`} />
          Your browser does not support the video tag.
        </video>
      );
    } else if (typeof src === "string") {
      return (
        <img
          key={index}
          className="img-responsive h-full w-full"
          src={src}
          alt={`Media ${index + 1}`}
        />
      );
    }
    return null;
  };
  // const settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 578,
  //       settings: {
  //         slidesToScroll: 4,
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 426,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <section className="gi-single-product py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full px-[12px]">
            <div className="gi-pro-rightside gi-common-rightside w-full">
              <div className="single-pro-block">
                <div className="single-pro-inner">
                  <div className="flex flex-wrap gap-4 w-full">
                    <div className="single-pro-img single-pro-img-no-sidebar lg:w-[30%] w-full relative  max-[991px]:pl-[12px] max-[991px]:w-full max-[991px]:max-w-[500px] max-[991px]:m-auto max-[420px]:px-[0]">
                      <div className="single-product-scroll p-[15px] sticky top-[30px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                        <Slider
                          {...productCoverSettings}
                          ref={productCoverSlider}
                          className="single-product-cover overflow-hidden cursor-zoom-in rounded-[5px]"
                        >
                          {productData.thumbnail.map((media, index) => (
                            <div
                              className="single-slide zoom-image-hover"
                              key={index}
                            >
                              {renderMedia(media, index)}
                            </div>
                          ))}
                        </Slider>
                        <Slider
                          {...navThumbSettings}
                          ref={navThumbSlider}
                          className="single-nav-thumb w-full overflow-hidden"
                        >
                          {productData.thumbnail.map((media, index) => (
                            <div
                              className="single-slide px-[11px] pt-[11px]"
                              key={index}
                            >
                              {renderMedia(media, index)}
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    <div className="single-pro-desc single-pro-desc-no-sidebar lg:w-[50%]  sm:w-[100%] md:w-[100%]  relative pl-[12px] max-[991px]:pl-[0] max-[991px]:mt-[30px] max-[991px]:w-full">
                      <div className="single-pro-content">
                        <h5 className="gi-single-title text-[#4b5966] text-[22px] capitalize mb-[20px] block font-Poppins font-medium leading-[35px] tracking-[0.02rem] max-[1199px]:text-[20px] max-[1199px]:leading-[33px]  max-[767px]:text-[18px] max-[767px]:leading-[31px]">
                          {productData.name}
                        </h5>
                        <div className="gi-single-rating-wrap flex mb-[14px] items-center">
                          <div className="gi-single-rating pr-[15px] leading-[17px]">
                            <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                            <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                            <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                            <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                            <i className="gicon gi-star-o text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                          </div>
                          <span className="gi-read-review text-[#999] leading-[17px]">
                            |&nbsp;&nbsp;
                            <a
                              href="#gi-spt-nav-review"
                              className="text-[#999] text-[14px] leading-[20px] hover:text-[#5caf90]"
                            >
                              {productData.rating} Ratings
                            </a>
                          </span>
                        </div>
                        <div className="gi-single-price-stoke mb-[15px] pt-[15px] pb-[15px] flex justify-between">
                          <div className="gi-single-price flex flex-col">
                            <div className="final-price mb-[15px] text-[#4b5966] font-semibold text-[22px] leading-[32px] font-Poppins tracking-[0] max-[1199px]:text-[20px]">
                              ₹
                              {(productData.price * productData.discount) / 100}
                              <span className="price-des ml-[15px] text-[#5caf90] font-medium text-[18px] tracking-[0.02rem]">
                                -{productData.discount}%
                              </span>
                            </div>
                            <div className="mrp text-[#777]">
                              M.R.P. :
                              <span className="text-[#999] line-through">
                                ₹{productData.price}
                              </span>
                            </div>
                          </div>
                          <div className="gi-single-stoke flex flex-col">
                            <span className="gi-single-sku mb-[15px] text-[18px] leading-[32px] text-[#4b5966] font-semibold tracking-[0.02rem]">
                              SKU#: {productData.sku}
                            </span>
                            <span className="gi-single-ps-title leading-[1] text-[16px] text-[#5caf90] tracking-[0]">
                              {productData.stock.status}
                            </span>
                          </div>
                        </div>
                        <div className="gi-single-desc mb-[12px] text-[#777] text-[14px] tracking-[0] break-all leading-[26px] font-Poppins">
                          {productData.shortDescription}
                        </div>

                        <div className="gi-single-list">
                          <ul className="mb-[30px] pl-[18px]">
                            {productData.attributes.map((attr) => (
                              <li
                                key={attr._id}
                                className="my-[10px]  text-[#777] text-[14px] list-circle"
                              >
                                <strong>{attr.attributeName}:</strong>{" "}
                                {attr.attributeValue}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="gi-single-qty flex flex-wrap w-full m-[-5px]">
                          <div className="qty-plus-minus w-[120px] h-[40px] p-[10px] border-[1px] border-solid border-[#eee] overflow-hidden m-[5px] relative flex items-center justify-between rounded-[5px]">
                            <input
                              className="qty-input"
                              type="text"
                              name="ms_qtybtn"
                              value="1"
                              readOnly
                            />
                          </div>
                          <div className="gi-single-cart">
                            <button
                              type="button"
                              className="btn btn-primary gi-btn-1 flex h-[40px] leading-[50px] text-center text-[14px] m-[5px] py-[10px] px-[15px] uppercase justify-center  bg-AFPPrimary text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-[5px] items-center min-w-[160px] font-semibold tracking-[0.02rem] border-[0] hover:bg-[#75AFC6] hover:text-[#fff]"
                              onClick={() => addToCart(id)}
                            >
                              Add To Cart
                            </button>
                          </div>
                          <div className="gi-single-wishlist m-[5px]">
                            <a
                              className="gi-btn-group wishlist w-[40px] h-[40px] flex items-center justify-center transition-all duration-[0.3s] ease delay-[0s] text-[#fff] bg-AFPPrimary border-[1px] border-solid border-[#eee] rounded-[5px] hover:text-[#fff] hover:bg-[#75AFC6] hover:border-[#5caf90]"
                              title="Wishlist"
                              onClick={() =>
                                handleAddToWishlist(productData._id)
                              }
                              disabled={loading}
                            >
                              <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#fff] leading-[0]"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" hidden md:hidden sm:hidden lg:block lg:w-[15%]  md:ml-4 md:w-[15%] w-[100%]  md:h-[700px] border-[2px] bg-[#EEEEEE] p-4   font-[14px]">
                      <div className=" w-auto flex flex-wrap flex-col ">
                        <div className=" flex w-full">
                          <MdOutlineCurrencyRupee />
                          {productData.price}
                        </div>
                        <span className="  text-AFPPrimaryDark   ">
                          Free delivery
                        </span>
                        Monday, 20 May
                        <div className=" flex mt-2  items-center w-full gap-4">
                          <CiLocationOn className="  " />
                          <span className=" text-AFPPrimaryDark font-[12px]   leading-3.5">
                            Delivering to Noida 201309
                          </span>
                        </div>
                        <h6 className=" mt-4 py-4 text-green-800 font-bold">
                          {productData.stock.status}
                        </h6>
                        <h1>Sold By</h1>
                        <span className=" text-sm">
                          PROVEN WATER INDUSTRIES Pvt Ltd
                        </span>
                        <p className=" text-sm mt-4">Add a Protection Plan:</p>
                        <div className=" flex  gap-4  pt-4">
                          <input type="checkbox" className=" mt-2" />
                          <span className="  font-semibold  text-sm">
                            1 Year Extended Warranty for ₹299.95
                          </span>
                        </div>
                        <div className=" flex  gap-4  pt-1">
                          <input type="checkbox" className="  mt-2" />
                          <span className="  font-semibold  text-sm">
                            1 Year Extended Warranty for ₹299.95
                          </span>
                        </div>
                        <div className=" flex  gap-4  pt-1">
                          <input type="checkbox" />
                          <span className="  font-semibold  text-sm pb-4">
                            1 Year Extended Warranty for ₹299.95
                          </span>
                        </div>
                        <button
                          data-variant="flat"
                          className=" rounded-md text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-AFPPrimary text-white  hover:text-white hover:bg-gray-600 hover:shadow-cart h-8 mt-1 text-sm lg:text-base w-full sm:w-auto"
                          type="submit"
                        >
                          Add to cart
                        </button>
                        <button
                          data-variant="flat"
                          className=" rounded-md text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-AFPPrimary text-white  hover:text-white hover:bg-gray-600 hover:shadow-cart h-8 mt-1 text-sm lg:text-base w-full sm:w-auto"
                          type="submit"
                        >
                          Buy Now
                        </button>
                        <div className=" flex mt-4  items-center">
                          <CiLock /> <span> secure transaction</span>
                        </div>
                        <hr />
                        <hr />
                        <hr />
                        <button
                          data-variant="flat"
                          className=" rounded-md text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-gray-400 text-white  hover:text-white hover:bg-gray-600 hover:shadow-cart h-8 mt-1 text-sm lg:text-base w-full sm:w-auto"
                          type="submit"
                        >
                          Add to wish list
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="single-add-more my-[40px] max-[575px]:my-[30px]">
                <Slider {...settings} className="">
                  <div className=" h-full p-[15px] flex flex-row border-[1px] border-solid border-[#eee] rounded-[5px] bg-[#f8f8fb]">
                    <a
                      href=""
                      className=" py-[5px] px-[10px] absolute top-[5px] right-[5px]   text-[14px] font-medium bg-[#5caf90]  text-center rounded-[5px] "
                    >
                      +
                    </a>
                    <div className="add-more-img mr-[15px] relative">
                      <img
                        src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/8_1.jpg"
                        alt="product"
                        className="w-[75px] rounded-[5px] border-[1px] border-solid border-[#eee]"
                      />
                    </div>
                    <div className="add-more-info flex flex-col">
                      <h5 className="text-[#777] block text-[13px] leading-[20px] font-medium tracking-[0.85px] capitalize font-Poppins mb-[6px]">
                        Honey Spiced Nuts
                      </h5>
                      <span className="gi-pro-rating mb-[5px]">
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                      </span>
                      <span className="gi-price">
                        <span className="new-price text-[15px]">$32.00</span>
                        <span className="old-price ml-[5px] text-[14px] text-[#777] line-through">
                          $45.00
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className=" h-full p-[15px] flex flex-row border-[1px] border-solid border-[#eee] rounded-[5px] bg-[#f8f8fb]">
                    <a
                      href=""
                      className=" py-[5px] px-[10px] absolute top-[5px] right-[5px]   text-[14px] font-medium bg-[#5caf90]  text-center rounded-[5px] "
                    >
                      +
                    </a>
                    <div className="add-more-img mr-[15px] relative">
                      <img
                        src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/8_1.jpg"
                        alt="product"
                        className="w-[75px] rounded-[5px] border-[1px] border-solid border-[#eee]"
                      />
                    </div>
                    <div className="add-more-info flex flex-col">
                      <h5 className="text-[#777] block text-[13px] leading-[20px] font-medium tracking-[0.85px] capitalize font-Poppins mb-[6px]">
                        Honey Spiced Nuts
                      </h5>
                      <span className="gi-pro-rating mb-[5px]">
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                      </span>
                      <span className="gi-price">
                        <span className="new-price text-[15px]">$32.00</span>
                        <span className="old-price ml-[5px] text-[14px] text-[#777] line-through">
                          $45.00
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className=" h-full p-[15px] flex flex-row border-[1px] border-solid border-[#eee] rounded-[5px] bg-[#f8f8fb]">
                    <a
                      href=""
                      className=" py-[5px] px-[10px] absolute top-[5px] right-[5px]   text-[14px] font-medium bg-[#5caf90]  text-center rounded-[5px] "
                    >
                      +
                    </a>
                    <div className="add-more-img mr-[15px] relative">
                      <img
                        src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/8_1.jpg"
                        alt="product"
                        className="w-[75px] rounded-[5px] border-[1px] border-solid border-[#eee]"
                      />
                    </div>
                    <div className="add-more-info flex flex-col">
                      <h5 className="text-[#777] block text-[13px] leading-[20px] font-medium tracking-[0.85px] capitalize font-Poppins mb-[6px]">
                        Honey Spiced Nuts
                      </h5>
                      <span className="gi-pro-rating mb-[5px]">
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                      </span>
                      <span className="gi-price">
                        <span className="new-price text-[15px]">$32.00</span>
                        <span className="old-price ml-[5px] text-[14px] text-[#777] line-through">
                          $45.00
                        </span>
                      </span>
                    </div>
                  </div>{" "}
                  <div className=" h-full p-[15px] flex flex-row border-[1px] border-solid border-[#eee] rounded-[5px] bg-[#f8f8fb]">
                    <a
                      href=""
                      className=" py-[5px] px-[10px] absolute top-[5px] right-[5px]   text-[14px] font-medium bg-[#5caf90]  text-center rounded-[5px] "
                    >
                      +
                    </a>
                    <div className="add-more-img mr-[15px] relative">
                      <img
                        src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/8_1.jpg"
                        alt="product"
                        className="w-[75px] rounded-[5px] border-[1px] border-solid border-[#eee]"
                      />
                    </div>
                    <div className="add-more-info flex flex-col">
                      <h5 className="text-[#777] block text-[13px] leading-[20px] font-medium tracking-[0.85px] capitalize font-Poppins mb-[6px]">
                        Honey Spiced Nuts
                      </h5>
                      <span className="gi-pro-rating mb-[5px]">
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[12px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                        <i className="gicon gi-star inline-block text-[12px] float-left text-[#777] mr-[3px]"></i>
                      </span>
                      <span className="gi-price">
                        <span className="new-price text-[15px]">$32.00</span>
                        <span className="old-price ml-[5px] text-[14px] text-[#777] line-through">
                          $45.00
                        </span>
                      </span>
                    </div>
                  </div>
                </Slider>
              </div> */}

              <div className="gi-single-pro-tab mt-[40px]">
                <div className="gi-single-pro-tab-wrapper flex flex-col">
                  <div className="gi-single-pro-tab-nav w-full m-auto relative block text-center float-left">
                    <ul
                      className="nav-tabs inline-block float-left"
                      id="singleprotab"
                    >
                      <li
                        className={`mr-[5px] ml-auto mb-[5px] inline-block float-left ${
                          activeTab === "details" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("details")}
                      >
                        <a className="capitalize leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer bg-[#fff] text-[#4b5966] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                          Detail
                        </a>
                      </li>
                      <li
                        className={`mr-[5px] ml-auto mb-[5px] inline-block float-left ${
                          activeTab === "reviews" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("reviews")}
                      >
                        <a className="capitalize leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer bg-[#fff] text-[#4b5966] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]">
                          Reviews
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-content transition-all w-full overflow-hidden bg-[#fff] text-left p-[30px] border-[1px] border-solid border-[#eee] text-[#202020] text-[18px] tracking-[0] leading-[1.6] rounded-[5px]"
                    id="singleTabContent"
                  >
                    {activeTab === "details" && (
                      <div id="gi-spt-nav-details" className="tab-single-pane">
                        <div className="gi-single-pro-tab-desc">
                          <p
                            className="mb-[15px] text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal font-Poppins"
                            dangerouslySetInnerHTML={{
                              __html: productData.description,
                            }}
                          ></p>
                        </div>
                      </div>
                    )}
                    {activeTab === "reviews" && (
                      <div id="gi-spt-nav-review" className="tab-single-pane">
                        <div className="flex flex-wrap w-full">
                          <div className="gi-t-review-wrapper mt-[10px]">
                            <div className="gi-t-review-item flex mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">
                              <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                <img
                                  src="assets/img/user/1.jpg"
                                  alt="user"
                                  className="max-w-full rounded-[5px]"
                                />
                              </div>
                              <div className="gi-t-review-content">
                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                  <div className="gi-t-review-name text-[15px] m-[0] leading-[1.5] block text-[#4b5966]">
                                    Mariya Lykra
                                  </div>
                                  <div className="gi-t-review-rating mt-[5px]">
                                    <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                                  </div>
                                </div>
                                <div className="gi-t-review-bottom">
                                  <p className="w-full text-[14px] text-[#777] font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="gi-t-review-item flex mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">
                              <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                <img
                                  src="assets/img/user/2.jpg"
                                  alt="user"
                                  className="max-w-full rounded-[5px]"
                                />
                              </div>
                              <div className="gi-t-review-content">
                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                  <div className="gi-t-review-name text-[15px] m-[0] leading-[1.5] block text-[#4b5966]">
                                    Moris Willson
                                  </div>
                                  <div className="gi-t-review-rating mt-[5px]">
                                    <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                                    <i className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                                  </div>
                                </div>
                                <div className="gi-t-review-bottom">
                                  <p className="w-full text-[14px] text-[#777] font-normal">
                                    Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeBestSelling heading={"related product"} />
      <div className=" w-full flex ">
        <img
          className=" w-full h-full"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/06597ed9-24cc-488d-be90-cea49ede5bfa.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt=""
        />
      </div>
      <div className=" w-full flex justify-center items-center mx-auto pt-8">
        <img
          className=" w-full h-full"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef52858f-1cfe-4c02-acbb-e081122a0a22.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default Productnewdetails;
