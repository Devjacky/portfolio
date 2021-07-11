import Image from "next/image";
import { useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import Header from "../Header";
import mainpic from "../../public/images/main.jpg";
import Bio from "./bio";

import { FaGithub } from "react-icons/fa";

export default function Home() {
  const bioRef = useRef(null);

  return (
    <main>
      <section className="relative container max-w-[1400px]  min-h-screen flex flex-col">
        <Header />
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-10 py-14 lg:py-28 ">
          {/* Introduction */}
          <div className="flex flex-1 flex-col  text-center">
            <ReactTypingEffect
              text={["박관해", "Jack Park"]}
              cursorRenderer={(cursor) => (
                <h1 className="text-jack-cream">{cursor}</h1>
              )}
              typingDelay={200}
              displayTextRenderer={(text) => {
                return <h1>{text}</h1>;
              }}
              className="text-7xl text-jack-cream"
            />
            <h2 className="text-3xl text-center my-6">Fullstack Developer</h2>
            {/* Buttons */}
            <div className="flex justify-center flex-wrap gap-6 mt-10">
              <a href="/resume.pdf" target="_blank">
                <button className="btn btn-green hover:bg-jack-peach ">
                  View Resume
                </button>
              </a>
              <a href="https://github.com/Devjacky" target="_blank">
                <button className="btn btn-cream text-jack-charcoal hover:bg-jack-peach hover:text-jack-cream">
                  View Github <FaGithub className="inline-block ml-3" />
                </button>
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center flex-1 mb-2 md:mb-4 lg:mb-0 z-10">
            <Image
              src={mainpic}
              width={250}
              height={350}
              alt="handsome developer"
              className="rounded-full"
            />
          </div>
        </div>

        <div
          className="absolute bottom-[50px] left-0 w-full z-10 hidden lg:block mobile:hidden "
          onClick={() => {
            if (bioRef && bioRef.current) {
              bioRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="text-white text-lg block max-w-[200px] text-center cursor-pointer m-auto">
            <span className="underline">Scroll Down</span>
            <span className="border-2 border-solid block rounded-2xl m-auto mt-[10px] h-[36px] w-[28px] relative">
              <span className="bg-white block rounded-2xl absolute top-[8px] left-[50%] h-[6px] w-[6px] transform -translate-x-1/2 animate-scroll"></span>
            </span>
          </div>
        </div>
      </section>
      <Bio bioRef={bioRef} />
    </main>
  );
}
