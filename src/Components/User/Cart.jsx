import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify";

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("accessToken");
        const response = await fetch(Baseurl + "/api/v1/cart/product", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch cart");
        }

        const data = await response.json();
        const updatedCartItems = data.cart.items.map((item) => ({
          ...item,
          product: {
            ...item.product,
            price: item.price,
          },
        }));
        const updatedCart = {
          ...data.cart,
          items: updatedCartItems,
        };
        setCart(updatedCart);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false); // Set loading to false whether fetch succeeded or failed
      }
    };
    const fetchCoupons = async () => {
      try {
        const response = await fetch(Baseurl + "/api/v1/coupon/coupons");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch coupons");
        }

        const data = await response.json();
        setCoupons(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCart();
    fetchCoupons();
  }, []);

  const incrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const updatedItems = updatedCart.items.map((item) => {
        if (item.product._id === productId) {
          const updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });

      const updatedSubtotal = updatedItems.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      );

      return {
        ...updatedCart,
        items: updatedItems,
        total: updatedSubtotal,
      };
    });
  };
  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const updatedItems = updatedCart.items.map((item) => {
        if (item.product._id === productId) {
          const updatedQuantity = Math.max(item.quantity - 1, 1); // Ensure quantity doesn't go below 0
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });

      const updatedSubtotal = updatedItems.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      );

      return {
        ...updatedCart,
        items: updatedItems,
        total: updatedSubtotal,
      };
    });
  };

  const removeProduct = async (productId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(Baseurl + "/api/v1/cart/removeproduct", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to remove product");
      }

      setCart((prevCart) => {
        const updatedItems = prevCart.items.filter(
          (item) => item.product._id !== productId
        );

        const updatedSubtotal = updatedItems.reduce(
          (total, item) => total + item.quantity * item.product.price,
          0
        );

        return {
          ...prevCart,
          items: updatedItems,
          total: updatedSubtotal,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckout = () => {
    const totalAfterDiscount = getTotalWithDiscount();
    localStorage.setItem("cartProducts", JSON.stringify(cart.items));
    localStorage.setItem("cartTotal", totalAfterDiscount);
    navigate("/checkout");
  };
  const handleApplyCoupon = () => {
    const coupon = coupons.find((coupon) => coupon.code === couponCode);

    if (coupon) {
      if (coupon.status === "active") {
        setDiscount(coupon.discount);
        localStorage.setItem("couponDiscount", coupon.discount); // Store discount
        setCouponError("");
      } else {
        setDiscount(0);
        setCouponError("Coupon code has expired");
      }
    } else {
      setDiscount(0);
      setCouponError("Invalid coupon code");
    }
  };

  const getTotalWithDiscount = () => {
    if (cart) {
      const totalAfterDiscount = cart.total - (cart.total * discount) / 100;
      return totalAfterDiscount.toFixed(2);
    }
    return 0;
  };
  const handleAddToWishlist = async (productId) => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");

    if (!token) {
      toast.warn("You must be logged in to add items to your wishlist.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${Baseurl}/api/v1/wishlist/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Product added to wishlist:", data);
      toast.success("Product added to wishlist!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
      toast.warn("Failed to add product to wishlist.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="bg-white py-8 antialiased  md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
            Your Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar ">
                {isLoading ? (
                  <div className="flex justify-center items-center h-auto w-full">
                    <div className="">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                ) : cart ? (
                  cart.items.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm   md:p-6"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <Link
                          to={`/Product/${item.product._id}`}
                          className="shrink-0 md:order-1"
                        >
                          <img
                            className="h-20 w-20 dark:hidden"
                            src={item.product.image}
                            alt="imac image"
                          />
                          <img
                            className="hidden h-20 w-20 dark:block"
                            src={item.product.image}
                            alt="imac image"
                          />
                        </Link>

                        <label htmlFor="counter-input" className="sr-only">
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                              onClick={() =>
                                decrementQuantity(item.product._id)
                              }
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <input
                              type="text"
                              id="counter-input"
                              data-input-counter
                              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                              placeholder=""
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              id="increment-button"
                              data-input-counter-increment="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                              onClick={() =>
                                incrementQuantity(item.product._id)
                              }
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 ">
                              ₹ {item.product.price}
                            </p>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <Link
                            to="#"
                            className="text-base font-medium text-gray-900 hover:underline "
                          >
                            {item.product.name}
                          </Link>

                          <div className="flex items-center gap-4">
                            <button
                              onClick={() =>
                                handleAddToWishlist(item.product._id)
                              }
                              disabled={loading}
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline "
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                />
                              </svg>
                              Add to Favorites
                            </button>

                            <button
                              onClick={() => removeProduct(item.product._id)}
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty</p>
                )}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full   ">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6 ">
                <p className="text-xl font-semibold text-gray-900 ">
                  Order summary
                </p>
                {cart && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 ">
                          Sub Total
                        </dt>
                        <dd className="text-base font-medium text-gray-900 ">
                          ₹{cart ? cart.total : "0.00"}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 ">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-600">
                          {discount}%
                        </dd>
                      </dl>

                      {/* <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 ">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900 ">
                          ₹99
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 ">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 ">
                          ₹799
                        </dd>
                      </dl> */}
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                      <dt className="text-base font-bold text-gray-900 ">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 ">
                        ₹{getTotalWithDiscount()}
                      </dd>
                    </dl>
                  </div>
                )}
                <button
                  onClick={handleCheckout}
                  className="flex w-full items-center justify-center rounded-lg bg-AFPPrimary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                >
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 ">or</span>
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

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6 ">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      Do you have a voucher or gift card?
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                      placeholder=""
                      required
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="flex w-full items-center justify-center rounded-lg  bg-AFPPrimary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                  >
                    Apply Code
                  </button>
                </form>
                {couponError && (
                  <p className="mt-2 text-sm text-red-600">{couponError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
