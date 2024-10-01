import bgimg from "../../assets/Images/aboutus.jfif";
import bgimg3 from "../../assets/Images/about3.png";
import Crausalforimage from "../Home/Crausalforimage";
function NewAboutUs() {
  return (
    <>
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          "background-image": `url(${bgimg})`,
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ "background-color": "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">About Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  container  py-8">
        <div className="grid md:grid-cols-2 gap-4 items-center  overflow-hidden">
          <div className="relative w-full h-full">
            <img src={bgimg3} className="w-full h-full object-cover shrink-0" />
          </div>
          <div className="p-6 max-w-xl mx-auto">
            <h1 className="sm:text-4xl text-2xl font-bold ">About Proven</h1>
            <div className="mt-6">
              <p className=" text-justify">
                A Company of PROVEN Founded by Mr. SIYA RAM PRAJAPATI Sales and
                service water purifier and RO based mineral water (Domestic ,
                Commercial and Industrial) from India and selling, installing,
                maintaining in local market from 2002.Proven Water Industries
                Private Limited is a 21st century healthcare products company
                with a vision to make the world a healthy and a happy place.
                Pioneers in bringing the revolutionary Reverse Osmosis (RO)
                technology to India, PROVEN started its operations from DELHI,
                India in 2002. Over the years, it has evolved as a market leader
                providing technologically advanced healthcare products ranging
                from Water Purifiers , water, Industrial Plant, Water Commercial
                Plant, Water Softeners and Spares. It has become synonymous with
                offering purity and is known for its robustness in technological
                performance and innovative designs enhancing quality of everyday
                living. PROVEN Water industries private limited is ISO 9001:2015
                certified and has been at the forefront of innovation. It has
                grown to be a strong organization with offices across India and
                most importantly, millions of satisfied customers to its credit
                India.With a purpose to give good health to one and all, PROVEN
                is the best guardian of your family’s health!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-AFPPrimaryLight mx-auto w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className=" w-full my-4">
            <div className="flex items-center flex-col">
              <div className="w-6 h-6 shrink-0 mx-[-1px] ring-2 ring-gray-300 ring-offset-4 bg-green-500 p-1 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <div className="my-4 text-center max-w-[400px]">
                <h6 className="text-base font-bold text-[#333]">Our Founder</h6>
                <p className="text-sm  mt-1">
                  A Company of PROVEN Founded by Mr. SIYA RAM PRAJAPATI Sales
                  and service water purifier and RO based mineral water
                  (Domestic , Commercial and Industrial) from India and selling,
                  installing, maintainingin local market from 2002..
                </p>
              </div>
              <div className="w-1 h-24 bg-gray-300 rounded-xl"></div>
            </div>
            <div className="flex items-center flex-col">
              <div className="w-6 h-6 shrink-0 mx-[-1px] ring-2 ring-gray-300 ring-offset-4 p-1 flex items-center justify-center rounded-full">
                <span className="w-6 h-6 bg-blue-500 rounded-full shrink-0"></span>
              </div>
              <div className="my-4 text-center max-w-[400px]">
                <h6 className="text-base font-bold text-[#333] ">
                  Delhi, 2002 India
                </h6>
                <p className="text-sm  mt-1">
                  Proven Water Industries Private Limited is a 21st century
                  healthcare products company with a vision to make the world a
                  healthy and a happy place. Pioneers in bringing the
                  revolutionary Reverse Osmosis (RO) technology to India, PROVEN
                  started its operations from DELHI, India in 2002.
                </p>
              </div>
              <div className="w-1 h-24 bg-gray-300 rounded-xl"></div>
            </div>
            <div className="flex items-center flex-col">
              <div className="w-6 h-6 shrink-0 mx-[-1px] ring-2 ring-gray-300 ring-offset-4 p-1 flex items-center justify-center rounded-full">
                <span className="text-base text-gray-500 font-bold">3</span>
              </div>
              <div className="my-4 text-center max-w-[400px]">
                <h6 className="text-base font-bold  text-[#333]">
                  ISO Certified India
                </h6>
                <p className="text-sm mt-1">
                  PROVEN Water industries private limited is ISO 9001:2015
                  certified and has been at the forefront of innovation. It has
                  grown to be a strong organization with offices across India
                  and most importantly, millions of satisfied customers to its
                  credit India.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="bg-[#202F35]  ">
        <div className=" container">
          <div className=" mx-auto p-4 container ">
            <div className="my-16 space-y-10 ">
              <div className="grid md:grid-cols-2 gap-14">
                <div>
                  <div className=" my-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-10 mb-6 bg-gray-100 p-2 rounded-md"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                        data-original="#000000"
                      />
                      <path
                        d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                        data-original="#000000"
                      />
                    </svg>
                    <h3 className="text-white text-xl font-semibold mb-3">
                      Our Mission
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      To be a master class in inventive brilliance. We strive to
                      bring to fruition for our customers, the freedom from
                      water-related problems and peace of mind for good health
                      through our wide range of healthcare products that deliver
                      impeccable standards of quality and service.
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-10 mb-6 bg-gray-100 p-2 rounded-md"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path d="M0 512h512V0H0Z" data-original="#000000" />
                        </clipPath>
                      </defs>
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        clipPath="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                          data-original="#000000"
                        />
                        <path
                          d="M178 271.894 233.894 216 334 316.105"
                          data-original="#000000"
                        />
                      </g>
                    </svg>
                    <h3 className="text-white text-xl font-semibold mb-3">
                      Our Vision
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      To be a socially responsible brand making a difference in
                      people’s lives by affecting all- pervasive areas of their
                      existence- water. Our fundamental vision is defined by
                      producing innovative healthcare products that purify the
                      water we drink, the food we eat and the air we breathe,
                      and thus help people live healthier.
                    </p>
                  </div>
                </div>
                <div className=" h-auto">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/13fc/f39f/f95ccedc77bb0dea110ccc66fa4aef90?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEir4xn4qEV5Q~eWAp3jUc3PQyLbEKJ9BMThXR-~0QwrfRJFFQkZGyC5cZVgsw5fobnRMnfljKGB3yCc1m4NmK8NbVXQ49yTPU-RavTLHFQnOhjyxpE8T70fBL5a5Gf0~MNVY2VNwcjHXv9Z9y~tJwzLu9r9jg6i4yLRLJkU781lMc-IOJD~9rUWFDWNfbqE6lJU8Q3GMStEontWriwgotL33~qPX0OXst1p1~ILCT15WO3Ob86wmiyxUCIxSw1ZudSIiil7w~oUo3ysETnqaPJS0BC-Hq74RKW9SIJWVN6-EbyRxuFNjpfUifUL9jqkU0HDovkj8LCeI3GdnHXzdg__"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-12 ">
        <div className=" container mx-auto">
          <h2 className="text-gray-800 sm:text-2xl text-2xl font-extrabold  mb-12 text-center">
            At Proven We Values
          </h2>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
            <div className="p-6 bg-white rounded-lg text-left shadow border border-AFPPrimary">
              <h3 className="text-gray-800 text-xl font-bold mb-4">
                Customers
              </h3>
              <p className="text-gray-500 text-sm">
                We acknowledge that every individual brings different
                perspectives and capabilities to the team and a strong team is
                built on high moral values and fair practice. We provide equal
                opportunities for growth to all our employees and foster a
                collaborative and mutually supportive environment.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg text-left border border-AFPPrimary">
              <h3 className="text-gray-800 text-xl font-bold mb-4">People</h3>
              <p className="text-gray-500 text-sm">
                We give highest value to our customers’ requirements and do
                everything possible to provide them complete satisfaction. We
                are a conscious, compassionate and high-principled provider of
                authentic service enhancing customer experience at every touch
                point and fulfilling the needs comprehensively, fast and
                efficiently.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg text-left shadow border border-AFPPrimary">
              <h3 className="text-gray-800 text-xl font-bold mb-4">Honesty</h3>
              <p className="text-gray-500 text-sm">
                Integrity is the foundation of everything we do. At PROVEN we
                conduct our business with the highest standards of
                professionalism, ethics, quality and fairness and develop
                relationships based on trust. Our core values and philosophy are
                the foundation for every business decision we make.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg text-left shadow border border-AFPPrimary">
              <h3 className="text-gray-800 text-xl font-bold mb-4">
                Team Work
              </h3>
              <p className="text-gray-500 text-sm">
                Integrity is the foundation of everything we do. At PROVEN we
                conduct our business with the highest standards of
                professionalism, ethics, quality and fairness and develop
                relationships based on trust. Our core values and philosophy are
                the foundation for every business decision we make.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Crausalforimage/>
    </>
  );
}

export default NewAboutUs;
