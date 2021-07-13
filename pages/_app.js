import "tailwindcss/tailwind.css";
import "../public/styles.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Jack Park</title>
        <meta
          name="description"
          content="Portfolio website for Jack / Kwan Hai Park"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {pageLoading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
