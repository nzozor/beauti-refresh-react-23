import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import Footer from "../components/Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
