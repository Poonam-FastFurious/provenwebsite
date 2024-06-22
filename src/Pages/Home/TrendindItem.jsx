/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HorizentalCard from "./HorizentalCard";
import { useEffect, useState } from "react";

import { Baseurl } from "../../confige";

function TrendingItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${Baseurl}/api/v1/Product/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // Assuming data is the array of products
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="gi-offer-section overflow-hidden py-[40px] max-[767px]:py-[30px] ">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap ">
            <div
              className="w-full gi-all-product-content mb-[40px] wow fadeInUp "
              data-wow-delay=".4s"
            >
              <div className="w-full px-[12px]">
                <div className="section-title mb-[0] pb-[15px]">
                  <div className="section-detail">
                    <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                      Trending <span className="text-[#5caf90]">Items</span>
                    </h2>
                  </div>
                </div>
              </div>
              <Slider {...settings}>
                {products.map((product) => (
                  <HorizentalCard
                    key={product._id} // Assuming each product has a unique id
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    images={product.thumbnail}
                  />
                ))}
              </Slider>
            </div>
            <div
              className="w-full gi-all-product-content mb-[40px] wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="w-full px-[12px]">
                <div className="section-title mb-[0] pb-[15px]">
                  <div className="section-detail">
                    <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                      Top <span className="text-[#5caf90]">Rated</span>
                    </h2>
                  </div>
                </div>
              </div>
              <Slider {...settings}>
                {products.map((product) => (
                  <HorizentalCard
                    key={product._id} // Assuming each product has a unique id
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    images={product.thumbnail}
                  />
                ))}
              </Slider>
            </div>
            <div
              className="w-full gi-all-product-content mb-[40px] wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="w-full px-[12px]">
                <div className="section-title mb-[0] pb-[15px]">
                  <div className="section-detail">
                    <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                      Top <span className="text-[#5caf90]">Selling</span>
                    </h2>
                  </div>
                </div>
              </div>
              <Slider {...settings}>
                {products.map((product) => (
                  <HorizentalCard
                    key={product._id} // Assuming each product has a unique id
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    images={product.thumbnail}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrendingItem;
