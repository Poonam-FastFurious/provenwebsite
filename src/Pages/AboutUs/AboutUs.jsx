import { Link } from "react-alice-carousel";
import HomeSmallBanner from "../Home/HomeSmallBanner";

function AboutUs() {
  return (
    <>
      <div className="relative overflow-hidden h-[450px]">
        <img
          className="absolute left-0 top-0 w-full h-auto opacity-"
          src="https://s3-alpha-sig.figma.com/img/13fc/f39f/f95ccedc77bb0dea110ccc66fa4aef90?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q60Gv1mWwBdR9oVZ6v0F9ksGci40OxeZ7wzO-yAI7REIWMFSpONIEvMnJUrtQE4m7QMQOAEzgRrKgmGU5HbLfdM2mtKYUy9mJfHoeEKidbZqaSj6eHGXaylwLx8ka46xKh3eJzHRlwpR4cL1eT7pUapEnzuckgaj4RldQO2LdUmkOGTHIyAolssmgnoA~sbGUUPSb38SggdXLuOVGej2vkknNsTf-bWPPPC8R7i1wChgFMXyairXeYjsr1GS78ypRxlZXushxXP0ssJ3KMdeG9zlyN527b6V5u1K2~QHGZFqpshi58gHSVwqbIj-RJa56Tc9zcbnTeaK44MfF6TwCg__"
          alt=""
        />
        <div className="absolute left-0 top-0 w-full h-full bg-gray-500 opacity-70"></div>
        <div className="relative z-10 h-[250px] flex  items-center">
          <h1 className="  text-black text-4xl  absolute top-[250px] left-[250px]">
            About Proven
          </h1>
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
