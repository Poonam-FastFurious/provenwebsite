import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { Baseurl } from "../../confige";

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password, confirmPassword) => {
    setPasswordMatch(password === confirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const user = {
      fullName,
      email,
      password,
    };

    try {
      const response = await fetch(Baseurl + "/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to create an account.");
      }

      setSuccessMessage("Account created successfully!");

      // Clear form fields and errors
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPasswordMatch(true);
      setErrorMessage("");

      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <section className="bg-gray-50  md:py-12 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                to="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
              >
                <img
                  className="w-16  mr-2"
                  src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                  alt="logo"
                />
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name"
                    required=""
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
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
                        passwordMatch ? "border-gray-300" : "border-red-500"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      value={password}
                      onChange={handlePasswordChange}
                      required=""
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaRegEye /> : <ImEyeBlocked />}
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className={`bg-gray-50 border ${
                        passwordMatch ? "border-gray-300" : "border-red-500"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      required=""
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {confirmPasswordVisible ? <FaRegEye /> : <ImEyeBlocked />}
                    </button>
                  </div>
                  {!passwordMatch && (
                    <p className="text-sm text-red-500 mt-2">
                      Passwords do not match.
                    </p>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 "
                    >
                      I accept the
                      <Link
                        className="font-medium text-primary-600 hover:underline "
                        to="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-AFPPrimary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                {errorMessage && (
                  <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-sm text-green-500 mt-2">
                    {successMessage}
                  </p>
                )}
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?
                  <Link
                    to="/Login"
                    className="font-medium text-primary-600 hover:underline "
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
