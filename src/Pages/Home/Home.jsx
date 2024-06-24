import Certificate from "./Certificate";
import ExploreProduct from "./ExploreProduct";
import HomeBanner from "./HomeBanner";

import HomeBestSelling from "./HomeBestSelling";
import HomeCategory from "./HomeCategory";
import HomeSecondBanner from "./HomeSecondBanner";
import HomeSmallBanner from "./HomeSmallBanner";
import Newservice from "./Newservice";
import Serviceoffer from "./Serviceoffer";
import Services from "./Services";
import Testimonial from "./Testimonial";
import TrendindItem from "./TrendindItem";

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCategory />
      <HomeBestSelling />
      <HomeSecondBanner />
      <ExploreProduct />
      <HomeSmallBanner />
      <Services />
      <TrendindItem />
      <Testimonial />
      <Certificate />
      <Newservice />
      <Serviceoffer />
    </>
  );
}

export default Home;
