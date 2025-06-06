/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Baseurl } from "../../confige";
import Swal from "sweetalert2";

// import { Baseurl } from "../../confige";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-solid border-gray-300 mb-6 p-4 rounded-md">
      <button
        className="w-full text-left flex items-center justify-between text-lg font-semibold text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`w-3 h-3 transform transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

const CheckoutSection = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userid");
  const accessToken = localStorage.getItem("accessToken");
  const [products, setProducts] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    address: "",
    totalAmount: 0, // Dynamic total amount
  });

  const handleAddressSelect = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      address: value, // Update the selected address
    });
  };
  useEffect(() => {
    // Assuming you have retrieved the products from the cart page and set them in localStorage
    const storedProducts = JSON.parse(localStorage.getItem("cartProducts"));

    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    }
  }, []);
  useEffect(() => {
    const totalAmount = localStorage.getItem("cartTotal");

    setFormData((prevData) => ({ ...prevData, totalAmount }));
  }, [products]);
  const createOrder = async () => {
    const customerId = localStorage.getItem("userid"); // Retrieve customer ID from localStorage

    if (!customerId) {
      alert("Customer ID not found in local storage.");
      return null;
    }

    try {
      const orderData = {
        customerId,
        products: products.map((product) => ({
          product: product.product._id, // Change this line
          quantity: product.quantity,
          price: product.product.price, // Also, adjust this line to access the price from the nested product object
        })),
        totalAmount: formData.totalAmount,
        shippingInfo: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: "Country",
          phoneNumber: formData.phoneNumber,
        },
        paymentInfo: {
          method: "Credit Card",
          status: "Pending",
        },
      };

      const response = await fetch(Baseurl + "/api/v1/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to create order: ${response.status} ${errorText}`
        );
      }

      const responseData = await response.json();
      console.log("Order created successfully:", responseData);
      console.log("Order created successfullyid:", responseData.data._id);
      return responseData.data._id;
    } catch (error) {
      console.error("Error creating order:", error);
      Swal.fire({
        text: "Please add a shipping address",
        confirmButtonText: "OK",
        confirmButtonColor: "#237DA2", // Setting OK button background to gray
      });
    }
  };
  const paymentHandler = async (e) => {
    e.preventDefault();

    try {
      // Retrieve user ID from local storage
      const userId = localStorage.getItem("userid");
      if (!userId) {
        throw new Error("User ID not found in local storage");
      }

      const orderId = await createOrder();
      const response = await fetch(Baseurl + "/api/v1/payments/create", {
        method: "POST",
        body: JSON.stringify({
          orderId,
          amount: formData.totalAmount,
          currency: "INR",
          paymentMethod: "Credit Card",
          userId, // Include userId in the request body
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create payment");
      }

      const order = await response.json();
      console.log(order);

      // Initialize Razorpay
      var options = {
        key: "rzp_test_apOsHc9PArNQm9",
        amount: formData.totalAmount * 100,
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.payment.razorpayOrderId,
        handler: async function (response) {
          const body = {
            orderId: order.payment.razorpayOrderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          // Verify payment on backend
          const validateRes = await fetch(Baseurl + "/api/v1/payments/verify", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const jsonRes = await validateRes.json();
          console.log(jsonRes);
          if (validateRes.ok) {
            // Payment verification successful
            localStorage.removeItem("cartProducts");
            localStorage.setItem("orderId", jsonRes.payment.order);
            navigate("/success");
            // Navigate to home or success page
          } else {
            // Payment verification failed
            navigate("/payment-failed"); // Navigate to failure page
          }
        },
        prefill: {
          name: "Proven Ro",
          email: "provenro@gmailo.com",
          contact: "9876543210",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error:", error.message); // Print error message to console
    }
  };
  useEffect(() => {
    const fetchAddressDetails = async () => {
      try {
        const response = await fetch(
          `${Baseurl}/api/v1/address?userId=${userId}`,
          {
            method: "GET", // Assuming you use POST for sending data
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch address details");
        }

        const data = await response.json();
        setAddresses(data.data); // Assuming your API response has an 'addresses' array
      } catch (error) {
        console.error("Error fetching address details:", error);
      }
    };

    fetchAddressDetails();
  }, [userId, accessToken]);
  return (
    <>
      <section className="gi-checkout-section py-10 text-sm max-md:py-8 ">
        <h2 className="hidden">Checkout Page</h2>
        <div className="flex flex-wrap justify-between items-center mx-auto relative max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="gi-checkout-rightside min-[992px]:w-[50%]  w-full">
              <AccordionItem title="Product summary">
                <div className="gi-checkout-summary">
                  {products.map((pro, index) => (
                    <div
                      className="flex justify-between items-center mb-2.5"
                      key={index}
                    >
                      <span className="text-left text-gray-500 text-sm leading-6">
                        <img
                          className="h-20 w-20 "
                          src={pro.product.image}
                          alt="imac image"
                        />
                      </span>
                      <span className="text-right text-gray-700 text-base leading-6 font-medium">
                        {pro.quantity}=QUANTITY
                      </span>
                    </div>
                  ))}

                  <div className="gi-checkout-coupan-content flex justify-between items-center mb-2.5">
                    <form
                      className="gi-checkout-coupan-form flex border border-solid border-gray-300 p-1.5 rounded-md"
                      name="gi-checkout-coupan-form"
                      method="post"
                      action="#"
                    >
                      <input
                        className="gi-coupan inline-block align-top leading-[35px] h-[35px] w-full text-gray-500 text-sm border-0 bg-transparent text-left pl-2.5 pr-2.5 rounded-md outline-none"
                        type="text"
                        required
                        placeholder="Enter Your Coupon Code"
                        name="gi-coupan"
                        value=""
                      />
                      <button
                        type="submit"
                        className="gi-coupan-btn gi-btn-2 text-base text-center px-3.5 transition-all duration-300 ease-in-out font-medium bg-green-500 text-white rounded-md hover:bg-gray-700 hover:text-white"
                        name="subscribe"
                        value=""
                      >
                        Apply
                      </button>
                    </form>
                  </div>

                  <div className="gi-checkout-summary-total border-t border-solid border-gray-300 pt-4.5 mb-0 mt-4 flex justify-between items-center">
                    <span className="text-left text-base font-semibold text-gray-700 tracking-normal font-manrope">
                      Total Items
                    </span>
                    <span className="text-right text-base font-semibold text-gray-700 font-manrope"></span>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Delivery Address">
                <div className="gi-checkout-del">
                  <div className="gi-del-desc text-gray-500 text-sm font-light leading-6 mb-3.5">
                    Please select the preferred shipping method to use on this
                    order.
                  </div>
                  {addresses.length > 0 ? (
                    addresses.map((address, index) => (
                      <div key={index} className="border p-8">
                        <label>
                          <input
                            type="checkbox"
                            name="address"
                            value={address._id}
                            checked={formData.address === address._id}
                            onChange={handleAddressSelect}
                            className="mr-2"
                          />
                          {address.addressType},{address.streetAddress},{" "}
                          {address.city}, {address.state}, {address.postalCode},{" "}
                          {address.country}
                        </label>
                      </div>
                    ))
                  ) : (
                    <div className="text-center mt-4">
                      <p>No addresses found.</p>
                      <button className=" bg-AFPPrimary text-white py-2 px-4 rounded mt-2">
                        <Link to="/profile">Add Address</Link>
                      </button>
                    </div>
                  )}
                </div>
              </AccordionItem>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full  ml-4  ">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6 ">
                <p className="text-xl font-semibold text-gray-900 ">
                  Price Details
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        {formData.quantity}
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        ₹{formData.totalAmount}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt className="text-base font-bold text-gray-900 ">
                      Total Payable
                    </dt>
                    <dd className="text-base font-bold text-gray-900 ">
                      ₹{formData.totalAmount}
                    </dd>
                  </dl>
                </div>

                <button
                  onClick={paymentHandler}
                  className="flex w-full items-center justify-center rounded-lg bg-AFPPrimary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                >
                  Place Order
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 00">
                    or
                  </span>
                  <Link
                    to="/Water-purifier"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline "
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutSection;
