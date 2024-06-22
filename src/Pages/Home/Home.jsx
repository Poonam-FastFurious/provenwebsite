import Certificate from "./Certificate";
import ExploreProduct from "./ExploreProduct";
import HomeBanner from "./HomeBanner";

import HomeBestSelling from "./HomeBestSelling";
import HomeCategory from "./HomeCategory";
import HomeSecondBanner from "./HomeSecondBanner";
import HomeSmallBanner from "./HomeSmallBanner";
import Serviceoffer from "./Serviceoffer";
import Services from "./Services";
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
      <Certificate />
      <Serviceoffer />
    </>
  );
}

export default Home;
