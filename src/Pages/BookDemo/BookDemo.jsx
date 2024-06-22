function BookDemo() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2  bg-AFPPrimaryLight   h-auto pb-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 bg-gradient-to-tr from-slate-300 to-slate-800">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-800">
              <img
                className="h-full w-full   object-cover object-top "
                src="https://s3-alpha-sig.figma.com/img/d79a/f25b/5567d070b924d2c025b3a088e97b3f83?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fyRyR~RGlx171GJSgbykRnDU9wk-rkw4nFqtYVdvWEN~M1y3cc1SPLhUbfpg~DSPl~Ckd6sIrV4CrIU6u1gPkl25d6NOxS7l0I7jLhvwCh-XxVa53z79xHYvzgwi~Dw~rHSGXMYaIF4ClVCEcsRnYW-rHgdcFCPtqxBykU9a4wW7xQNNR6Kiapiou8pb0-Q8JDly-YzRdr4wy~P4~37a~Za1Ugx7AXLUzhccmxSdpLprvbFjUg42S6ZHTHeM7FvkSN97bB74DimDzoKNK5L0eAv5cHkzH~PB5IQwl7ObwhhR3o9ag9sqD2Ss8XmF9ZEg3Acieik~Oc8seZ8aVGnc4g__"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 pt-16">
            <div className="md:w-full lg:w-full 2xl:w-full flex h-auto ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
              <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5"></div>
              <form
                className="w-full mx-auto flex flex-col justify-center  h-auto "
                noValidate
              >
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                    <div className="w-full md:w-full ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        autoComplete="off"
                        spellCheck="false"
                        aria-invalid="false"
                      />
                    </div>
                    <div className="w-full ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                      <label
                        htmlFor="email"
                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        autoComplete="off"
                        spellCheck="false"
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Enter Your mobile"
                      className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3"
                    >
                      Pincode
                    </label>
                    <input
                      id="message"
                      name="message"
                      className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm  focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                      autoComplete="off"
                      spellCheck="false"
                      rows={4}
                      placeholder="Enter your Pincode"
                    ></input>

                    <form className="max-w-full  mx-auto">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Select a Product
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option selected>Choose Ro</option>
                        <option value="US">Domestic Ro</option>
                        <option value="CA">Industrial Ro</option>
                        <option value="FR">Home & Kitchen</option>
                        <option value="DE">Demo</option>
                      </select>
                      <div className="flex items-center mb-4 mt-4 ">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600   border-gray-300 rounded focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-sm font-medium text-gray-900 "
                        >
                          I want to receive emails about the product, feature
                          updates, events, and marketing promotions.
                        </label>
                      </div>
                      <div className="relative">
                        <button
                          data-variant="flat"
                          className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-AFPPrimary text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                          type="submit"
                        >
                          BOOK Demo
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}

export default BookDemo;
