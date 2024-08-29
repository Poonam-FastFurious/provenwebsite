import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Quickviewmodal({ product, closeModal }) {
  return (
    <div>
      {console.log(product)}
      <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
        <div className="gi-modal-overlay w-full h-screen  fixed top-0 left-0 z-[30] bg-[#000000b3]"></div>
        <div className="modal gi-modal max-[575px]:w-full fixed top-[50%] left-[50%] z-[30] max-[767px]:w-full  max-[767px]:max-h-full max-[767px]:overflow-y-auto">
          <div className="modal-dialog modal-dialog-centered h-full my-[0%] mx-auto max-w-[900px] w-[900px] max-[991px]:max-w-[650px] max-[991px]:w-[650px] max-[767px]:w-[80%] max-[767px]:h-auto max-[767px]:max-w-[80%] max-[767px]:m-[0] max-[767px]:py-[35px] max-[767px]:mx-auto max-[575px]:w-[90%] transition-transform duration-[0.3s] ease-out">
            <div className="modal-content quickview-modal p-[30px] relative bg-[#fff] rounded-[5px] max-[360px]:p-[15px]">
              <button
                onClick={closeModal}
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
                            src="assets/img/product-images/10_1.jpg"
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
                          to="#"
                          className="mb-[15px] block text-[#4b5966] text-[22px] leading-[1.5] font-medium max-[991px]:text-[20px]"
                        >
                          {product.name}
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
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1900s,
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
    </div>
  );
}

export default Quickviewmodal;
