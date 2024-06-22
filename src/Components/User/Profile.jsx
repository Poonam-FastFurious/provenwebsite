/* eslint-disable react/no-unescaped-entities */
import { FiEdit } from "react-icons/fi";
import Orderlist from "../User/Orderlist";
import { Link } from "react-router-dom";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import {
  MdDashboard,
  MdMarkEmailUnread,
  MdOutlinePersonAdd,
  MdWifiPassword,
} from "react-icons/md";
import { VscListUnordered } from "react-icons/vsc";
import { FaRegAddressCard } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { CiMobile4 } from "react-icons/ci";
function Profile() {
  const [activeTab, setActiveTab] = useState("DashBoard");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isaddaddressvisible, setIsaddaddressvisible] = useState(false);
  const handleAddAddressClick = () => {
    setIsaddaddressvisible(true);
  };

  const handleCloseModaladdress = () => {
    setIsaddaddressvisible(false);
  };
  const handleSignOutClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div className="relative overflow-hidden md:rounded-md shadow  h-52 bg-[url('https://img.freepik.com/free-photo/water-anime-style_23-2151080311.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="container relative mt-8 md:mt-12 ">
          <div className="md:flex">
            <div className="lg:w-1/4 md:w-1/3 md:mt-24 mt-16">
              <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow  bg-white ">
                  <div className="profile-pic text-center mb-5">
                    <input
                      id="pro-img"
                      name="profile-image"
                      type="file"
                      className="hidden"
                      onChange="loadFile(event)"
                    />
                    <div>
                      <div className="relative h-28 w-28 mx-auto">
                        <img
                          src="https://shreethemes.in/cartzio/layouts/assets/images/client/16.jpg"
                          className="rounded-full shadow  ring-4 ring-slate-50 "
                          id="profile-image"
                          alt=""
                        />
                        <label
                          className="absolute inset-0 cursor-pointer"
                          htmlFor="pro-img"
                        ></label>
                      </div>

                      <div className="mt-4">
                        <h5 className="text-lg font-semibold">Rahul demo</h5>
                        <p className="text-slate-400">rahul@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 ">
                    <ul
                      className="list-none sidebar-nav mb-0 pb-0"
                      id="navmenu-nav"
                    >
                      <li className="navbar-item account-menu">
                        <Link
                          to="#"
                          className={`navbar-link text-slate-400 flex items-center py-2 rounded ${
                            activeTab === "DashBoard" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("DashBoard")}
                        >
                          <span className="me-2 mb-0">
                            <MdDashboard />
                          </span>
                          <h6 className="mb-0 font-medium">DashBoard</h6>
                        </Link>
                      </li>

                      <li className="navbar-item account-menu">
                        <Link
                          to="#"
                          className={`navbar-link text-slate-400 flex items-center py-2 rounded ${
                            activeTab === "Orders" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("Orders")}
                        >
                          <span className="me-2 mb-0">
                            <VscListUnordered />
                          </span>
                          <h6 className="mb-0 font-medium">Orders</h6>
                        </Link>
                      </li>

                      <li className="navbar-item account-menu">
                        <Link
                          to="#"
                          className={`navbar-link text-slate-400 flex items-center py-2 rounded ${
                            activeTab === "Address" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("Address")}
                        >
                          <span className="me-2 mb-0">
                            <FaRegAddressCard />
                          </span>
                          <h6 className="mb-0 font-medium">Address</h6>
                        </Link>
                      </li>

                      <li className="navbar-item account-menu">
                        <Link
                          to="#"
                          className={`navbar-link text-slate-400 flex items-center py-2 rounded ${
                            activeTab === "Change Password" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("Change Password")}
                        >
                          <span className="me-2 mb-0">
                            <RiLockPasswordFill />
                          </span>
                          <h6 className="mb-0 font-medium">Change Password</h6>
                        </Link>
                      </li>
                      <li className="navbar-item account-menu">
                        <Link
                          to="#"
                          className={`navbar-link text-slate-400 flex items-center py-2 rounded ${
                            activeTab === "Notifications" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("Notifications")}
                        >
                          <span className="me-2 mb-0">
                            <IoMdNotificationsOutline />
                          </span>
                          <h6 className="mb-0 font-medium">Notifications</h6>
                        </Link>
                      </li>

                      <li className="navbar-item account-menu">
                        <Link
                          to="#"
                          className={`navbar-link text-slate-400 flex items-center py-2 rounded ${
                            activeTab === "settings" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("settings")}
                        >
                          <span className="me-2 mb-0">
                            <IoSettingsOutline />
                          </span>
                          <h6 className="mb-0 font-medium">Settings</h6>
                        </Link>
                      </li>

                      <li className="navbar-item account-menu">
                        <Link
                          to="#"
                          className="navbar-link text-slate-400 flex items-center py-2 rounded"
                          onClick={handleSignOutClick}
                        >
                          <span className="me-2 mb-0">
                            <IoIosLogOut />
                          </span>
                          <h6 className="mb-0 font-medium">Sign Out</h6>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full  ml-4  ">
              {activeTab === "Orders" && (
                <div>
                  <Orderlist />
                </div>
              )}

              {activeTab === "DashBoard" && (
                <>
                  <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border ">
                      <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">
                          Total Order
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          19238
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border ">
                      <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">
                          Pending Order
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          120
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border">
                      <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">
                          Deliverd Order
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          6389
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs border">
                      <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">
                          User vip
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          828
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span className="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            First Name
                          </div>
                          <div className="px-4 py-2">Rahul</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Last Name
                          </div>
                          <div className="px-4 py-2">Raj</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Gender</div>
                          <div className="px-4 py-2">Male</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Contact No.
                          </div>
                          <div className="px-4 py-2">+9876543210</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Address</div>
                          <div className="px-4 py-2">Noida sector 62</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Billing Address
                          </div>
                          <div className="px-4 py-2">Noida sector 62</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Email.</div>
                          <div className="px-4 py-2">
                            <Link className="" to="mailto:jane@example.com">
                              rahul@gmail.com
                            </Link>
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Birthday
                          </div>
                          <div className="px-4 py-2">jan 01, 2000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "Address" && (
                <>
                  <div className="lg:w-full md:w-full md:px-3  md:mt-0">
                    <div className="p-6 rounded-md shadow  bg-white  ">
                      <h6 className="text-slate-400 mb-0 flex justify-between">
                        The following addresses will be used on the checkout
                        page by default.
                        <button
                          type="button"
                          className="text-white  bg-AFPPrimary border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                          onClick={handleAddAddressClick}
                        >
                          Add address
                        </button>
                      </h6>

                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                        <div className=" border p-4">
                          <div className="flex items-center mb-4 justify-between">
                            <h5 className="text-xl font-medium">Home </h5>
                            <Link to="#" className=" text-AFPPrimary text-lg">
                              <FiEdit />
                            </Link>
                          </div>
                          <div className="pt-4 border-t border-gray-100 ">
                            <p className="text-lg font-medium mb-2">
                              Rahul Demo
                            </p>

                            <ul className="list-none">
                              <li className="flex">
                                <i
                                  data-feather="map-pin"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">
                                  Noida sector 62, <br /> Noida,India 201301
                                </p>
                              </li>

                              <li className="flex mt-1">
                                <i
                                  data-feather="phone"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">+9876543210</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border p-4">
                          <div className="flex items-center mb-4 justify-between">
                            <h5 className="text-xl font-medium">Office</h5>
                            <Link to="#" className="text-AFPPrimary  text-lg">
                              <FiEdit />
                            </Link>
                          </div>
                          <div className="pt-4 border-t border-gray-100 ">
                            <p className="text-lg font-medium mb-2">
                              Rahul demo
                            </p>

                            <ul className="list-none">
                              <li className="flex">
                                <i
                                  data-feather="map-pin"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">
                                  Noida sector 62, <br />
                                  Noida , India 201301
                                </p>
                              </li>

                              <li className="flex mt-1">
                                <i
                                  data-feather="phone"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">+9876543210</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "Change Password" && (
                <>
                  <div className=" w-[60%]">
                    <h5 className="text-lg font-semibold mb-4 ">
                      Change password :
                    </h5>
                    <form>
                      <div className="grid grid-cols-1 gap-5">
                        <div>
                          <label className="form-label font-medium">
                            Old password :
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="key"
                              className="w-4 h-4 absolute top-3 start-4"
                            >
                              <MdWifiPassword />
                            </i>
                            <input
                              type="password"
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-400  focus:ring-0"
                              placeholder="Old password"
                              required=""
                            />
                          </div>
                        </div>

                        <div>
                          <label className="form-label font-medium">
                            New password :
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="key"
                              className="w-4 h-4 absolute top-3 start-4"
                            >
                              <MdWifiPassword />
                            </i>
                            <input
                              type="password"
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-400  focus:ring-0"
                              placeholder="New password"
                              required=""
                            />
                          </div>
                        </div>

                        <div>
                          <label className="form-label font-medium">
                            Re-type New password :
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="key"
                              className="w-4 h-4 absolute top-3 start-4"
                            >
                              <MdWifiPassword />
                            </i>
                            <input
                              type="password"
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border border-gray-400  focus:ring-0"
                              placeholder="Re-type New password"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-AFPPrimary text-white rounded-md mt-5">
                        Save password
                      </button>
                    </form>
                  </div>
                </>
              )}
              {activeTab === "settings" && (
                <>
                  <div className="p-6 rounded-md shadow  bg-white ">
                    <h5 className="text-lg font-semibold mb-4">
                      Personal Detail :
                    </h5>
                    <form>
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div>
                          <label className="form-label font-medium">
                            First Name : <span className="text-red-600">*</span>
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="user"
                              className="w-4 h-4 absolute top-3 start-4"
                            >
                              <IoPersonOutline />
                            </i>
                            <input
                              type="text"
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0"
                              placeholder="First Name"
                              id="firstname"
                              name="name"
                              required=""
                            />
                          </div>
                        </div>
                        <div>
                          <label className="form-label font-medium">
                            Last Name : <span className="text-red-600">*</span>
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="user-check"
                              className="w-4 h-4 absolute top-3 start-4"
                            >
                              <MdOutlinePersonAdd />
                            </i>
                            <input
                              type="text"
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border border-gray-100  focus:ring-0"
                              placeholder="Last Name"
                              id="lastname"
                              name="name"
                              required=""
                            />
                          </div>
                        </div>
                        <div>
                          <label className="form-label font-medium">
                            Your Email : <span className="text-red-600">*</span>
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="mail"
                              className="w-4 h-4 absolute top-3 start-4"
                            >
                              <MdMarkEmailUnread />
                            </i>
                            <input
                              type="email"
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border border-gray-100  focus:ring-0"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>
                        <div>
                          <label className="form-label font-medium">
                            Mobile:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="bookmark"
                              className="w-4 h-4 absolute top-3 start-4"
                            >
                              <CiMobile4 />
                            </i>
                            <input
                              name="name"
                              id="occupation"
                              type="text"
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0"
                              placeholder="Mobile Number "
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1">
                        <div className="mt-5">
                          <label className="form-label font-medium">
                            Description :{" "}
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="message-circle"
                              className="w-4 h-4 absolute top-3 start-4"
                            ></i>
                            <textarea
                              name="comments"
                              id="comments"
                              className="ps-11 w-full py-2 px-3 h-28 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0"
                              placeholder="Message :"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center  bg-AFPPrimary text-white rounded-md mt-5"
                        value="Save Changes"
                      />
                    </form>
                  </div>
                </>
              )}
              {activeTab === "Notifications" && (
                <>
                  <div className="rounded-md shadow  bg-white ">
                    <div className="p-6 border-b border-gray-200 ">
                      <h5 className="text-lg font-semibold">
                        Account Notifications :
                      </h5>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between pb-4">
                        <h6 className="mb-0 font-medium">
                          When someone mentions me
                        </h6>
                        <div className="">
                          <input
                            className="form-checkbox rounded border-gray-400   text-AFPPrimaryDark focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"
                            type="checkbox"
                            value=""
                            id="noti1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="noti1"
                          ></label>
                        </div>
                      </div>
                      <div className="flex justify-between py-4 border-t border-gray-200 ">
                        <h6 className="mb-0 font-medium">
                          When someone follows me
                        </h6>
                        <div className="">
                          <input
                            className="form-checkbox rounded border-gray-400  text-AFPPrimaryDark focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"
                            type="checkbox"
                            value=""
                            id="noti2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="noti2"
                          ></label>
                        </div>
                      </div>
                      <div className="flex justify-between py-4 border-t border-gray-200 ">
                        <h6 className="mb-0 font-medium">
                          When shares my activity
                        </h6>
                        <div className="">
                          <input
                            className="form-checkbox rounded border-gray-400  text-AFPPrimaryDark focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"
                            type="checkbox"
                            value=""
                            id="noti3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="noti3"
                          ></label>
                        </div>
                      </div>
                      <div className="flex justify-between py-4 border-t border-gray-200 ">
                        <h6 className="mb-0 font-medium">
                          When someone messages me
                        </h6>
                        <div className="">
                          <input
                            className="form-checkbox rounded border-gray-400  text-AFPPrimaryDark focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"
                            type="checkbox"
                            value=""
                            id="noti4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="noti4"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {isModalVisible && (
              <div
                id="popup-modal"
                tabIndex="-1"
                className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow ">
                    <button
                      type="button"
                      className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                      onClick={handleCloseModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                      <svg
                        className="mx-auto mb-4 text-gray-400 w-12 h-12 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                        Are you sure you want to sign out?
                      </h3>
                      <button
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                        onClick={() => {
                          // Add your sign-out logic here
                          setIsModalVisible(false);
                        }}
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        onClick={handleCloseModal}
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isaddaddressvisible && (
              <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Add New Address
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                        onClick={handleCloseModaladdress}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <form className="p-4 md:p-5">
                      <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              First name
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Last name
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-6">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Country
                            </label>
                            <div className="mt-2">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option>India</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="street-address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Street address
                            </label>
                            <div className="mt-2">
                              <textarea
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2 sm:col-start-1">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              City
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              State
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              ZIP / Postal code
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
                      >
                        <svg
                          className="me-1 -ms-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Add address
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
