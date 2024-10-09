import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Baseurl } from "../../confige";
import logo from "../../assets/Images/logoproven.png";
function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [mobile, setMobile] = useState("");

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value;
    const isValid = /^\d{10}$/.test(value); // Regular expression for exactly 10 digits

    if (!isValid && value !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Mobile number must be exactly 10 digits.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "",
      }));
    }

    setMobile(value);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]{2,}@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: "",
      email: "",
      mobile: "",
      form: "", // Added to show form-level errors like API response errors
    };

    // Validation
    if (fullName.trim() === "") {
      newErrors.fullName = "Full name is required.";
    }
    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }

    setErrors(newErrors);

    // Stop form submission if there are validation errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    const user = {
      fullName,
      email,
      mobile,
    };

    try {
      const response = await fetch(Baseurl + "/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      // Handle non-200 responses (error from the server)
      if (!response.ok) {
        console.error("Error response data:", data);
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: data.message || "Failed to create an account.", // Show backend error message
        }));
        return; // Stop execution if there is an error
      }

      // Success - OTP sent
      localStorage.setItem("registermobile", mobile);
      setSuccessMessage(data.message || "Account created successfully!");

      // Clear form fields
      setFullName("");
      setEmail("");
      setMobile("");

      // Redirect to verification page after a short delay
      setTimeout(() => {
        navigate("/VerifyAcount");
      }, 2000);
    } catch (error) {
      console.error("Error:", error); // Log full error object for debugging
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "An unexpected error occurred. Please try again.", // Fallback for unknown errors
      }));
    }
  };

  return (
    <>
      <section className="bg-gray-50 md:py-4">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                to="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                <img className="w-16 mr-2" src={logo} alt="logo" />
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className={`bg-gray-50 border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    className={`bg-gray-50 border ${
                      errors.mobile ? "border-red-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength={10} // Limit input to 10 characters
                    pattern="\d*" // Allow only digits
                    onInput={(e) => {
                      // Restrict input to 10 characters
                      if (e.target.value.length > 10) {
                        e.target.value = e.target.value.slice(0, 10);
                        setMobile(e.target.value);
                      }
                    }}
                    inputMode="numeric"
                  />
                  {errors.mobile && (
                    <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>
                  )}
                </div>
                {/* <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={`bg-gray-50 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaRegEye /> : <ImEyeBlocked />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.password}
                    </p>
                  )}
                </div> */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the
                      <Link
                        className="font-medium text-primary-600 hover:underline"
                        to="/terms-condition"
                        target="_blank"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-AFPPrimary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                {successMessage && (
                  <p className="text-sm text-green-500 mt-2">
                    {successMessage}
                  </p>
                )}

                {errors.form && (
                  <div className="error-message text-yellow-400">
                    {errors.form}
                  </div>
                )}
                <p className="text-sm font-light text-gray-500">
                  Already have an account?
                  <Link
                    to="/Login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
