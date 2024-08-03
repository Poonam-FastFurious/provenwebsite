/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Slider from "react-slick";

import { useParams } from "react-router-dom";
import { Baseurl } from "../../confige";
import { CiLocationOn, CiLock } from "react-icons/ci";
import { toast } from "react-toastify";
import HomeBestSelling from "../../Pages/Home/HomeBestSelling";

function Productdetailswitvedio() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [loading, setLoading] = useState(false);

  const productCoverSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
  };

  const navThumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    ref: (slider) => setNav2(slider),
  };

  useEffect(() => {
    fetch(`${Baseurl}/api/v1/Product/product?id=${id}`)
      .then((response) => response.json())
      .then((data) => setProductData(data.product))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);
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
  if (!productData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="gi-single-product py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
          <div className="flex flex-wrap w-full">
            <div className="gi-pro-rightside gi-common-rightside min-[992px]:w-[100%] w-full px-[12px]">
              <div className="single-pro-block">
                <div className="single-pro-inner">
                  <div className="w-full flex flex-wrap">
                    <div className="single-pro-img single-pro-img-no-sidebar lg:w-[30%] w-full relative  max-[991px]:pl-[12px] max-[991px]:w-full max-[991px]:max-w-[500px] max-[991px]:m-auto max-[420px]:px-[0]">
                      <div className="single-product-scroll p-[15px] sticky top-[30px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                        {productData ? (
                          <>
                            <Slider
                              {...productCoverSettings}
                              className="single-product-cover overflow-hidden cursor-zoom-in rounded-[5px]"
                            >
                              {productData.thumbnail.map((media, index) => (
                                <div
                                  className="single-slide zoom-image-hover"
                                  key={index}
                                >
                                  <img
                                    src={media}
                                    alt={`Product Image ${index + 1}`}
                                    className="img-responsive h-full w-full"
                                  />
                                </div>
                              ))}
                              {productData.youtubeVideoLink && (
                                <div
                                  className="single-slide"
                                  key="youtube-video"
                                >
                                  <iframe
                                    width="100%"
                                    height="315"
                                    src={productData.youtubeVideoLink.replace(
                                      "watch?v=",
                                      "embed/"
                                    )}
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              )}
                            </Slider>
                            <Slider
                              {...navThumbSettings}
                              className="single-nav-thumb w-full overflow-hidden"
                            >
                              {productData.thumbnail.map((media, index) => (
                                <div
                                  className="single-slide px-[11px] pt-[11px]"
                                  key={index}
                                >
                                  <img
                                    src={media}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="img-responsive h-full w-full"
                                  />
                                </div>
                              ))}
                              {productData.youtubeVideoLink && (
                                <div
                                  className="single-slide px-[11px] pt-[11px]"
                                  key="youtube-video-thumb"
                                >
                                  <img
                                    src={`https://img.youtube.com/vi/${
                                      productData.youtubeVideoLink.split(
                                        "v="
                                      )[1]
                                    }/hqdefault.jpg`}
                                    alt="YouTube Video Thumbnail"
                                    className="img-responsive h-full w-full"
                                  />
                                </div>
                              )}
                            </Slider>
                          </>
                        ) : (
                          <p>Loading...</p>
                        )}
                      </div>
                    </div>
                    <div className="single-pro-desc single-pro-desc-no-sidebar lg:w-[50%]  sm:w-[100%] md:w-[100%]  relative pl-[12px] max-[991px]:pl-[0] max-[991px]:mt-[30px] max-[991px]:w-full">
                      <div className="single-pro-content">
                        <h5 className="gi-single-title text-[#4b5966] text-[22px] capitalize mb-[20px] block font-Poppins font-medium leading-[35px] tracking-[0.02rem] max-[1199px]:text-[20px] max-[1199px]:leading-[33px]  max-[767px]:text-[18px] max-[767px]:leading-[31px]">
                          {productData.title}
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
                              Average ratting
                            </a>
                          </span>
                        </div>
                        <div className="gi-single-price-stoke mb-[15px] pt-[15px] pb-[15px] flex justify-between">
                          <div className="gi-single-price flex flex-col">
                            <div className="final-price mb-[15px] text-[#4b5966] font-semibold text-[22px] leading-[32px] font-Poppins tracking-[0] max-[1199px]:text-[20px]">
                              ₹{productData.price}
                              <span className="price-des ml-[15px] text-[#5caf90] font-medium text-[18px] tracking-[0.02rem]">
                                -{productData.discount}%
                              </span>
                            </div>
                            <div className="mrp text-[#777]">
                              M.R.P. :
                              <span className="text-[#999] line-through">
                                ₹{productData.cutPrice}
                              </span>
                            </div>
                          </div>
                          <div className="gi-single-stoke flex flex-col">
                            <span className="gi-single-sku mb-[15px] text-[18px] leading-[32px] text-[#4b5966] font-semibold tracking-[0.02rem]">
                              SKU#: {productData.sku}
                            </span>
                            <span className="gi-single-ps-title leading-[1] text-[16px] text-[#5caf90] tracking-[0]">
                              Stock:{productData.stocks}
                            </span>
                          </div>
                        </div>
                        <div className="gi-single-desc mb-[12px] text-[#777] text-[14px] tracking-[0] break-all leading-[26px] font-Poppins">
                          {productData.shortDescription}
                        </div>

                        <div className="gi-single-qty flex flex-wrap w-full m-[-5px]">
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
                          ₹ {productData.price}
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
                          In stock {productData.stocks}
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
                          onClick={() => addToCart(id)}
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
                          onClick={() => handleAddToWishlist(productData._id)}
                          disabled={loading}
                        >
                          Add to wish list
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="gi-single-pro-tab mt-[40px]">
                      <div className="gi-single-pro-tab-wrapper flex flex-col">
                        <div className="gi-single-pro-tab-desc">
                          <p className="mb-[15px] text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: productData.description,
                              }}
                            ></div>
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Productdetailswitvedio;
