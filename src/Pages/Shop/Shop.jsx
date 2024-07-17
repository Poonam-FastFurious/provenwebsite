import { useEffect, useState } from "react";
import ShopPageCard from "../../Components/Common/ShopPageCard";
import { Link } from "react-alice-carousel";
import { Baseurl } from "../../confige";
import ListCard from "../../Components/Common/ListCard";
function Shop() {
  const [activeTab, setActiveTab] = useState("grid");
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150000);
  useEffect(() => {
    // Simulating fetching data from API
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with properties like tag, price, description, title, offprice
        setProducts(data.products); // Store fetched data in state

        const extractedTags = data.products.flatMap((product) =>
          product.tags.map((tag) => ({
            id: `${product._id}_${tag}`,
            name: tag,
          }))
        );

        setTags(extractedTags);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/category/allcategory")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with properties like tag, price, description, title, offprice
        setCategory(data.data); // Store fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleCategoryChange = (categoryTitle) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryTitle)) {
        return prevSelectedCategories.filter((cat) => cat !== categoryTitle);
      } else {
        return [...prevSelectedCategories, categoryTitle];
      }
    });
  };
  const handleMinPriceChange = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };
  const clearAllCategories = () => {
    setSelectedCategories([]);
  };

  const filteredProducts = selectedCategories.length
    ? products.filter(
        (product) =>
          selectedCategories.includes(product.category) &&
          product.price >= minPrice &&
          product.price <= maxPrice
      )
    : products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );

  return (
    <>
      <section className="gi-category py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="gi-shop-rightside min-[992px]:order-[6] min-[768px]:order-[-1] min-[992px]:w-[75%] min-[768px]:w-full w-full px-[12px]">
              <div className="gi-pro-list-top flex items-center justify-between text-[14px] border-[1px] border-solid border-[#eee] rounded-[5px] mb-[30px]">
                <div className="min-[768px]:w-[50%] w-full gi-grid-list">
                  <div className="gi-gl-btn ml-[5px] flex items-center flex-row">
                    <button
                      type="button"
                      className={`grid-btn btn-grid-50 h-[40px] w-[40px] border-[0] rounded-[0] flex items-center justify-center flex-row ${
                        activeTab === "grid" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("grid")}
                    >
                      <i className="fi fi-rr-apps text-[20px] text-[#4b5966] leading-[0]"></i>
                    </button>
                    <button
                      type="button"
                      className={`grid-btn btn-list-50 h-[40px] w-[40px] border-[0] rounded-[0] flex items-center justify-center flex-row ${
                        activeTab === "list" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("list")}
                    >
                      <i className="fi fi-rr-list text-[20px] text-[#4b5966] leading-[0]"></i>
                    </button>
                    <div className="min-[768px]:w-[50%]  gi-sort-select md:block sm:block lg:hidden justify-end items-center flex">
                      <div className="gi-select-inner relative flex w-[10px] h-[50px] leading-[1.5] bg-[#fff] overflow-hidden rounded-[0] border-l-[1px] border-solid border-[#eee]">
                        <select
                          name="gi-select"
                          id="gi-select"
                          className="appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] cursor-pointer  "
                        >
                          <option>Ctegory</option>
                          <option value="1">Position</option>
                          <option value="2">Relevance</option>
                          <option value="3">Name, A to Z</option>
                          <option value="4">Name, Z to A</option>
                          <option value="5">Price, low to high</option>
                          <option value="6">Price, high to low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[768px]:w-[50%] w-full gi-sort-select flex justify-end items-center">
                  <div className="gi-select-inner relative flex w-[140px] h-[50px] leading-[1.5] bg-[#fff] overflow-hidden rounded-[0] border-l-[1px] border-solid border-[#eee]">
                    <select
                      name="gi-select"
                      id="gi-select"
                      className="appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] cursor-pointer"
                    >
                      <option selected="" disabled="">
                        Sort by
                      </option>
                      <option value="1">Position</option>
                      <option value="2">Relevance</option>
                      <option value="3">Name, A to Z</option>
                      <option value="4">Name, Z to A</option>
                      <option value="5">Price, low to high</option>
                      <option value="6">Price, high to low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="gi-select-bar mt-[-5px] mx-[-5px] mb-[25px] flex flex-wrap justify-end ">
                {selectedCategories.map((category, index) => (
                  <span
                    key={index}
                    className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize"
                  >
                    {category}
                    <Link
                      className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                      to="#"
                      onClick={() => handleCategoryChange(category)}
                    >
                      ×
                    </Link>
                  </span>
                ))}
                <span className="gi-select-btn gi-select-btn-clear m-[5px] p-[0] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  <Link
                    className="gi-select-clear transition-all duration-[0.3s] ease-in-out h-full m-[0] py-[3px] px-[10px] text-[14px] flex items-center bg-[#4b5966] text-[#fff] rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                    to="#"
                    onClick={clearAllCategories}
                  >
                    Clear All
                  </Link>
                </span>
              </div>
              <div className="  w-full">
                <div className="shop-pro-inner mx-[-12px] flex justify-center">
                  <div className="flex flex-wrap w-full ">
                    {activeTab === "grid" ? (
                      <>
                        {filteredProducts.map((product, index) => (
                          <ShopPageCard
                            key={index}
                            tag={product.tag}
                            price={product.price}
                            description={product.shortDescription}
                            title={product.name}
                            offprice={product.discount}
                            images={product.image}
                            ID={product._id}
                            atriutes={product.attributes}
                            rating={product.rating}
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        {filteredProducts.map((product, index) => (
                          <ListCard key={index} products={product} />
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="gi-shop-sidebar  hidden sm:hidden md:hidden lg:block xl:block sticky top-[24px] min-[992px]:order-[-1] min-[768px]:order-[6] min-[992px]:w-[25%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
              <div id="shop_sidebar">
                <div className="gi-sidebar-wrap p-[15px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Category
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px]">
                      <ul>
                        {category.map((cat, index) => (
                          <li key={index}>
                            <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                              <input
                                type="checkbox"
                                className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                                checked={selectedCategories.includes(
                                  cat.categoriesTitle
                                )}
                                onChange={() =>
                                  handleCategoryChange(cat.categoriesTitle)
                                }
                              />
                              <Link
                                to="#"
                                className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                              >
                                <span className="flex">
                                  {cat.categoriesTitle}
                                </span>
                              </Link>
                              <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Storage
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px]">
                      <ul>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                              checked
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              Medium
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              Large
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              Small
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              extra larg
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <Link
                              to="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              10ltr
                            </Link>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Price
                      </h3>
                    </div>
                    <div className="gi-sb-block-content gi-price-range-slider es-price-slider mt-[20px]">
                      <div className="gi-price-filter flex justify-between flex-col">
                        <div className="gi-price-input mb-[15px] p-[10px] flex justify-center items-center rounded-[5px] bg-[#f8f8fb]">
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            From
                            <input
                              type="number"
                              value={minPrice}
                              onChange={handleMinPriceChange}
                              className="w-full px-[10px] py-[5px] border-[1px] border-solid border-[#eee] rounded-[3px]"
                            />
                          </label>
                          <span className="gi-price-divider relative border-b-[1px] border-solid border-[#777] w-[10px] h-[1px] mx-[10px]"></span>
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            To
                            <input
                              type="number"
                              value={maxPrice}
                              onChange={handleMaxPriceChange}
                              className="w-full px-[10px] py-[5px] border-[1px] border-solid border-[#eee] rounded-[3px]"
                            />
                          </label>
                        </div>
                        <div
                          id="gi-sliderPrice"
                          className="filter__slider-price"
                          data-min="0"
                          data-max="250"
                          data-step="10"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        TRENDING Tags
                      </h3>
                    </div>

                    <div className="gi-tag-block gi-sb-block-content mt-[15px] ">
                      {tags.map((tag, index) => (
                        <Link
                          key={index}
                          to="#"
                          className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem]  bg-AFPPrimary  text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
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

export default Shop;
