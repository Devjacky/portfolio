import Image from "next/image";
import { useRef } from "react";

import Header from "../Header";
import handsome from "../../public/handsome.jpg";
import Bio from "./bio";

import { BiDownArrow } from "react-icons/bi";

import { FaGithub } from "react-icons/fa";

export default function Home() {
  const bioRef = useRef(null);

  return (
    <main>
      <section className="relative container max-w-[1400px]">
        <Header />
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-10 py-14 lg:py-28 ">
          {/* Introduction */}
          <div className="flex flex-1 flex-col lg:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              <span className="text-jack-peach">Jack</span>
            </h2>
            <p className="text-lg text-center lg:text-left mb-6">
              Fullstack Developer
            </p>
            {/* Buttons */}
            <div className="flex justify-center flex-wrap gap-6">
              <button className="btn btn-peach hover:bg-jack-cream hover:text-jack-charcoal">
                View Resume
              </button>
              <button className="btn btn-cream text-jack-charcoal hover:bg-jack-peach hover:text-jack-cream">
                View Github <FaGithub className="inline-block ml-3" />
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center xl:justify-end flex-1 mb-2 md:mb-4 lg:mb-0 z-10">
            <Image
              src={handsome}
              width={250}
              height={350}
              alt="handsome developer"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <BiDownArrow
            size="2.5rem"
            className="cursor-pointer animate-bounce"
            onClick={() => {
              if (bioRef && bioRef.current) {
                bioRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </section>
      <Bio bioRef={bioRef} />
    </main>
  );
}
