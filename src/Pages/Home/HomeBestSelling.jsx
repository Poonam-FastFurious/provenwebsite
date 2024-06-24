import ProductLatestCard from "../../Components/Common/ProductLatestCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Baseurl } from "../../confige";
function HomeBestSelling() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array and you want the first product in this example
        const productData = data.products[0]; // Adjust according to your API response structure
        const { name, thumbnail, price, rating, _id } = productData;
        setProduct({ name, thumbnail, price, rating, _id });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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
          slidesToScroll: 4,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="gi-deal-section py-[44px] max-[767px]:py-[30px] wow fadeInUp "
        data-wow-duration="2s"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
            <div className="gi-deal-section w-full">
              <div className="gi-products">
                <div
                  className="section-title mb-[20px] relative flex justify-between pb-[20px] z-[5] max-[767px]:flex-col"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="section-detail">
                    <h2 className="gi-title mb-[0] text-[25px] font-semibold text-AFPPrimary relative inline p-[0] capitalize leading-[1]  font-manrope max-[991px]:text-[25px] max-[767px]:text-[25px] max-[575px]:text-[25px]">
                      Best Selling Purifiers
                      <span className=""></span>
                    </h2>
                    <p className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px]">
                      Don wait. The time will never be just right.
                    </p>
                  </div>
                  <div
                    id="dealend"
                    className="dealend-timer max-[767px]:mt-[15px]"
                  ></div>
                </div>
                <div
                  className="gi-deal-block mx-[-12px]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <Slider
                    {...settings}
                    className="deal-slick-carousel flex gi-product-slider"
                  >
                    <ProductLatestCard
                      name={product.name}
                      images={product.thumbnail}
                      prices={product.price}
                      ratings={product.rating}
                      ID={product._id}
                    />
                    <ProductLatestCard
                      name={product.name}
                      images={product.thumbnail}
                      prices={product.price}
                      ratings={product.rating}
                      ID={product._id}
                    />
                    <ProductLatestCard
                      name={product.name}
                      images={product.thumbnail}
                      prices={product.price}
                      ratings={product.rating}
                      ID={product._id}
                    />{" "}
                    <ProductLatestCard
                      name={product.name}
                      images={product.thumbnail}
                      prices={product.price}
                      ratings={product.rating}
                      ID={product._id}
                    />{" "}
                    <ProductLatestCard
                      name={product.name}
                      images={product.thumbnail}
                      prices={product.price}
                      ratings={product.rating}
                      ID={product._id}
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBestSelling;
