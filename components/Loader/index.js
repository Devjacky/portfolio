import Lottie from "react-lottie";
import * as stache from "./moustache.json";

export default function Loader() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: stache.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Lottie options={options} height={200} width={200} />
      <a href="https://lottiefiles.com/41169-moustache-loading-loop#">
        <h1 className="text-xl">Animation by DOFX on LottieFiles</h1>
      </a>
    </div>
  );
}
