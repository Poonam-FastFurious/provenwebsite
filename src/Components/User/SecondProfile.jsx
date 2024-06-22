import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbAddressBook } from "react-icons/tb";
import { Link } from "react-router-dom";

function SecondProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="gi-checkout-section py-10 text-sm  ">
        <h2 className="hidden">Checkout Page</h2>
        <div className="flex flex-wrap justify-between items-center mx-auto relative ">
          <div className="flex flex-wrap sm:w-full  md:justify-center">
            <div className="sm:w-auto  sm:hidden md:block hidden w-[100%]">
              <div className=" w-auto">
                <div className="w-[100%] h-auto  items-center  flex  ">
                  <div className="relative flex flex-col  bg-white text-gray-700  w-full max-w-[20rem] p-5   border">
                    <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                      <div
                        onClick={() => handleTabChange("profile")}
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        Dashboard
                      </div>
                      <div
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        Orders
                      </div>
                      <div
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        Track orders
                        <div className="grid place-items-center ml-auto justify-self-end">
                          <div
                            className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full"
                            style={{ opacity: "1" }}
                          >
                            <span className="">14</span>
                          </div>
                        </div>
                      </div>
                      <div
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <FaShoppingCart className=" text-xl" />
                        </div>
                        Shoping Cart
                        <div className="grid place-items-center ml-auto justify-self-end">
                          <div
                            className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full"
                            style={{ opacity: "1" }}
                          >
                            <span className="">14</span>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => handleTabChange("wishlist")}
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <FaHeart className=" text-xl" />
                        </div>
                        Wishlist
                        <div className="grid place-items-center ml-auto justify-self-end">
                          <div
                            className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full"
                            style={{ opacity: "1" }}
                          >
                            <span className="">14</span>
                          </div>
                        </div>
                      </div>
                      <div
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <TbAddressBook className="text-xl" />
                        </div>
                        Address
                      </div>
                      <div
                        onClick={() => handleTabChange("Password")}
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <RiLockPasswordFill className=" text-xl" />
                        </div>
                        Change Password
                      </div>
                      <div
                        onClick={() => handleTabChange("setting")}
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        Settings
                      </div>
                      <div
                        role="button"
                        tabIndex="0"
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <div className="grid place-items-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        Log Out
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {activeTab === "profile" && (
              <div className="sm:w-[40%]    border">
                <div>
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      <img src="" alt="" />
                      User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some information about the user.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          Demo user
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          demouser@example.com
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          9876543210
                        </dd>
                      </div>
                      <div className="py-12 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          sector 63
                          <br />
                          noida
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Password" && (
              <div className=" sm:w-[40%]  w-[100%]   border">
                <div className=" ">
                  <form className=" p-12 mx-auto">
                    <div className="grid md:grid-cols-1 md:gap-6">
                      <div className="mb-5">
                        <label
                          htmlFor="base-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Old Password
                        </label>
                        <input
                          type="text"
                          id="base-input"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-5 ">
                        <label
                          htmlFor="base-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          New Password
                        </label>
                        <input
                          type="text"
                          id="base-input"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-6">
                      <div className="mb-5 pt-4">
                        <label
                          htmlFor="base-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Confirm password
                        </label>
                        <input
                          type="text"
                          id="base-input"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className=" w-[40%]   border">
                <div className="gi-vendor-card-body min-w-[700px] p-[30px]">
                  <div className="gi-vendor-card-table">
                    <table className="table  w-full mb-[1rem]">
                      <thead>
                        <tr>
                          <th className="p-[0.5rem] text-left text-[#4b5966]">
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
            )}
            {activeTab === "setting" && (
              <div className=" w-[40%]   border">
                <section className="gi-register  max-[767px]:py-[30px]">
                  <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full">
                      <div className="gi-register-wrapper max-w-[934px] my-[0] mx-auto ">
                        <div className="gi-register-container p-[30px] text-left bg-[#fff] rounded-[5px] max-[575px]:p-[15px]">
                          <div className="gi-register-form">
                            <form
                              action="#"
                              method="post"
                              className="flex flex-row flex-wrap mx-[-15px]"
                            >
                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  First Name*
                                </label>
                                <input
                                  type="text"
                                  name="firstname"
                                  placeholder="Enter your first name"
                                  className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                  required
                                />
                              </span>
                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  Last Name*
                                </label>
                                <input
                                  type="text"
                                  name="lastname"
                                  placeholder="Enter your last name"
                                  className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                  required
                                />
                              </span>
                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  Email*
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Enter your email add..."
                                  className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                  required
                                />
                              </span>
                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  Phone Number*
                                </label>
                                <input
                                  type="text"
                                  name="phonenumber"
                                  placeholder="Enter your phone number"
                                  className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                  required
                                />
                              </span>

                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  City *
                                </label>
                                <span className="gi-rg-select-inner w-full h-[50px] p-[0] mb-[30px] relative flex rounded-[5px] border-[1px] border-solid border-[#eee] text-[14px] text-left">
                                  <select
                                    name="gi_select_city"
                                    id="gi-select-city"
                                    className="gi-register-select appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] font-light cursor-pointer"
                                  >
                                    <option selected disabled>
                                      City
                                    </option>
                                    <option value="1">City 1</option>
                                    <option value="2">City 2</option>
                                    <option value="3">City 3</option>
                                    <option value="4">City 4</option>
                                    <option value="5">City 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  Post Code
                                </label>
                                <input
                                  type="text"
                                  name="postalcode"
                                  placeholder="Post Code"
                                  className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                />
                              </span>
                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  Country *
                                </label>
                                <span className="gi-rg-select-inner w-full h-[50px] p-[0] mb-[30px] relative flex rounded-[5px] border-[1px] border-solid border-[#eee] text-[14px] text-left">
                                  <select
                                    name="gi_select_country"
                                    id="gi-select-country"
                                    className="gi-register-select appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] font-light cursor-pointer"
                                  >
                                    <option selected disabled>
                                      Country
                                    </option>
                                    <option value="1">Country 1</option>
                                    <option value="2">Country 2</option>
                                    <option value="3">Country 3</option>
                                    <option value="4">Country 4</option>
                                    <option value="5">Country 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                  Region State
                                </label>
                                <span className="gi-rg-select-inner w-full h-[50px] p-[0] mb-[30px] relative flex rounded-[5px] border-[1px] border-solid border-[#eee] text-[14px] text-left">
                                  <select
                                    name="gi_select_state"
                                    id="gi-select-state"
                                    className="gi-register-select appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] font-light cursor-pointer"
                                  >
                                    <option selected disabled>
                                      State
                                    </option>
                                    <option value="1">State 1</option>
                                    <option value="2">State 2</option>
                                    <option value="3">State 3</option>
                                    <option value="4">State 4</option>
                                    <option value="5">State 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="gi-register-wrap gi-recaptcha w-full flex justify-center px-[15px]">
                                <span
                                  className="g-recaptcha"
                                  data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
                                  data-callback="verifyRecaptchaCallback"
                                  data-expired-callback="expiredRecaptchaCallback"
                                ></span>
                                <input
                                  className="form-control hidden w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                  data-recaptcha="true"
                                  required
                                  data-error="Please complete the Captcha"
                                />
                                <span className="help-block with-errors"></span>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondProfile;
