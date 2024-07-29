import axios from "axios";
import { useState } from "react";
import { Baseurl } from "../../confige";

function BookDemo() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    product: "Choose Ro",
    receiveEmails: false,
    termsAccept: false, // Added to manage terms acceptance
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    termsAccept: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const mobileRegex = /^\d{10}$/;
    const pincodeRegex = /^\d{6}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email =
        'Please enter a valid email address with at least two characters before "@" and after ".".';
    }

    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (!pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    try {
      await axios.post(Baseurl + "/api/v1/Inquiry/create", formData);
      setSuccessMessage("Demo booked successfully");
      // Optionally, reset the form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        pincode: "",
        product: "Choose Ro",
        receiveEmails: false,
        termsAccept: false,
      });
      setErrors({}); // Clear errors on successful submission
    } catch (error) {
      console.error("There was an error booking the demo!", error);
      setSuccessMessage("");
    }
  };
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2  bg-AFPPrimaryLight   h-auto pb-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 bg-gradient-to-tr from-slate-300 to-slate-800">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-800">
              <img
                className="h-full w-full   object-full object-top "
                src="https://img.freepik.com/free-vector/water-filter-realistic-with-faucet-full-glass-vector-illustration_1284-76637.jpg?t=st=1720761230~exp=1720764830~hmac=c3ac13ead9f325289541b0202169ee8e66a2abfeec46fb99d3df167c7b501231&w=740"
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
                onSubmit={handleSubmit}
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
                        className={`py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                        spellCheck="false"
                        aria-invalid="false"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
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
                        className={`py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                        spellCheck="false"
                        aria-invalid="false"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
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
                      name="mobile"
                      type="text"
                      placeholder="Enter Your mobile"
                      className={`py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 ${
                        errors.mobile ? "border-red-500" : ""
                      }`}
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobile}
                      </p>
                    )}
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
                      name="pincode"
                      className={`px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body ${
                        errors.pincode ? "border-red-500" : ""
                      }`}
                      autoComplete="off"
                      spellCheck="false"
                      rows={4}
                      placeholder="Enter your Pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    ></input>
                    {errors.pincode && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.pincode}
                      </p>
                    )}

                    <div className="max-w-full  mx-auto">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Select a Product
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={formData.product}
                        onChange={handleChange}
                        name="product"
                      >
                        <option selected>Choose Ro</option>
                        <option value="Domestic Ro">Domestic Ro</option>
                        <option value="Domestic Ro">Domestic Ro</option>
                        <option value="Domestic Ro">Home & Kitchen</option>
                        <option value="Domestic Ro">Demo</option>
                      </select>
                      <div className="flex items-center mb-4 mt-4 ">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          name="receiveEmails"
                          checked={formData.receiveEmails}
                          onChange={handleChange}
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
                          className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-AFPPrimary text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                          type="submit"
                        >
                          BOOK Demo
                        </button>
                        {successMessage && (
                          <p className="text-sm text-green-500 mt-2">
                            {successMessage}
                          </p>
                        )}
                      </div>
                    </div>
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
