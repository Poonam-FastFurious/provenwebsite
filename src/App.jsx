import "./App.css";
import HomeRouter from "./Components/Routerpage/HomeRouter";

import "../src/assets/assets/css/vendor/gicons.css";
import "../src/assets/assets/css/plugins/animate.css";
import "../src/assets/assets/css/plugins/swiper-bundle.min.css";
import "../src/assets/assets/css/plugins/owl.carousel.min.css";
import "../src/assets/assets/css/plugins/owl.theme.default.min.css";
import "../src/assets/assets/css/plugins/slick.min.css";
import "../src/assets/assets/css/plugins/nouislider.css";
import "../src/assets/assets/css/style.css";
import "../src/assets/assets/css/responsive.css";
import { useEffect, useState } from "react";
import Loader from "./Components/Specific/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <HomeRouter />
    </>
  );
}

export default App;
