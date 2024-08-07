import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Baseurl } from "../../confige";

function NewLoginwithotp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateMobile = (mobile) => {
    const regex = /^\d{10}$/; // Validate 10-digit mobile number
    return regex.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate mobile number format
    if (!validateMobile(formData.mobile)) {
      setLoading(false);
      setErrorMessage(
        "Invalid mobile number format. Please enter a valid 10-digit mobile number."
      );
      return;
    }

    try {
      const response = await fetch(Baseurl + "/api/v1/user/sendsms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: formData.mobile }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Request failed");
      }
      localStorage.setItem("Otpmobile", formData.mobile);
      setSuccessMessage("OTP sent to your mobile number!");
      setErrorMessage(""); // Clear any previous error message
      navigate("/otp");
      // Reset form fields after successful request
      setFormData({ mobile: "" });
    } catch (error) {
      console.error("Send OTP error:", error); // Handle error here
      setErrorMessage(`An error occurred: ${error || "Please try again."}`);
      setSuccessMessage(""); // Clear any previous success message
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-gray-50 md:py-8 md:pt-4">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                to="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                <img
                  className="w-16 mr-2"
                  src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                  alt="logo"
                />
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 mb-4 text-gray-900 sm:text-sm rounded-lg focus:ring-[#237DA2] focus:border-[#237DA2] block w-full p-2.5"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-AFPPrimary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
                {errorMessage && (
                  <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-sm text-green-500 mt-2">
                    {successMessage}
                  </p>
                )}{" "}
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline"
                    disabled={loading}
                  >
                    Sign up
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

export default NewLoginwithotp;
