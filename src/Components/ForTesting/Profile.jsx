import { FiEdit } from "react-icons/fi";
import Orderlist from "../User/Orderlist";
import { Link } from "react-router-dom";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboard, MdWifiPassword } from "react-icons/md";
import { VscListUnordered } from "react-icons/vsc";
import { FaRegAddressCard } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("DashBoard");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('https://shreethemes.in/cartzio/layouts/assets/images/hero/pages.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="container relative mt-8 md:mt-12 ">
          <div className="md:flex">
            <div className="lg:w-1/4 md:w-1/3 md:mt-24 mt-16">
              <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
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
                          className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
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
                        <p className="text-slate-400">rahul@hotmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-gray-700">
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
                          <div className="px-4 py-2">Jane</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Last Name
                          </div>
                          <div className="px-4 py-2">Doe</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Gender</div>
                          <div className="px-4 py-2">Female</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Contact No.
                          </div>
                          <div className="px-4 py-2">+11 998001001</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Current Address
                          </div>
                          <div className="px-4 py-2">
                            Beech Creek, PA, Pennsylvania
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Permanant Address
                          </div>
                          <div className="px-4 py-2">
                            Arlington Heights, IL, Illinois
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Email.</div>
                          <div className="px-4 py-2">
                            <Link className="" to="mailto:jane@example.com">
                              jane@example.com
                            </Link>
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Birthday
                          </div>
                          <div className="px-4 py-2">Feb 06, 1998</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "Address" && (
                <>
                  <div className="lg:w-full md:w-full md:px-3  md:mt-0">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                      <h6 className="text-slate-400 mb-0">
                        The following addresses will be used on the checkout
                        page by default.
                      </h6>
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                        <div className=" border p-4">
                          <div className="flex items-center mb-4 justify-between">
                            <h5 className="text-xl font-medium">
                              Billing Address:
                            </h5>
                            <Link to="#" className="text-orange-500 text-lg">
                              <FiEdit />
                            </Link>
                          </div>
                          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-lg font-medium mb-2">
                              Jesus Zamora
                            </p>

                            <ul className="list-none">
                              <li className="flex">
                                <i
                                  data-feather="map-pin"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">
                                  C/54 Northwest Freeway, Suite 558, <br />{" "}
                                  Houston, USA 485
                                </p>
                              </li>

                              <li className="flex mt-1">
                                <i
                                  data-feather="phone"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">+123 897 5468</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border p-4">
                          <div className="flex items-center mb-4 justify-between">
                            <h5 className="text-xl font-medium">
                              Shipping Address:
                            </h5>
                            <Link to="#" className="text-orange-500 text-lg">
                              <FiEdit />
                            </Link>
                          </div>
                          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-lg font-medium mb-2">
                              Jesus Zamora
                            </p>

                            <ul className="list-none">
                              <li className="flex">
                                <i
                                  data-feather="map-pin"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">
                                  C/54 Northwest Freeway, Suite 558, <br />{" "}
                                  Houston, USA 485
                                </p>
                              </li>

                              <li className="flex mt-1">
                                <i
                                  data-feather="phone"
                                  className="size-4 me-2 mt-1"
                                ></i>
                                <p className="text-slate-400">+123 897 5468</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </>
              )}

              {activeTab === "Change Password" && (
                <>
                  <div>
                    <h5 className="text-lg font-semibold mb-4">
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
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
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
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
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
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
