import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { BannerInfo } from "../types/banner";
import styles from "../styles/Home.module.css";
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
      <main className={styles.main}>
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
  const BannersResponse = await fetch(`${host}homepage-sliders`).catch(
    (error) => {
      console.warn("There was an error!", error);
      hasError = true;
      return {
        notFound: true,
      };
    }
  );
  if (hasError) return [];
  const serverDateResponse = await fetch(`${serverDateUrl}date`);
  let serverDate = (await serverDateResponse?.json()) || new Date();
  let bannersInfo: BannerInfo[] = await (BannersResponse as Response)?.json();
  const defaultBanner = () =>
    bannersInfo.filter((banner) => banner.isDefaultBanner === true);
  const filteredBanners = bannersInfo
    .filter((banner) =>
      serverDate
        ? new Date(serverDate).getTime() -
            new Date(banner.expirationDate).getTime() <=
          0
        : true
    )
    .filter((banner) =>
      serverDate
        ? new Date(serverDate).getTime() -
            new Date(banner.publication).getTime() >=
          0
        : true
    )
    .sort(
      (a: BannerInfo, b: BannerInfo) =>
        new Date(b.publication).getTime() - new Date(a.publication).getTime()
    )
    .filter((banner) => !banner.hide);
  return filteredBanners.length > 0 ? filteredBanners : defaultBanner();
};
export default Home;
