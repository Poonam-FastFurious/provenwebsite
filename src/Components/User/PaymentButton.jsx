// import axios from "axios";
// const initiatePayment = async () => {
//   try {
//     const response = await axios.post(
//       "http://localhost:3000/api/v1/payments/create",
//       {
//         orderId: "66b353f25c7734474863942c",
//         amount: "10.00",
//         currency: "INR",
//         paymentMethod: "Credit Card",
//         userId: "66b27288e0ca04b1d0472079",
//         firstName: "PayU User",
//         email: "test@gmail.com",
//         phone: "9876543210",
//       }
//     );

//     const { paymentData, actionUrl } = response.data;

//     console.log("Payment Data:", paymentData);
//     console.log("Action URL:", actionUrl);

//     const form = document.createElement("form");
//     form.setAttribute("method", "post");
//     form.setAttribute("action", actionUrl);

//     Object.keys(paymentData).forEach((key) => {
//       const hiddenField = document.createElement("input");
//       hiddenField.setAttribute("type", "hidden");
//       hiddenField.setAttribute("name", key);
//       hiddenField.setAttribute("value", paymentData[key]);

//       form.appendChild(hiddenField);
//     });

//     document.body.appendChild(form);
//     form.submit();
//   } catch (error) {
//     console.error(
//       "Payment initiation failed:",
//       error.response ? error.response.data : error.message
//     );
//   }
// };

// const PaymentButton = () => {
//   return <button onClick={initiatePayment}>Pay Now</button>;
// };

// export default PaymentButton;
