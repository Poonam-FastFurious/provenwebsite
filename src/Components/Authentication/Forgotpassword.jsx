import { useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../../confige";

function Forgotpassword() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]{2,}@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate email format
    if (!validateEmail(formData.email)) {
      setLoading(false);
      setErrorMessage(
        "Invalid email format. Please enter a valid email address."
      );
      return;
    }

    try {
      const response = await fetch(Baseurl + "/api/v1/user/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      setSuccessMessage("Password reset link sent to your email!");
      setErrorMessage(""); // Clear any previous error message

      // Reset form fields after successful request
      setFormData({ email: "" });
    } catch (error) {
      console.error("Forgot password error:", error); // Handle error here
      setErrorMessage("An error occurred. Please try again.");
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
                Forgot Password?
                <p>Reset your password with Proven</p>
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 mb-4 text-gray-900 sm:text-sm rounded-lg focus:ring-[#237DA2]  focus:border-[#237DA2] block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-AFPPrimary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? "Sending..." : "Send Email"}
                </button>
                {errorMessage && (
                  <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-sm text-green-500 mt-2">
                    {successMessage}
                  </p>
                )}
                <p className="text-sm font-light text-gray-500">
                  Wait, I remember my password{" "}
                  <Link
                    to="/Login"
                    className="font-medium text-primary-600 hover:underline"
                    disabled={loading}
                  >
                    . Click here
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

export default Forgotpassword;
