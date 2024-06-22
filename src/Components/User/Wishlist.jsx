import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <>
      <section className="gi-faq py-[40px] max-[767px]:py-[30px] gi-wishlist">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="gi-vendor-dashboard-card border-[1px] border-solid border-[#eee] rounded-[5px] overflow-y-auto">
                <div className="gi-vendor-card-header min-w-[700px] p-[30px] border-b-[1px] border-solid border-[#eee] flex justify-between items-center">
                  <h5 className="m-[0] text-[18px] uppercase font-bold text-[#777] tracking-[0.01rem] leading-[1.2]">
                    Wishlist
                  </h5>
                  <div className="gi-header-btn">
                    <Link
                      className="gi-btn-2 transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium  bg-AFPPrimary text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      to="/"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="gi-vendor-card-body min-w-[700px] p-[30px]">
                  <div className="gi-vendor-card-table">
                    <table className="table  w-full mb-[1rem]">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="p-[0.5rem] text-left text-[#4b5966]"
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="p-[0.5rem] text-left text-[#4b5966]"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="p-[0.5rem] text-left text-[#4b5966]"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="p-[0.5rem] text-left text-[#4b5966]"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="p-[0.5rem] text-left text-[#4b5966]"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="p-[0.5rem] text-left text-[#4b5966]"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="p-[0.5rem] text-left text-[#4b5966]"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt border-t-[3px]  border-solid border-[#dee2e6]">
                        <tr className="pro-gl-content">
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              225
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <img
                              className="prod-img h-[58px] w-[58px]"
                              src="https://provenonline.in/wp-content/uploads/2022/10/61K-kJIs0JL._SL1500_.jpg"
                              alt="product image"
                            />
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              Domestic Ro
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              16 Jul 2021
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              Rs65
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#5caf90] tracking-[0.02rem]">
                              Available
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="tbl-btn py-[14px] flex text-[#777]">
                              <Link
                                className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-AFPPrimary text-[#fff] text-center rounded-[5px] hover:bg-green-800 hover:text-[#fff]"
                                to="#"
                                title="Add To Cart"
                              >
                                <i className="fi-rr-shopping-basket leading-[10px]"></i>
                              </Link>
                              <Link
                                className="gi-btn-1 gi-remove-wish mx-[3px]  font-normal btn w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px]  bg-AAFGOLDEN text-[#fff] text-center rounded-[5px] hover:bg-red-400 hover:text-[#fff]"
                                to="#"
                                title="Remove From List"
                              >
                                ×
                              </Link>
                            </span>
                          </td>
                        </tr>
                        <tr className="pro-gl-content">
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              548
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <img
                              className="prod-img h-[58px] w-[58px]"
                              src="https://provenonline.in/wp-content/uploads/2022/10/61K-kJIs0JL._SL1500_.jpg"
                              alt="product image"
                            />
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              Industrial Ro
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              13 may 2024
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                              Rs68
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="max-[767px]:text-[14px] py-[14px] flex text-[#e9abab] tracking-[0.02rem]">
                              Out Of Stock
                            </span>
                          </td>
                          <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                            <span className="tbl-btn py-[14px] flex text-[#777]">
                              <Link
                                className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium  bg-AFPPrimary text-[#fff] text-center rounded-[5px] hover:bg-green-800 hover:text-[#fff]"
                                to="#"
                                title="Add To Cart"
                              >
                                <i className="fi-rr-shopping-basket leading-[10px]"></i>
                              </Link>
                              <Link
                                className="gi-btn-1 gi-remove-wish mx-[3px]   btn w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-AAFGOLDEN text-[#fff] text-center rounded-[5px] hover:bg-red-400 hover:text-[#fff]"
                                to="#"
                                title="Remove From List"
                              >
                                ×
                              </Link>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wishlist;
