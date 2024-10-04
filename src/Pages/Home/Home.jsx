import HomeBlog from "../Blog/HomeBlog";
import CoperBenifit from "./CoperBenifit";
import HomeBanner from "./HomeBanner";
import HomeBestSelling from "./HomeBestSelling";
import HomeCategory from "./HomeCategory";
import HomeSecondBanner from "./HomeSecondBanner";
import HomeSmallBanner from "./HomeSmallBanner";
import Industrialro from "./Industrialro";
import NewHomeFeeture from "./NewHomeFeeture";
import Newproducts from "./Newproducts";
import Newservice from "./Newservice";
import Serviceoffer from "./Serviceoffer";
import Services from "./Services";
import SpareParts from "./SpareParts";
import Testimonial from "./Testimonial";
import TrendindItem from "./TrendindItem";
import SpareBenifit from "./SpareBenifit";
import IndustrialbenifitPage from "./IndustrialbenifitPage";
import ComercialBenifit from "./ComercialBenifit";
import ComercialBanner from "./ComercialBanner";
import FilterProcess from "./FilterProcess";
import Crausalforimage from "./Crausalforimage";
import CrausalforLogistick from "./CrausalforLogistick";
import Crausalforclient from "./Crausalforclient";
function Home() {
  return (
    <>
      <HomeBanner />
      <NewHomeFeeture />
      <CoperBenifit />
      <HomeCategory />
      <HomeBestSelling heading="Best Selling Purifiers" />
      <FilterProcess />
      <HomeSecondBanner />
      <Newproducts />
      <SpareBenifit />
      <SpareParts />
      <HomeSmallBanner />
      <IndustrialbenifitPage />
      <Industrialro />
      <ComercialBenifit />
      <ComercialBanner />
      <Services />
      <TrendindItem />
      <Testimonial />
      <Crausalforimage />
      <CrausalforLogistick />
      <Crausalforclient />
      <Newservice />
      <HomeBlog />
      <Serviceoffer />
    </>
  );
}

export default Home;
