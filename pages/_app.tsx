import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderNav from "../components/HeaderNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
