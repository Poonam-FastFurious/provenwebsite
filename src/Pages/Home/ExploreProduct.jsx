import { useEffect, useState } from "react";
import ShopPageCard from "../../Components/Common/ShopPageCard";
import { Baseurl } from "../../confige";

function ExploreProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating fetching data from API
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with properties like tag, price, description, title, offprice
        setProducts(data.products); // Store fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <section
      className="gi-product-tab gi-products py-[40px] max-[767px]:py-[30px] wow fadeInUp"
      data-wow-duration="2s"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col">
          <div className="gi-main-title">
            <div className="section-title mb-[20px] pb-[20px] flex flex-start ml-4">
              <div className="section-detail">
                <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                  New <span className="text-[#5caf90]">Arrivals</span>
                </h2>
                <p className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px] font-light">
                  Shop online for new arrivals and get free shipping!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-pro-content p-6">
          <div className="shop-pro-inner">
            <div className="flex flex-wrap w-full">
              {products.map((product, index) => (
                <ShopPageCard
                  key={index}
                  tag={product.tag}
                  price={product.price}
                  description={product.description}
                  title={product.name}
                  offprice={product.discount}
                  images={product.thumbnail}
                  ID={product._id}
                />
              ))}
              {products.map((product, index) => (
                <ShopPageCard
                  key={index}
                  tag={product.tag}
                  price={product.price}
                  description={product.description}
                  title={product.name}
                  offprice={product.discount}
                  images={product.thumbnail}
                  ID={product._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreProduct;
