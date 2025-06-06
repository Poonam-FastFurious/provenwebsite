/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Baseurl } from "../confige";
import axios from "axios";
import logo from "../assets/Images/logoproven.png";
import categorydefulthower from "../assets/Images/categorydefulthower.jpg";
import { MdOutlineManageAccounts } from "react-icons/md";
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-solid border-gray-300 mb-6 p-4 rounded-md">
      <button
        className="w-full text-left flex items-center justify-between  text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`w-3 h-3 transform transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [category, setCategory] = useState([]);
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [productCount, setProductCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        if (!token) {
          console.error("No token provided.");
          return;
        }

        // Cart API call
        const cartResponse = await axios.get(`${Baseurl}/api/v1/cart/product`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const cartData = cartResponse.data.cart;
        const cartProductCount = cartData.items.length;
        setProductCount(cartProductCount);

        // Wishlist API call
        const wishlistResponse = await axios.get(`${Baseurl}/api/v1/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const wishlistData = wishlistResponse.data.wishlist;
        const wishlistProductCount = wishlistData.items.length;
        setWishlistCount(wishlistProductCount);
      } catch (error) {
        console.error("Error fetching cart or wishlist data:", error);
      }
    };

    // Polling: Fetch cart and wishlist counts every 5 seconds
    const intervalId = setInterval(fetchCounts, 5000);

    // Fetch counts immediately on mount
    fetchCounts();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [token]);
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp < currentTime) {
          // Token is expired
          setIsTokenExpired(true);
          setIsLoggedIn(false);
          localStorage.removeItem("accessToken");
          setToken(null);
        } else {
          // Token is valid
          setIsTokenExpired(false);
          setIsLoggedIn(true);
        }
      } catch (error) {
        // Error decoding token, assume token is invalid
        setIsTokenExpired(true);
        setIsLoggedIn(false);
        localStorage.removeItem("accessToken");
        setToken(null);
      }
    } else {
      // No token found
      setIsTokenExpired(false);
      setIsLoggedIn(false);
    }
  }, [token]);

  const [hoveredImage, setHoveredImage] = useState(categorydefulthower);

  const handleMouseOver = (imageSrc) => {
    setHoveredImage(imageSrc);
  };

  const handleMouseOut = () => {
    setHoveredImage(categorydefulthower);
  };
  useEffect(() => {
    fetch(Baseurl + "/api/v1/category/allcategory")
      .then((response) => response.json())
      .then((data) => {
        // Filter out categories with the title "Spare Parts"
        const filteredCategories = data.data.filter(
          (cat) => cat.categoriesTitle !== "Spare Parts"
        );
        setCategory(filteredCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

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
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };
  useEffect(() => {
    if (isTokenExpired) {
      window.location.href = "/"; // Adjust redirect as needed
    }
  }, [isTokenExpired]);
  return (
    <>
      <header
        className={`gi-header bg-[#fff] z-[14] max-[1024px]:z-[16] relative  border`}
      >
        <div className="gi-header-bottom py-[12px] max-[1024px]:py-[10px] max-[1024px]:border-b-[1px] border-solid border-[#eee]">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap px-[12px]">
              <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col">
                <div className="self-center gi-header-logo max-[575px]:mb-[15px]">
                  <div className="header-logo text-left">
                    <Link to="/">
                      <img
                        src={logo}
                        alt="Site Logo"
                        className="w-[230px] max-[1399px]:w-[180px] max-[1199px]:w-[150px] max-[991px]:w-[120px] max-[767px]:w-[100px]"
                      />
                    </Link>
                  </div>
                </div>

                <div className="w-full items-center min-[992px]:block hidden">
                  <div className="nav-desk">
                    <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                      <div className="basis-auto w-full self-center">
                        <div className="gi-main-menu flex">
                          <ul className="w-full flex justify-center flex-wrap pl-[0]">
                            <li
                              className={`dropdown drop-list static ml-[10px] mr-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px] ${
                                activeMenu === "Water-purifier" ? "active" : ""
                              }`}
                            >
                              <Link
                                to="/Water-purifier"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                                onClick={() =>
                                  handleMenuClick("Water-purifier")
                                }
                              >
                                Water Purifiers
                              </Link>
                              <ul className="mega-menu block transition-all duration-[0.3s] ease-in-out w-full max-[1399px]:mx-[12px] max-[1399px]:w-[calc(100%-24px)] mt-[15px] absolute bg-[#fff] pl-[30px] opacity-0 invisible left-0 z-[15] border-[1px] border-solid border-[#eee] truncate">
                                <li className="flex">
                                  <span className="bg"></span>
                                  <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                    <li>
                                      <img src={hoveredImage} alt="" />
                                    </li>
                                  </ul>
                                  <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                    {category.slice(0, 5).map((cat, index) => (
                                      <li
                                        key={index}
                                        onMouseOver={() =>
                                          handleMouseOver(cat.image)
                                        }
                                        onMouseOut={handleMouseOut}
                                      >
                                        <Link
                                          to={`/Productctegory/${cat.categoriesTitle}`}
                                          className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                        >
                                          <span className=" text-md">
                                            {cat.categoriesTitle}
                                          </span>
                                          <br />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                  <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                    {category.slice(5, 10).map((cat, index) => (
                                      <li
                                        key={index}
                                        onMouseOver={() =>
                                          handleMouseOver(cat.image)
                                        }
                                        onMouseOut={handleMouseOut}
                                      >
                                        <Link
                                          to={`/Productctegory/${cat.categoriesTitle}`}
                                          className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                        >
                                          <span className=" text-md">
                                            {cat.categoriesTitle}
                                          </span>
                                          <br />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                  <ul className="mega-block w-[calc(25%-30px)] mr-[20px] py-[15px] block">
                                    {category
                                      .slice(10, 15)
                                      .map((cat, index) => (
                                        <li
                                          key={index}
                                          onMouseOver={() =>
                                            handleMouseOver(cat.image)
                                          }
                                          onMouseOut={handleMouseOut}
                                        >
                                          <Link
                                            to={`/Productctegory/${cat.categoriesTitle}`}
                                            className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                          >
                                            <span className=" text-md">
                                              {cat.categoriesTitle}
                                            </span>
                                            <br />
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className={`dropdown drop-list static ml-[10px] mr-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px] ${
                                activeMenu === "Book-Demo" ? "active" : ""
                              }`}
                            >
                              <Link
                                to="/Book-Demo"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                                onClick={() => handleMenuClick("Book-Demo")}
                              >
                                Book Demo
                              </Link>
                            </li>
                            <li
                              className={`dropdown drop-list relative ml-[10px] mr-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px] ${
                                activeMenu === "Spare-Parts" ? "active" : ""
                              }`}
                            >
                              <Link
                                to="/Spare_Parts"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                                onClick={() => handleMenuClick("Spare-Parts")}
                              >
                                Spare Parts
                              </Link>
                            </li>
                            <li
                              className={`dropdown drop-list relative ml-[10px] mr-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px] ${
                                activeMenu === "AboutUs" ? "active" : ""
                              }`}
                            >
                              <Link
                                to="/AboutUs"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                                onClick={() => handleMenuClick("AboutUs")}
                              >
                                About Us
                              </Link>
                            </li>
                            <li
                              className={`dropdown drop-list relative ml-[10px] mr-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px] ${
                                activeMenu === "Client" ? "active" : ""
                              }`}
                            >
                              <Link
                                to="/Client"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                                onClick={() => handleMenuClick("Client")}
                              >
                                Client
                              </Link>
                            </li>
                            <li
                              className={`"non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px] ${
                                activeMenu === "Hydrogen-Water" ? "active" : ""
                              }`}
                            >
                              <Link
                                to="/Hydrogen-Water"
                                className="transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                                onClick={() =>
                                  handleMenuClick("Hydrogen-Water")
                                }
                              >
                                Hydrogen-Water
                              </Link>
                            </li>
                            <li
                              className={`${
                                activeMenu === "Copper-Water" ? "active" : ""
                              }non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]`}
                            >
                              <Link
                                to="/Copper-Water"
                                className="transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                              >
                                Copper-Water
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gi-header-action self-center max-[991px]:hidden">
                  <div className="gi-header-bottons flex justify-end">
                    <Link
                      to="#"
                      className="gi-header-btn  h-icon gi-search-icon mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Search"
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                      <div className="header-icon relative flex">
                        <i className="fi-rr-search text-[24px] leading-[17px] max-[575px]:text-[#fff] max-[575px]:text-[18px]"></i>
                      </div>
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden"></div>
                    </Link>
                    {isSearchOpen && (
                      <div className="gi-search-menu w-full h-[30%] fixed top-[0] left-[0] bg-[#000000cc] z-[17]">
                        <div className="gi-search-wrapper h-full w-full relative flex items-center justify-center">
                          <Link
                            to="#"
                            className="gi-close-search absolute top-[30px] right-[30px] text-[#fff] text-[30px] leading-[20px]"
                            title="Close"
                            onClick={() => setIsSearchOpen(false)}
                          >
                            ×
                          </Link>
                          <form
                            className="gi-form relative flex items-center justify-center max-[575px]:w-[100%] max-[575px]:px-[15px]"
                            onSubmit={handleSearchSubmit}
                          >
                            <input
                              className="gi-popup-search w-[500px] max-[575px]:w-[100%] bg-transparent border-[0] border-b-[2px] border-solid outline-[0] border-[#fff]  h-[50px] bg-white text-black"
                              type="text"
                              name="u"
                              placeholder="Search here"
                              value={searchQuery}
                              onChange={handleSearchChange}
                            />
                            <i className="fi-rr-search ml-[-17px] text-[#fff]"></i>
                            <button
                              type="submit"
                              className="gi-popup-search-button p-[0]"
                              name="search"
                            >
                              <i className="ion-ios-search-strong mr-[-17px] text-[#fff]"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                    <div className="gi-acc-drop relative">
                      <Link
                        to="/Login"
                        className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                        title="Account"
                      >
                        <div className="header-icon relative flex">
                          {isLoggedIn ? (
                            <MdOutlineManageAccounts className="text-[34px] leading-[17px]  text-gray-500" /> // Show the login icon when logged in
                          ) : (
                            <i className="fi-rr-user text-[24px] leading-[17px]"></i> // Show the default icon when not logged in
                          )}
                        </div>
                        <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden">
                          <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                            {isLoggedIn ? "" : ""}
                          </span>
                        </div>
                      </Link>
                      {isLoggedIn && (
                        <ul className="gi-dropdown-menu min-w-[150px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff] block opacity-0 invisible left-[0] right-[auto] border-[1px] border-solid border-[#eee]">
                          <li>
                            <Link
                              className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-AFPPrimary"
                              to="/profile"
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-AFPPrimary"
                              to="/OrderList"
                            >
                              My Orders
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-AFPPrimary"
                              to="/Support"
                            >
                              Support
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={handleLogout}
                              className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-AFPPrimary"
                              to="#"
                            >
                              Log Out
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <Link
                      to="/wishlist"
                      className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Wishlist"
                    >
                      <div className="header-icon relative flex">
                        <i className="fi-rr-heart text-[24px] leading-[17px]"></i>
                      </div>
                      <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                      {wishlistCount}
                      </span>
                    </Link>

                    <Link
                      to="/Cart"
                      className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Cart"
                    >
                      <div className="header-icon relative flex">
                        <i className="fi-rr-shopping-bag text-[24px] leading-[17px]"></i>
                      </div>
                      <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                        {productCount}
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="grow-[1] shrink-[0] basis-[0%] min-[576px]:flex justify-end items-center min-[992px]:hidden">
                  <div className="gi-header-bottons flex justify-end">
                    <div className="right-icons flex flex-row">
                      <Link
                        to="#"
                        className="gi-header-btn gi-header-user mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                      >
                        <div className="header-icon relative flex">
                          <i
                            className="fi-rr-search text-[24px] text-[#4b5966] leading-[17px]"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                          ></i>
                        </div>
                      </Link>
                      {isSearchOpen && (
                        <div className="gi-search-menu w-full h-[30%] fixed top-[0] left-[0] bg-[#000000cc] z-[17]">
                          <div className="gi-search-wrapper h-full w-full relative flex items-center justify-center">
                            <Link
                              to="#"
                              className="gi-close-search absolute top-[30px] right-[30px] text-[#fff] text-[30px] leading-[20px]"
                              title="Close"
                              onClick={() => setIsSearchOpen(false)}
                            >
                              ×
                            </Link>
                            <form
                              className="gi-form relative flex items-center justify-center max-[575px]:w-[100%] max-[575px]:px-[15px]"
                              onSubmit={handleSearchSubmit}
                            >
                              <input
                                className="gi-popup-search w-[500px] max-[575px]:w-[100%] bg-transparent border-[0]  border-solid outline-[0] border-[#fff] text-black h-[50px] bg-white"
                                type="text"
                                name="u"
                                placeholder="Search here"
                                value={searchQuery}
                                onChange={handleSearchChange}
                              />
                              <i className="fi-rr-search ml-[-17px] text-[#fff]"></i>
                              <button
                                type="submit"
                                className="gi-popup-search-button p-[0]"
                                name="search"
                              >
                                <i className="ion-ios-search-strong mr-[-17px] text-[#fff]"></i>
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                      <Link
                        to="/profile"
                        className="gi-header-btn gi-header-user mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                      >
                        <div className="header-icon relative flex">
                          {isLoggedIn ? (
                            <MdOutlineManageAccounts className="text-[34px] leading-[17px]  text-gray-500" /> // Show the login icon when logged in
                          ) : (
                            <i className="fi-rr-user text-[24px] leading-[17px]"></i> // Show the default icon when not logged in
                          )}
                        </div>
                      </Link>

                      <Link
                        to="/wishlist"
                        className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                      >
                        <div className="header-icon relative flex">
                          <i className="fi-rr-heart text-[24px] leading-[17px]"></i>
                        </div> <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                      {wishlistCount}
                      </span>
                      </Link>

                      <Link
                        to="/Cart"
                        className="gi-header-btn gi-cart-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                      >
                        <div className="header-icon relative flex">
                          <i className="fi-rr-shopping-bag text-[24px] leading-[17px]"></i>
                          <span className="main-label-note-new"></span>
                        </div> <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                        {productCount}
                      </span>
                      </Link>

                      <button
                        onClick={toggleDrawer}
                        className=" gi-site-menu-icon transition-all duration-[0.3s] ease-in-out  flex text-[#4b5966]"
                      >
                        <i className="fi-rr-menu-burger text-[24px] leading-[17px] sm:hidden md:block lg:hidden  hide-on-mobile menudemo"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase "
        >
          <img className=" w-20" src={logo} alt="logo" />
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center "
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
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul>
            <li className="dropdown relative">
              <AccordionItem title="Product">
                <Link
                  onClick={toggleDrawer}
                  to="/Water-purifier"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Water Purifier
                </Link>
                <Link
                  onClick={toggleDrawer}
                  to="/Productctegory/Domestic Ro"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Domestic Ro
                </Link>
                <Link
                  onClick={toggleDrawer}
                  to="/Productctegory/Industrial Ro"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Industrial Ro
                </Link>
                <Link
                  onClick={toggleDrawer}
                  to="/Productctegory/Commercial Ro"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Commercial Ro
                </Link>
              </AccordionItem>
            </li>
            <li className="relative"></li>
            <li className="relative">
              <Link
                onClick={toggleDrawer}
                to="/Spare_Parts"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Spare Parts
              </Link>
            </li>
            <li className="dropdown ">
              <Link
                onClick={toggleDrawer}
                to="/AboutUs"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                About Us
              </Link>
            </li>
            <li className="dropdown ">
              <Link
                onClick={toggleDrawer}
                to="/contact-us"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Contact-Us
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={toggleDrawer}
                to="/Client"
                className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Client
              </Link>
            </li>
            <li className="relative pt-2">
              <Link
                onClick={toggleDrawer}
                to="/Book-Demo"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Book Demo
              </Link>
            </li>
            <li className="relative pt-2">
              <Link
                onClick={toggleDrawer}
                to="/Hydrogen-Water"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Hydrogen-Water
              </Link>
            </li>
            <li className="relative pt-2">
              <Link
                onClick={toggleDrawer}
                to="/Copper-Water"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Copper-Water
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
