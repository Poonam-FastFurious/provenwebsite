import HomeBlog from "../Blog/HomeBlog";
import HomeBanner from "./HomeBanner";
import HomeBestSelling from "./HomeBestSelling";
import HomeCategory from "./HomeCategory";
import HomeSecondBanner from "./HomeSecondBanner";
import HomeSmallBanner from "./HomeSmallBanner";
import Industrialro from "./Industrialro";
import Newcertificate from "./Newcertificate";
import Newproducts from "./Newproducts";
import Newservice from "./Newservice";
import Serviceoffer from "./Serviceoffer";
import Services from "./Services";
import SpareParts from "./SpareParts";
import Testimonial from "./Testimonial";
import TrendindItem from "./TrendindItem";
function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCategory />
      <HomeBestSelling heading="Best Selling Purifiers" />
      <HomeSecondBanner />
      <Newproducts />
      <SpareParts />
      <HomeSmallBanner />
      <Industrialro />
      <Services />
      <TrendindItem />
      <Testimonial />
      <Newcertificate />
      <Newservice />
      <HomeBlog />
      <Serviceoffer />
    </>
  );
}

export default Home;
