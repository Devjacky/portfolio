import Head from "next/head";
import Image from "next/image";

import Header from "../Header";
import handsome from "../../public/handsome.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Introduction */}
          <div className="flex flex-1 flex-col lg:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              Hello, I'm <span className="text-jack-peach">Jack</span>, a
              Fullstack Developer
            </h2>
            <p className="text-lg text-center lg:text-left mb-6">
              I'm passionate about building robust web applications using the
              latest technologies.
            </p>
            {/* Buttons */}
            <div className="flex justify-center flex-wrap gap-6">
              <button className="btn btn-peach hover:bg-jack-cream hover:text-jack-charcoal">
                View Resume
              </button>
              <button className="btn btn-cream hover:bg-jack-peach hover:text-jack-cream">
                Hire Me
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center xl:justify-end flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <Image
              src={handsome}
              width={250}
              height={350}
              alt="handsome developer"
              className="rounded-full"
            />
          </div>
        </div>
      </main>
    </>
  );
}
