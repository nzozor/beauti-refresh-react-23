import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

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
