import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Navbar from "../../Pages/Navbar";
import Footer from "../../Pages/Footer";
import Shop from "../../Pages/Shop/Shop";
// import ProductDetails from "../Common/ProductDetails";
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
import ProtectedRoute from "../Protectedroutes/ProtectedRoutes";
import RouteProtected from "../Protectedroutes/RoutesProtected";
import Ordersuccess from "../Specific/Ordersuccess";
import WaterPurefire from "../../Pages/WaterPurefire";
// import Productnewdetails from "../Common/Productnewdetails";
import Blogdetails from "../../Pages/Blog/Blogdetails";
import ShaprePart from "../../Pages/Shop/ShaprePart";
import SerchPage from "../../Pages/Shop/SerchPage";
import Productdetailswitvedio from "../Common/Productdetailswitvedio";

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
          <Route path="/Spare_Parts" element={<ShaprePart />} />
          <Route path="/Productctegory/:id" element={<WaterPurefire />} />
          <Route path="/Product/:id" element={<Productdetailswitvedio />} />
          <Route path="/products" element={<SerchPage />} />
          <Route
            path="/login"
            element={<ProtectedRoute element={<Login />} redirectTo="/" />}
          />
          <Route
            path="/register"
            element={<ProtectedRoute element={<Signup />} redirectTo="/" />}
          />
          <Route
            path="/Cart"
            element={<RouteProtected element={<Cart />} redirectTo="/login" />}
          />
          <Route
            path="/success"
            element={
              <RouteProtected element={<Ordersuccess />} redirectTo="/login" />
            }
          />
          <Route
            path="/checkout"
            element={
              <RouteProtected element={<CheckOut />} redirectTo="/login" />
            }
          />
          <Route path="/ordertracking" element={<Ordertracking />} />
          <Route
            path="/profile"
            element={
              <RouteProtected element={<Profile />} redirectTo="/login" />
            }
          />
          <Route
            path="/wishlist"
            element={
              <RouteProtected element={<Wishlist />} redirectTo="/login" />
            }
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/profile/myorder/orderDetails/:id"
            element={<OrderDetails />}
          />
          <Route path="/myorder" element={<Orderlist />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Support" element={<Suport />} />
          <Route path="/Blogdetails" element={<Blogdetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default HomeRouter;
