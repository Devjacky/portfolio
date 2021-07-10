import "tailwindcss/tailwind.css";
import "../public/styles.css";
import { useState, useEffect } from "react";
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

  return pageLoading ? <Loader /> : <Component {...pageProps} />;
}

export default MyApp;
