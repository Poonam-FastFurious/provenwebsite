/* eslint-disable react/no-unescaped-entities */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick";

import Slider from "react-slick";

import { useState, useRef, useEffect } from "react";
import { CiLocationOn, CiLock } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import ReactImageMagnify from "react-image-magnify";

import { Link, useParams } from "react-router-dom";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handleAddToWishlist from "../Utilty/wishlistUtils";
import HomeBestSelling from "../../Pages/Home/HomeBestSelling";

function ProductDetails() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const addToWishlist = (productId) => {
    handleAddToWishlist(productId, setLoading);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${Baseurl}/api/v1/Product/product?id=${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.data);
        setImages([data.data.thumbnail, data.data.image]);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchProducts();
  }, [id]);
  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
  };

  const thumbSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    ref: (slider) => setNav2(slider),
    beforeChange: (current, next) => slider1.current.slickGoTo(next),
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
                          {...mainSliderSettings}
                          className="single-product-cover overflow-hidden cursor-zoom-in rounded-[5px]"
                          ref={slider1}
                        >
                          {images.map((src, index) => (
                            <div
                              key={index}
                              className="single-slide zoom-image-hover"
                            >
                              <ReactImageMagnify
                                {...{
                                  smallImage: {
                                    alt: `Product image ${index + 1}`,
                                    isFluidWidth: true,
                                    src,
                                  },
                                  largeImage: {
                                    src,
                                    width: 1200,
                                    height: 1800,
                                  },
                                  enlargedImageContainerStyle: { zIndex: 9 },
                                  lensStyle: {
                                    backgroundColor: "rgba(0,0,0,.6)",
                                  },
                                }}
                              />
                            </div>
                          ))}
                        </Slider>
                        <Slider
                          {...thumbSliderSettings}
                          className="single-nav-thumb w-full overflow-hidden"
                          ref={slider2}
                        >
                          {images.map((src, index) => (
                            <div
                              key={index}
                              className="single-slide px-[11px] pt-[11px]"
                            >
                              <img
                                className="img-responsive h-full w-full border-[1px] border-solid border-transparent transition-all duration-[0.3s] ease delay-[0s] cursor-pointer rounded-[5px]"
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => slider1.current.slickGoTo(index)}
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    <div className="single-pro-desc single-pro-desc-no-sidebar lg:w-[50%]  sm:w-[100%] md:w-[100%]  relative pl-[12px] max-[991px]:pl-[0] max-[991px]:mt-[30px] max-[991px]:w-full">
                      <div className="single-pro-content">
                        <h5 className="gi-single-title text-[#4b5966] text-[22px] capitalize mb-[20px] block font-Poppins font-medium leading-[35px] tracking-[0.02rem] max-[1199px]:text-[20px] max-[1199px]:leading-[33px]   max-[767px]:leading-[31px]">
                          {products.name}
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
                            <Link
                              to="#"
                              className="text-[#999] text-[14px] leading-[20px] hover:text-[#5caf90]"
                            >
                              {products.rating}Rating
                            </Link>
                          </span>
                        </div>
                        <div className="gi-single-price-stoke mb-[15px] pt-[15px] pb-[15px] flex justify-between">
                          <div className="gi-single-price flex flex-col">
                            <div className="final-price mb-[15px] text-[#4b5966] font-semibold text-[22px] leading-[32px] font-Poppins tracking-[0] max-[1199px]:text-[20px]">
                              Rs {products.price}
                              <span className="price-des ml-[15px] text-[#5caf90] font-medium text-[18px] tracking-[0.02rem]">
                                -{products.discount}%
                              </span>
                            </div>
                            <div className="mrp text-[#777]">
                              M.R.P. :
                              <span className="text-[#999] line-through">
                                ₹2,999.00
                              </span>
                            </div>
                          </div>
                          <div className="gi-single-stoke flex flex-col">
                            <span className="gi-single-sku mb-[15px] text-[18px] leading-[32px] text-[#4b5966] font-semibold tracking-[0.02rem]"></span>
                            <span className="gi-single-ps-title leading-[1] text-[16px] text-[#5caf90] tracking-[0]">
                              {products.stock && products.stock.status !== null
                                ? products.stock.status
                                : "null"}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <hr />
                        <hr />
                        <div className="gi-single-desc mb-[12px] text-[#777] text-[14px] tracking-[0] break-all leading-[26px] font-Poppins">
                          {products.shortDescription}
                        </div>
                        <div className="gi-single-list">
                          <ul className="mb-[30px] pl-[18px]">
                            <li className="my-[10px] text-[#777] text-[14px] list-circle">
                              <strong className="font-semibold">
                                Feature :
                              </strong>
                              RO FEATURE
                            </li>

                            <li className="my-[10px] text-[#777] text-[14px] list-circle">
                              <strong className="font-semibold">
                                Dimensions :
                              </strong>
                              Medium
                            </li>
                            <li className="my-[10px] text-[#777] text-[14px] list-circle">
                              <strong className="font-semibold">
                                Package Information :
                              </strong>
                              A-Grade Standard Quality
                            </li>
                          </ul>
                        </div>
                        <div className="gi-pro-variation mb-[20px] pb-[5px]">
                          <div className="gi-pro-variation-inner gi-pro-variation-size text-[16px] font-semibold text-[#4b5966] flex-col mb-[15px] flex">
                            <span className="mb-[10px] text-[#202020] font-medium text-[15px] leading-[1.1] tracking-[0.04rem] uppercase font-Poppins block">
                              Size
                            </span>
                            <div className="gi-pro-variation-content">
                              <ul>
                                <li className=" bg-AFPPrimary text-white h-[22px] font-normal transition-all duration-[0.3s] ease-in-out py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                  <span className="">Small</span>
                                </li>
                                <li className="h-[22px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                  <span>larg</span>
                                </li>
                                <li className="h-[22px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                  <span>extralarg</span>
                                </li>
                                <li className="h-[22px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                  <span>10ltr</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="gi-single-qty flex flex-wrap w-full m-[-5px]">
                          <div className="gi-single-cart">
                            <button
                              onClick={() => addToCart(id)}
                              type="button"
                              className="btn btn-primary gi-btn-1 flex h-[40px] leading-[50px] text-center text-[14px] m-[5px] py-[10px] px-[15px] uppercase justify-center  bg-AFPPrimary  text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-[5px] items-center min-w-[160px] font-semibold tracking-[0.02rem] border-[0] hover:bg-[#5caf90] hover:text-[#fff]"
                            >
                              Add To Cart
                            </button>
                          </div>
                          <div className="gi-single-wishlist m-[5px]">
                            <Link
                              onClick={() => addToWishlist(products._id)}
                              disabled={loading}
                              className="gi-btn-group wishlist w-[40px] h-[40px] flex items-center justify-center transition-all duration-[0.3s] ease delay-[0s] text-[#17181c] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90] hover:border-[#5caf90]"
                              title="Wishlist"
                            >
                              <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#4b5966] leading-[0]"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="pt-4">
                          <hr />
                          <hr />
                          <hr />
                        </div>
                      </div>
                      <div className="gi-single-pro-tab mt-[40px]">
                        <div className="gi-single-pro-tab-wrapper flex flex-col">
                          <div className="gi-single-pro-tab-nav w-full m-auto relative block text-center float-left">
                            <ul
                              className="nav-tabs inline-block float-left"
                              id="singleprotab"
                            >
                              <li className="active mr-[5px] ml-auto mb-[5px] inline-block float-left">
                                <Link
                                  to="#gi-spt-nav-details"
                                  className="capitalize py-[18px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer bg-[#fff] text-[#4b5966] border-[1px] border-solid border-[#eee] rounded-[5px] leading-[0] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]"
                                >
                                  Detail
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-content transition-all w-full overflow-hidden bg-[#fff] text-left p-[30px] border-[1px] border-solid border-[#eee] text-[#202020] text-[18px] tracking-[0] leading-[1.6] rounded-[5px]"
                            id="singleTabContent"
                          >
                            <div
                              id="gi-spt-nav-details"
                              className="tab-single-pane"
                            >
                              <div className="gi-single-pro-tab-desc">
                                <div className="mb-[15px] text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal font-Poppins">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: products.description,
                                    }}
                                  />
                                </div>
                                <ul className="mb-[15px] pl-[24px]">
                                  <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                                    Any Product types that You want - Simple,
                                    Configurable
                                  </li>
                                  <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                                    Downloadable/Digital Products, Virtual
                                    Products
                                  </li>
                                  <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                                    Inventory Management with Backordered items
                                  </li>
                                  <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                                    Flatlock seams throughout.
                                  </li>
                                </ul>
                                <p className="font-Poppins mb-[15px] text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged.
                                </p>
                                <p className="font-Poppins text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable. If you are going to
                                  use a passage of Lorem Ipsum, you need to be
                                  sure there isn't anything embarrassing hidden
                                  in the middle of text. All the Lorem Ipsum
                                  generators on the Internet tend to repeat
                                  predefined chunks as necessary, making this
                                  the first true generator on the Internet. It
                                  uses a dictionary of over 200 Latin words,
                                  combined with a handful of model sentence
                                  structures, to generate Lorem Ipsum which
                                  looks reasonable. The generated Lorem Ipsum is
                                  therefore always free from repetition,
                                  injected humour, or non-characteristic words
                                  etc.
                                </p>
                              </div>
                            </div>
                            <div
                              id="gi-spt-nav-info"
                              className="tab-single-pane"
                            >
                              <div className="gi-single-pro-tab-moreinfo">
                                <p className="font-Poppins text-[#777] text-[14px] font-normal leading-[28px] mb-[16px]">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries.
                                </p>
                                <ul className="pl-[24px]">
                                  <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                                    <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                                      Model
                                    </span>
                                    SKU140
                                  </li>
                                  <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                                    <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                                      Weight
                                    </span>
                                    500 g
                                  </li>
                                  <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                                    <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                                      Dimensions
                                    </span>
                                    35 × 30 × 7 cm
                                  </li>
                                  <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                                    <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                                      Color
                                    </span>
                                    Black, Pink, Red, White
                                  </li>
                                  <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                                    <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                                      Size
                                    </span>
                                    10 X 20
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              id="gi-spt-nav-vendor"
                              className="tab-single-pane"
                            ></div>
                            <div
                              id="gi-spt-nav-review"
                              className="tab-single-pane"
                            >
                              <div className="flex flex-wrap w-full">
                                <div className="gi-t-review-wrapper mt-[10px]">
                                  <div className="gi-t-review-item flex mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">
                                    <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                      <img
                                        src="https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg"
                                        alt="user"
                                        className="max-w-full rounded-[5px]"
                                      />
                                    </div>
                                    <div className="gi-t-review-content">
                                      <div className="gi-t-review-top flex flex-col mb-[10px]">
                                        <div className="gi-t-review-name text-[15px] m-[0] leading-[1.5] block text-[#4b5966]">
                                          demo user
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
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard dummy text ever since the
                                          1500s, when an unknown printer took a
                                          galley of type and scrambled it to
                                          make a type specimen.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gi-t-review-item flex mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">
                                    <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                      <img
                                        src="https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg"
                                        alt="user"
                                        className="max-w-full rounded-[5px]"
                                      />
                                    </div>
                                    <div className="gi-t-review-content">
                                      <div className="gi-t-review-top flex flex-col mb-[10px]">
                                        <div className="gi-t-review-name text-[15px] m-[0] leading-[1.5] block text-[#4b5966]">
                                          user 2
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
                                          Lorem Ipsum has been the industry's
                                          standard dummy text ever since the
                                          1500s, when an unknown printer took a
                                          galley of type and scrambled it to
                                          make a type specimen.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="gi-ratting-content w-full">
                                  <h3 className="mb-[10px] text-[20px] font-semibold leading-[1] font-Poppins text-[#4b5966] tracking-[0.01rem]">
                                    Add a Review
                                  </h3>
                                  <div className="gi-ratting-form">
                                    <form action="#">
                                      <div className="gi-ratting-star flex mt-[5px] mb-[25px] items-center">
                                        <span className="mr-[18px] text-[16px] text-[#777] tracking-[0.02rem]">
                                          Your rating:
                                        </span>
                                        <div className="gi-t-review-rating">
                                          <i className="gicon gi-star fill inline-block text-[18px] text-[#f27d0c] float-left mr-[3px]"></i>
                                          <i className="gicon gi-star fill inline-block text-[18px] text-[#f27d0c] float-left mr-[3px]"></i>
                                          <i className="gicon gi-star-o inline-block text-[18px] text-[#b2b2b2] float-left mr-[3px]"></i>
                                          <i className="gicon gi-star-o inline-block text-[18px] text-[#b2b2b2] float-left mr-[3px]"></i>
                                          <i className="gicon gi-star-o inline-block text-[18px] text-[#b2b2b2] float-left mr-[3px]"></i>
                                        </div>
                                      </div>
                                      <div className="gi-ratting-input mb-[10px]">
                                        <input
                                          name="your-name"
                                          placeholder="Name"
                                          type="text"
                                          className="text-[14px] rounded-[5px] w-full mb-[15px] py-[5px] px-[20px] outline-[0] border-[1px] border-solid border-[#eee] text-[#777] h-[50px]"
                                        />
                                      </div>
                                      <div className="gi-ratting-input mb-[10px]">
                                        <input
                                          name="your-email"
                                          placeholder="Email*"
                                          type="email"
                                          className="text-[14px] rounded-[5px] w-full mb-[15px] py-[5px] px-[20px] outline-[0] border-[1px] border-solid border-[#eee] text-[#777] h-[50px]"
                                          required
                                        />
                                      </div>
                                      <div className="gi-ratting-input form-submit">
                                        <textarea
                                          name="your-commemt"
                                          placeholder="Enter Your Comment"
                                          className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] h-[150px] p-[20px] mb-[15px] w-full outline-[0] text-[14px] rounded-[5px]"
                                        ></textarea>
                                        <button
                                          type="submit"
                                          className="gi-btn-2 transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" hidden md:hidden sm:hidden lg:block lg:w-[15%]  md:ml-4 md:w-[15%] w-[100%]  md:h-[700px] border-[2px] bg-[#EEEEEE] p-4   font-[14px]">
                      <div className=" w-auto flex flex-wrap flex-col ">
                        <div className=" flex w-full">
                          <MdOutlineCurrencyRupee />
                          {products.price}
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
                          In Stock
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
            </div>
          </div>
        </div>
      </section>

      <HomeBestSelling />
      <div className=" w-full flex justify-center items-center mx-auto p-4">
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

export default ProductDetails;
