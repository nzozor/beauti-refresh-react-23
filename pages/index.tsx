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
    <div className={styles.container}>
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
  const response = await fetch(
    "http://cms.beautiskinclinic.com/homepage-sliders"
  );

  // Parse the JSON
  const bannersInfo = await response.json();
  const reviews = REVIEWS;
  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { bannersInfo, reviews },
  };
};

export default Home;
