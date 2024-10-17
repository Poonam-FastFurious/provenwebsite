import { useEffect, useState } from "react";
import { Baseurl } from "../../confige";
import { Link } from "react-router-dom";
function Ordersuccess() {
  const [order, setOrder] = useState({});
  useEffect(() => {
    // Assuming 'id' is stored in local storage
    const storedId = localStorage.getItem("orderId");

    // Fetch data only if 'id' is available
    if (storedId) {
      fetch(`${Baseurl}/api/v1/order/singleorder/${storedId}`)
        .then((response) => response.json())
        .then((data) => {
          // Assuming data.data is the actual order object
          setOrder(data.data);
        })
        .catch((error) => {
          console.error("Error fetching order:", error);
          // Handle error state if needed
        });
    }
  }, []); //
  return (
    <>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Payment Successful
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Thanks for making a purchase you can check our order summary frm
            below
          </p>
          <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
              <div className="data">
                <p className="font-semibold text-base leading-7 text-black">
                  Order Id:
                  <span className="text-indigo-600 font-medium">
                    #{order.orderID}
                  </span>
                </p>
                <p className="font-semibold text-base leading-7 text-black mt-4">
                  Order Payment :
                  <span className="text-gray-400 font-medium">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </p>
              </div>
              <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white  bg-AFPPrimary max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500">
                <Link to="/orderlist"> View Order</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ordersuccess;

// import { useEffect, useState } from "react";
// import { Baseurl } from "../../confige";
// import { Link, useParams } from "react-router-dom";
// function Ordersuccess() {
//   const { txnid } = useParams();
//   const [order, setOrder] = useState({});
//   useEffect(() => {
//     // Assuming 'id' is stored in local storage

//     // Fetch data only if 'id' is available
//     if (txnid) {
//       fetch(`${Baseurl}/api/v1/order/singleorder/${txnid}`)
//         .then((response) => response.json())
//         .then((data) => {
//           // Assuming data.data is the actual order object
//           setOrder(data.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching order:", error);
//           // Handle error state if needed
//         });
//     }
//   }, [txnid]); //
//   return (
//     <>
//       <section className="py-24 relative">
//         <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
//           <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
//             Payment Successful
//           </h2>
//           <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
//             Thanks for making a purchase you can check our order summary frm
//             below
//           </p>
//           <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
//               <div className="data">
//                 <p className="font-semibold text-base leading-7 text-black">
//                   Order Id:
//                   <span className="text-indigo-600 font-medium">
//                     #{order.orderID}
//                   </span>
//                 </p>
//                 <p className="font-semibold text-base leading-7 text-black mt-4">
//                   Order Payment :
//                   <span className="text-gray-400 font-medium">
//                     {new Date(order.createdAt).toLocaleDateString()}
//                   </span>
//                 </p>
//               </div>
//               <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white  bg-AFPPrimary max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500">
//                 <Link to="/orderlist"> View Order</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Ordersuccess;
