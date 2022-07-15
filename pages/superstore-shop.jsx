import ShopLayout1 from "components/layouts/ShopLayout1";
import Navbar from "components/navbar/Navbar";
import Setting from "components/Setting";
import Section1 from "pages-sections/superstore-shop/Section1";
import Section2 from "pages-sections/superstore-shop/Section2";
import Section3 from "pages-sections/superstore-shop/Section3";
import Section4 from "pages-sections/superstore-shop/Section4";

import api from "utils/api/superstore-shop";

const IndexPage = (props) => {
  const {} = props;
  return (
    <ShopLayout1>
      <Navbar />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const carList = await api.getCarList();
  const carBrands = await api.getCarBrands();
  const moreItems = await api.getMoreItems();
  const mobileList = await api.getMobileList();
  const opticsList = await api.getOpticsList();
  const mobileShops = await api.getMobileShops();
  const opticsShops = await api.getOpticsShops();
  const serviceList = await api.getServiceList();
  const mobileBrands = await api.getMobileBrands();
  const flashDealsData = await api.getFlashDeals();
  const opticsBrands = await api.getOpticsBrands();
  const bottomCategories = await api.getCategories();
  const topCategories = await api.getTopCategories();
  const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = await api.getMainCarousel();
  const newArrivalsList = await api.getNewArrivalList();
  const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await api.getTopRatedProduct();
  return {
    props: {
      carList,
      carBrands,
      moreItems,
      mobileList,
      opticsList,
      serviceList,
      mobileShops,
      opticsShops,
      mobileBrands,
      opticsBrands,
      topCategories,
      flashDealsData,
      topRatedBrands,
      newArrivalsList,
      bigDiscountList,
      mainCarouselData,
      topRatedProducts,
      bottomCategories,
    },
  };
}
export default IndexPage;
