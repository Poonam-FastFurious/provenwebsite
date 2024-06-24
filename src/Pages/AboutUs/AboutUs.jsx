/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-alice-carousel";
import HomeSmallBanner from "../Home/HomeSmallBanner";

function AboutUs() {
  return (
    <>
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          "background-image":
            "url('https://s3-alpha-sig.figma.com/img/c927/1695/feb959553a8e29013ee7a58abe2d7d52?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z7xbT3Y8D0Q4x0TsM~F3oR3Sr3KAOryvNeKqnHWiTUkAlPkGFT~xoFvr9nGQB9~jcwfKP0B5dOcqUZ-QEYzuAeISpDwyHJ0cJjNd6Bs0xgCfNZGUpCrMV575-MGBFcGhabTFKTtbOMWE6Noa0PnV2qEYjfI50Z4pGc2WQ4iMofBWR-nppXF~WjZPRYyqb2Fbg126~YrMNVx48wF6UhEHHvULaYoNOHZ-xkWBi6KKuVmsbaPJx1PpyQzTxPZk6WRF7Ee9~A1KISITSWe4y7iVbSptYc0na8nIfvRJhnb9242IFlLHQml1QTCTB~Xretj8vsCfnhdu0Yy3PrLgy9DVhg__')",
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ "background-color": "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Aboutus</h2>
              <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="gi-facts-section py-[40px] max-[767px]:py-[30px] ">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
          <div className="flex flex-wrap w-full my-[-12px]">
            <div className="min-[992px]:w-[50%] min-[768px]:w-[50%] w-full px-[12px] py-[12px]">
              <div className="gi-facts-inner py-[30px] px-[15px] h-full flex items-center justify-center flex-col text-center bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]">
                <div className="gi-facts-desc">
                  <h4 className="text-[20px] text-[#4b5966] font-semibold leading-[1.2] mb-[6px]">
                    Who We Are ?
                  </h4>
                  <p className="max-w-[600px] lg:leading-5 m-0 text-[14px] text-[#777]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, velit. Ipsum asperiores illum quo mollitia ipsam.
                    Maiores esse qui blanditiis doloremque odio, unde quos.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium possimus cupiditate ipsa necessitatibus.
                    Quisquam?
                  </p>
                </div>
              </div>
            </div>
            <div className="min-[992px]:w-[50%] min-[768px]:w-[50%] w-full px-[12px] py-[12px]">
              <div className="gi-facts-inner py-[30px] px-[15px] h-full flex items-center justify-center flex-col text-center bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]">
                <div className="gi-facts-desc">
                  <h4 className="text-[20px] text-[#4b5966] font-semibold leading-[1.2] mb-[6px]">
                    What We Do Best
                  </h4>
                  <p className="max-w-[600px]px] m-0  lg:leading-5 text-[14px] text-[#777]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis quidem eum provident nostrum fugiat et ipsum
                    adipisci dolorum! Quasi, delectus! Facere molestias Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Ut eum
                    deleniti cum debitis libero. praesentium rem?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeSmallBanner />

      <div className="container bg-gray-200 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Lorem Ipsum
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Lorem Ipsum
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white  w-[82%] mx-auto pt-8">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <Link
              to="#"
              className=" lg:mt-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  "
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Customers
              </h5>
              <p className="font-normal text-gray-700 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus perferendis reprehenderit voluptates?
              </p>
            </Link>
            <Link
              to="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Honesty
              </h5>
              <p className="font-normal text-gray-700  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus perferendis reprehenderit voluptates?
              </p>
            </Link>
            <Link
              to="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Our Mission
              </h5>
              <p className="font-normal text-gray-700  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus perferendis reprehenderit voluptates?
              </p>
            </Link>
            <Link
              to="#"
              className=" lg:mt-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Team Work
              </h5>
              <p className="font-normal text-gray-700 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus perferendis reprehenderit voluptates?
              </p>
            </Link>
          </div>
          <div className="font-light text-gray-500 sm:text-lg grid-cols-8 ">
            <h6>All features</h6>
            <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-800 ">
              Our Core Values
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptates error quae expedita itaque quaerat, commodi, sequi
              harum, tempore autem quos rem deserunt consectetur facilis?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              amet ipsa id? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minima rem quod esse.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
