import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Baseurl } from "../../confige";

function Testimonial() {
  const [testimonial, settestimonial] = useState([]);

  useEffect(() => {
    fetch(Baseurl + "/api/v1/testimonial/alltestimonial")
      .then((res) => res.json())
      .then((data) => settestimonial(data.data));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 422,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={`full-${index}`}
            className="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            key="half"
            className="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            <path
              d="M7 0L4.5313 3.60213L0.342604 4.83688L3.00556 8.29787L2.8855 12.6631L7 11.2V0Z"
              className="fill-[#CED5D8]"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <svg
            key={`empty-${index}`}
            className="w-4 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        ))}
      </>
    );
  };

  return (
    <div className="lg:p-12 p-4 font-[sans-serif] bg-AFPPrimary">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-4">
            <h2 className="text-white sm:text-4xl text-2xl font-extrabold text-center tracking-normal">
              Loved by Our Testimonials
            </h2>
            <p className="text-xl text-white tracking-wide mt-4 leading-relaxed sm:pb-16 pb-0 text-center">
              What People are Saying
            </p>
          </div>
        </div>

        <Slider {...settings} className="testimonial-slider w-full p-8">
          {testimonial.map((testi, index) => (
            <div
              className="p-6 rounded-lg bg-white shadow-md py-12  h-auto"
              key={index}
            >
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-gray-800 text-sm font-extrabold">
                    {testi.name}
                  </h4>
                  <p className="mt-0.5 text-xs text-gray-400">{testi.email}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-800 text-sm leading-relaxed">
                  {testi.message}
                </p>
              </div>

              <div className="flex space-x-1 mt-4">
                {renderStars(testi.rating)}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
