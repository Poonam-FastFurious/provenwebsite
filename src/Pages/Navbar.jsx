/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../confige";
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
  const [category, setCategory] = useState([]);

  const [hoveredImage, setHoveredImage] = useState(
    "https://provenonline.in/wp-content/uploads/2023/01/612vp1CNrKL._SL1500_.jpg"
  );

  const handleMouseOver = (imageSrc) => {
    setHoveredImage(imageSrc);
  };

  const handleMouseOut = () => {
    setHoveredImage(
      "https://provenonline.in/wp-content/uploads/2023/01/612vp1CNrKL._SL1500_.jpg"
    );
  };
  useEffect(() => {
    fetch(Baseurl + "/api/v1/category/allcategory")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of image URLs
        setCategory(data.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);
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
                        src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
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
                            <li className="dropdown drop-list static ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                              <Link
                                to="/Water-purifier"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                              >
                                Water Purifiers
                                <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
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
                                    {category.slice(8, 13).map((cat, index) => (
                                      <li
                                        key={index}
                                        onMouseOver={() =>
                                          handleMouseOver(cat.image)
                                        }
                                        onMouseOut={handleMouseOut}
                                      >
                                        <Link
                                          to="#"
                                          className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                        >
                                          <span className=" text-md">
                                            {cat.categoriesTitle}
                                          </span>
                                          <br />
                                          Explore (35 Products)
                                        </Link>
                                      </li>
                                    ))}
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
                                          to="#"
                                          className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                        >
                                          <span className=" text-md">
                                            {cat.categoriesTitle}
                                          </span>
                                          <br />
                                          Explore (35 Products)
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                  <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                    {category.slice(8, 13).map((cat, index) => (
                                      <li
                                        key={index}
                                        onMouseOver={() =>
                                          handleMouseOver(cat.image)
                                        }
                                        onMouseOut={handleMouseOut}
                                      >
                                        <Link
                                          to="#"
                                          className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                        >
                                          <span className=" text-md">
                                            {cat.categoriesTitle}
                                          </span>
                                          <br />
                                          Explore (35 Products)
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown drop-list static ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                              <Link
                                to="/Book-Demo"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                              >
                                Book Demo
                              </Link>
                            </li>
                            <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                              <Link
                                to="/Water-purifier"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                              >
                                Spare Parts
                              </Link>
                            </li>
                            <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                              <Link
                                to="/AboutUs"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                              >
                                About Us
                                <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                              </Link>
                            </li>
                            <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                              <Link
                                to="#"
                                className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                              >
                                Certifications
                              </Link>
                            </li>
                            <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                              <Link
                                to="/Support"
                                className="transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                              >
                                Support
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
                    <div className="gi-acc-drop relative">
                      <Link
                        to="/Login"
                        className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                        title="Account"
                      >
                        <div className="header-icon relative flex">
                          <i className="fi-rr-user text-[24px] leading-[17px]"></i>
                        </div>
                        <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden">
                          <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                            Login
                          </span>
                        </div>
                      </Link>
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
                            to="/profile"
                          >
                            My Accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-AFPPrimary"
                            to="#"
                          >
                            Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-AFPPrimary"
                            to="#"
                          >
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <Link
                      to="/wishlist"
                      className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Wishlist"
                    >
                      <div className="header-icon relative flex">
                        <i className="fi-rr-heart text-[24px] leading-[17px]"></i>
                      </div>
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden">
                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                          Wishlist
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/Cart"
                      className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Cart"
                    >
                      <div className="header-icon relative flex">
                        <i className="fi-rr-shopping-bag text-[24px] leading-[17px]"></i>
                      </div>
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden">
                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                          Cart
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="grow-[1] shrink-[0] basis-[0%] min-[576px]:flex justify-end items-center min-[992px]:hidden">
                  <div className="gi-header-bottons flex justify-end">
                    <div className="right-icons flex flex-row">
                      <Link
                        to="/profile"
                        className="gi-header-btn gi-header-user mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                      >
                        <div className="header-icon relative flex">
                          <i className="fi-rr-user text-[24px] leading-[17px]"></i>
                        </div>
                      </Link>

                      <Link
                        to="wishlist"
                        className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                      >
                        <div className="header-icon relative flex">
                          <i className="fi-rr-heart text-[24px] leading-[17px]"></i>
                        </div>
                        <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                          4
                        </span>
                      </Link>

                      <Link
                        to="/Cart"
                        className="gi-header-btn gi-cart-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                      >
                        <div className="header-icon relative flex">
                          <i className="fi-rr-shopping-bag text-[24px] leading-[17px]"></i>
                          <span className="main-label-note-new"></span>
                        </div>
                        <span className="gi-header-count gi-cart-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                          3
                        </span>
                      </Link>

                      <Link
                        to="#"
                        data-drawer-target="drawer-navigation"
                        data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation"
                        className=" gi-site-menu-icon transition-all duration-[0.3s] ease-in-out  flex text-[#4b5966]"
                      >
                        <i className="fi-rr-menu-burger text-[24px] leading-[17px] sm:hidden md:hidden lg:hidden  hide-on-mobile menudemo"></i>
                      </Link>
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
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 "
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase "
        >
          <img
            className=" w-20"
            src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
            alt=""
          />
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
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
              <AccordionItem title="Product summary">
                <Link
                  to="#"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Water Purifier
                </Link>
                <Link
                  to="#"
                  className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
                >
                  Water Purifier
                </Link>
              </AccordionItem>
            </li>
            <li className="relative">
              <Link
                to="#"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Book Demo
              </Link>
            </li>
            <li className="relative">
              <Link
                to="#"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Spare Parts
              </Link>
            </li>
            <li className="dropdown ">
              <Link
                to="#"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                About Us
              </Link>
            </li>
            <li className="relative">
              <Link
                to="#"
                className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Certifications
              </Link>
            </li>
            <li className="relative pt-2">
              <Link
                to="#"
                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] text-[15px] font-medium"
              >
                Book Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
