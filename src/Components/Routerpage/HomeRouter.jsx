import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Navbar from "../../Pages/Navbar";
import Footer from "../../Pages/Footer";
import Shop from "../../Pages/Shop/Shop";
import ProductDetails from "../Common/ProductDetails";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Cart from "../User/Cart";
import CheckOut from "../User/CheckOut";
import Topheader from "../../Pages/Topheader";
import Ordertracking from "../User/Ordertracking";
import Profile from "../User/Profile";
import BookDemo from "../../Pages/BookDemo/BookDemo";
import Wishlist from "../User/Wishlist";
import AboutUs from "../../Pages/AboutUs/AboutUs";

import OrderDetails from "../User/OrderDetails";
import Orderlist from "../User/Orderlist";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Suport from "../../Pages/Suport/Suport";

function HomeRouter() {
  return (
    <>
      <BrowserRouter>
        <Topheader />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book-Demo" element={<BookDemo />} />
          <Route path="/Water-purifier" element={<Shop />} />
          <Route path="/Water-purifier" element={<Shop />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/ordertracking" element={<Ordertracking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/myorder/orderDetails" element={<OrderDetails />} />
          <Route path="/myorder" element={<Orderlist />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Support" element={<Suport />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default HomeRouter;
