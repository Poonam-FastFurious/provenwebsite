import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../../confige";
import { toast } from "react-toastify"; // Assuming you have react-toastify installed and configured

function Orderlist() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5; // Number of items per page

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = localStorage.getItem("userid");
        if (!userId) {
          throw new Error("User ID not found in localStorage");
        }
        const response = await fetch(Baseurl + "/api/v1/order/allorder");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const userOrders = data.data
          .filter((order) => order.customer._id === userId)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by createdAt in descending order
        setOrders(userOrders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const indexOfLastOrder = currentPage * perPage;
  const indexOfFirstOrder = indexOfLastOrder - perPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / perPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await fetch(Baseurl + "/api/v1/order/updateorder", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: orderId,
          status: "Cancelled",
        }),
      });

      if (!response.ok) {
        throw new Error("Error updating status");
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: "Cancelled" } : order
        )
      );

      toast.success("Order canceled successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error("Failed to cancel order", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bg-white container">
        <div className="mx-auto max-w-screen-xl 2xl:px-0">
          <div className="mx-auto max-w-7xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                My orders
              </h2>
            </div>

            <div className="mt-6 flow-root sm:mt-8">
              <div className="divide-y divide-gray-200">
                {currentOrders.map((order) => (
                  <div
                    key={order._id}
                    className="flex flex-wrap items-center gap-y-4 py-6"
                  >
                    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500">
                        Date:
                      </dt>
                      <dd className="mt-1.5 text-base font-semibold text-gray-900">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </dd>
                    </dl>

                    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500">
                        Price:
                      </dt>
                      <dd className="mt-1.5 text-base font-semibold text-gray-900">
                        ₹{order.totalAmount}
                      </dd>
                    </dl>

                    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500">
                        Status:
                      </dt>
                      <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                        {order.status}
                      </dd>
                    </dl>

                    <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                      {order.status !== "Cancelled" && (
                        <button
                          type="button"
                          onClick={() => handleCancelOrder(order.orderID)}
                          className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 lg:w-auto"
                        >
                          Cancel order
                        </button>
                      )}
                      <Link
                        to={`/profile/myorder/orderDetails/${order._id}`}
                        className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-6 flex justify-end">
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={
                      (index + 1 === currentPage
                        ? "z-10 bg-primary-50 border-primary-500 text-primary-600"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50") +
                      " relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    }
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Orderlist;
