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
import { useEffect, useState } from "react";
import { CiMobile4 } from "react-icons/ci";
import axios from "axios";
import { Baseurl } from "../../confige";
function Profile() {
  const [activeTab, setActiveTab] = useState("DashBoard");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isaddaddressvisible, setIsaddaddressvisible] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [notification, setNotification] = useState([]);
  const userId = localStorage.getItem("userid");
  const accessToken = localStorage.getItem("accessToken");
  const [showPassword, setShowPassword] = useState(false);
  // Retrieve user ID from local storage
  useEffect(() => {
    const userId = localStorage.getItem("userid");
    if (!userId) {
      console.error("User ID not found in local storage");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${Baseurl}/api/v1/user/getuser?id=${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const result = await response.json();
        setUserData(result.data.user); // Access user data from the response
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
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
  const handlepasswordchange = async (e) => {
    e.preventDefault();

    if (newPassword !== retypeNewPassword) {
      setMessage("New passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      const accessToken = localStorage.getItem("accessToken"); // Retrieve the access token from local storage

      if (!accessToken) {
        setMessage("Access token not found");
        return;
      }

      const response = await fetch(Baseurl + "/api/v1/user/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password changed successfully");
        setOldPassword("");
        setNewPassword("");
        setRetypeNewPassword("");
      } else {
        setMessage(data.message || "Error changing password");
      }
    } catch (error) {
      setMessage("Error changing password");
    }
  };
  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userid");

      if (!accessToken || !userId) {
        throw new Error("User information not found in local storage.");
      }

      const response = await axios.post(
        Baseurl + "/api/v1/user/logout",
        { id: userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userid");
        localStorage.removeItem("user"); // Remove user info if stored
        localStorage.removeItem("refreshToken");

        document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        // Redirect to login page or perform any other actions
        window.location.href = "/login"; // Example: redirect to login page
      } else {
        console.error("Failed to log out:", response);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const [formData, setFormData] = useState({
    userId: "6676b96793d44360934200c1",
    fullName: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "INDIA",
    addressType: "office",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userid");
    const accessToken = localStorage.getItem("accessToken");

    const dataToSend = {
      ...formData,
      userId: userId,
    };

    try {
      const response = await fetch(Baseurl + "/api/v1/address/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (response.ok) {
        "Address added successfully:", result;
      } else {
        console.error("Error adding address:", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    const fetchAddressDetails = async () => {
      try {
        const response = await fetch(
          `${Baseurl}/api/v1/address?userId=${userId}`,
          {
            method: "GET", // Assuming you use POST for sending data
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch address details");
        }

        const data = await response.json();
        setAddresses(data.data); // Assuming your API response has an 'addresses' array
      } catch (error) {
        console.error("Error fetching address details:", error);
      }
    };

    fetchAddressDetails();
  }, [userId, accessToken]);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Notification/allnotification")
      .then((response) => response.json())
      .then((data) => setNotification(data.data));
  }, []);
  return (
    <>
      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div className="relative overflow-hidden md:rounded-md shadow  h-52 bg-[url('https://img.freepik.com/free-photo/water-anime-style_23-2151080311.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="container relative mt-8 md:mt-12 ">
          <div className="md:flex">
            <div className=" md:mt-24 mt-16">
              <div className="relative md:-mt-48 ">
                <div className="p-6 rounded-md shadow  bg-white b">
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
                        <h5 className="">{userData.fullName}</h5>
                        <p className="">{userData.email}</p>
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

            <div className=" w-full  sm:ml-0 md:ml-4 lg:ml-4 xl:ml-4  ">
              {activeTab === "Orders" && (
                <div>
                  <Orderlist />
                </div>
              )}

              {activeTab === "DashBoard" && (
                <>
                  <div className="bg-white shadow-sm rounded-sm mt-4">
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
                          <div className="px-4 py-2"> {userData.fullName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Last Name
                          </div>
                          <div className="px-4 py-2">Raj</div>
                        </div>

                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Contact No.
                          </div>
                          <div className="px-4 py-2">{userData.mobile}</div>
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
                        {addresses.map((addres, index) => (
                          <div key={index} className=" border p-4">
                            <div className="flex items-center mb-4 justify-between">
                              <h5 className="text-xl font-medium">
                                {addres.addressType}{" "}
                              </h5>
                              <Link to="#" className=" text-AFPPrimary text-lg">
                                <FiEdit />
                              </Link>
                            </div>
                            <div className="pt-4 border-t border-gray-100 ">
                              <p className="text-lg font-medium mb-2">
                                {addres.fullName}
                              </p>

                              <ul className="list-none">
                                <li className="flex">
                                  <i
                                    data-feather="map-pin"
                                    className="size-4 me-2 mt-1"
                                  ></i>
                                  <p className="text-slate-400">
                                    {addres.streetAddress} <br />
                                    {addres.city} <br />
                                    {addres.postalCode}
                                  </p>
                                </li>

                                <li className="flex mt-1">
                                  <i
                                    data-feather="phone"
                                    className="size-4 me-2 mt-1"
                                  ></i>
                                  <p className="text-slate-400">
                                    +{addres.phoneNumber}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
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
                    <form onSubmit={handlepasswordchange}>
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
                              value={oldPassword}
                              onChange={(e) => setOldPassword(e.target.value)}
                              disabled={isLoading}
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
                              type={showPassword ? "text" : "password"}
                              className="ps-12 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-400  focus:ring-0"
                              placeholder="New password"
                              required=""
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none"
                            >
                              {showPassword ? (
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 14V10a2 2 0 012-2h0"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 14V10a2 2 0 012-2h0"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.6 15.6a9 9 0 01-12.8 0"
                                  />
                                </svg>
                              )}
                            </button>
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
                              value={retypeNewPassword}
                              onChange={(e) =>
                                setRetypeNewPassword(e.target.value)
                              }
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-AFPPrimary text-white rounded-md mt-5"
                      >
                        {isLoading ? "Saving..." : "Change password"}
                      </button>
                      {message && <p>{message}</p>}
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
                      {notification.map((notify, index) => (
                        <div className="flex justify-between pb-4" key={index}>
                          <h6 className="mb-0 font-medium">{notify.Detail}</h6>
                          <div className="">
                            <label
                              className="form-check-label"
                              htmlFor="noti1"
                            ></label>
                          </div>
                        </div>
                      ))}
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
                          handleLogout();
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
                className="fixed top-10 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Add New Address
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                      <div className=" border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="fullName"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Full name
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="phoneNumber"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Phone number
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (/^\d*$/.test(value)) {
                                    // Only allow digits
                                    setFormData({
                                      ...formData,
                                      phoneNumber: value,
                                    });
                                  }
                                }}
                                maxLength="10"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-6">
                            <label
                              htmlFor="streetAddress"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Street address
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="streetAddress" // Added id to match label's htmlFor attribute
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleChange}
                                className="block w-full  pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary sm:text-sm sm:leading-6"
                                placeholder="Enter your street address" // Added placeholder for better UX
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
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
                                value={formData.city}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              State
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="state"
                                id="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="postalCode"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              ZIP / Postal code
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="postalCode"
                                id="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary  sm:text-sm sm:leading-6"
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
                                value={formData.country}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option>India</option>
                              </select>
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="addressType"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Address Type
                            </label>
                            <div className="mt-2">
                              <select
                                id="addressType"
                                name="addressType"
                                value={formData.addressType}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-AFPPrimary  sm:text-sm sm:leading-6"
                              >
                                <option value="">Select address type</option>
                                <option value="home">Home</option>
                                <option value="office">Office</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-AFPPrimary  hover:bg-AFPPrimary  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
