import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";
import { NextPage } from "next";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>
          Beauti Skin Clinic | Advanced Skin Treatments in SW London
        </title>
        <meta
          name="description"
          content="Professional skin and waxing services only 5 mins walk from Oval Station.
  Founded by Aesthetician Cinzia Campigotto who has over 20 years of experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
