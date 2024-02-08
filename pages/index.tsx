import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {BannerInfo, BannerInfoRaw} from "../types/banner";
import { REVIEWS } from "../mocks/reviews";
import HomePageSlider from "../components/HomePageSlider";
import BeautiSummary from "../components/BeautiSummary";
import BeautiReviews from "../components/BeautiReviews";
import ExclusiveStockist from "../components/ExclusiveStockist";
import MapBox from "../components/MapBox";

const Home: NextPage<{ bannersInfo: BannerInfo[] }> = ({
  bannersInfo,
  reviews,
}: any) => {
  return (
    <div>
      <main>
        <HomePageSlider banners={bannersInfo} />
        <BeautiSummary />
        <BeautiReviews reviews={reviews} />
        <ExclusiveStockist />
        <MapBox />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const bannersInfo = await getBanners();
  const reviews = REVIEWS;

  return {
    props: { bannersInfo, reviews },
  };
};

const getBanners = async () => {
  const host = process.env.CMS_BASE_URL as string;
  const serverDateUrl = process.env.DATE_API as string;
  let hasError = false;
  const BannersResponse = await fetch(`${host}/api/home-page-banners?populate=*`).catch(
    (error) => {
      console.log("There was an error!", error);
      hasError = true;
      return {
        notFound: true,
      };
    }
  );
  if (hasError) return [];
  const serverDateResponse = await fetch(`${serverDateUrl}date`);
  let serverDate = (await serverDateResponse?.json()) || new Date();
  let bannersInfo: BannerInfoRaw = await (BannersResponse as Response)?.json();
  console.log('bannerInfo', bannersInfo);
  const defaultBanner = () =>
    bannersInfo.data.filter((banner: any) => banner.isDefaultBanner);
  const filteredBanners = bannersInfo.data
    .filter((banner: any) => serverDate && banner.attributes.expirationDate ? new Date(serverDate).getTime() - new Date(banner.attributes.expirationDate).getTime() <= 0 : true)
    .filter((banner: any) => serverDate && banner.attributes.publication ? new Date(serverDate).getTime() - new Date(banner.attributes.publication).getTime() >= 0 : true)
    .sort((a: any, b: any) => new Date(b.attributes.publication).getTime() - new Date(a.attributes.publication).getTime()).filter((banner: any) => !banner.attributes.hide)
  return filteredBanners.length > 0 ? filteredBanners : defaultBanner()
};
export default Home;
