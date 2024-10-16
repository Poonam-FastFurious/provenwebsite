import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Navbar from "../../Pages/Navbar";
import Footer from "../../Pages/Footer";
import Shop from "../../Pages/Shop/Shop";
import Signup from "../Authentication/Signup";
import Cart from "../User/Cart";
import CheckOut from "../User/CheckOut";
import Topheader from "../../Pages/Topheader";
import Profile from "../User/Profile";
import BookDemo from "../../Pages/BookDemo/BookDemo";
import Wishlist from "../User/Wishlist";
import NewAboutUs from "../../Pages/AboutUs/NewAboutUs";
import OrderDetails from "../User/OrderDetails";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Suport from "../../Pages/Suport/Suport";
import ProtectedRoute from "../Protectedroutes/ProtectedRoutes";
import RouteProtected from "../Protectedroutes/RoutesProtected";
import Ordersuccess from "../Specific/Ordersuccess";
import WaterPurefire from "../../Pages/WaterPurefire";
import Blogdetails from "../../Pages/Blog/Blogdetails";
import ShaprePart from "../../Pages/Shop/ShaprePart";
import SerchPage from "../../Pages/Shop/SerchPage";
import Productdetailswitvedio from "../Common/Productdetailswitvedio";
// import Forgotpassword from "../Authentication/Forgotpassword";
import Resetpassword from "../Authentication/Resetpassword";
import Career from "../../Pages/Career/Career";
import Faqs from "../../Pages/Faq/Faqs";
import NewLoginwithotp from "../Authentication/NewLoginwithotp";
import Otp from "../Authentication/Otp";
import Terms from "../../Pages/TermsAndcondition/Terms";
import ReturnPolicy from "../../Pages/ReturnPolicy/ReturnPolicy";
import Client from "../../Pages/ClientPage/Client";
import Privacypolicy from "../../Pages/Privacypolicy/Privacypolicy";
import Orderlist from "../User/Orderlist";
import Certificate from "../../Pages/Home/Certificate";
import Hydrogen from "../../Pages/HydrogenWater/Hydrogen";
import Copper from "../../Pages/Copper/Copper";
import Ordertracking from "../User/Ordertracking";
import StoreLocation from "../StoreLocation/StoreLocation";
import VerifyAccount from "../Authentication/VerifyAccount";
// import Payumoneycheckout from "../User/Payumoneycheckout";

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
          <Route path="/certifications" element={<Certificate />} />
          <Route path="/Hydrogen-Water" element={<Hydrogen />} />
          <Route path="/Copper-Water" element={<Copper />} />
          <Route path="/products" element={<SerchPage />} />
          <Route path="/TrackOrder" element={<Ordertracking />} />
          <Route path="/VerifyAcount" element={<VerifyAccount />} />
          <Route
            path="/Reset-password/:id/:token"
            element={<Resetpassword />}
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute element={<NewLoginwithotp />} redirectTo="/" />
            }
          />
          <Route
            path="/Otp"
            element={<ProtectedRoute element={<Otp />} redirectTo="/" />}
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
            path="/OrderList"
            element={
              <RouteProtected element={<Orderlist />} redirectTo="/login" />
            }
          />{" "}
          <Route
            path="/success"
            element={
              <RouteProtected element={<Ordersuccess />} redirectTo="/login" />
            }
          />
          {/* <Route
            path="/success/:txnid"
            element={
              <RouteProtected element={<Ordersuccess />} redirectTo="/login" />
            }
          /> */}
          {/* <Route
            path="/checkout"
            element={
              <RouteProtected
                element={<Payumoneycheckout />}
                redirectTo="/login"
              />
            }
          />{" "} */}
          <Route
            path="/checkout"
            element={
              <RouteProtected element={<CheckOut />} redirectTo="/login" />
            }
          />
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
          <Route path="/AboutUs" element={<NewAboutUs />} />
          <Route path="/terms-condition" element={<Terms />} />
          <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Faq" element={<Faqs />} />
          <Route path="/Store" element={<StoreLocation />} />
          <Route
            path="/profile/myorder/orderDetails/:id"
            element={<OrderDetails />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Support" element={<Suport />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Blogdetails/:id" element={<Blogdetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default HomeRouter;
