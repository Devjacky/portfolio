import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Header from "../Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="relative">
        <section className="container  py-10 mt-10 lg:mt-20 ">
          <h1 className="text-3xl mb-10">Contact Me</h1>

          <p className="text-lg">
            Feel free to contact me about possible projects or if you have any
            questions regarding my portfolio!
          </p>

          <div className="flex justify-center flex-wrap gap-6 mt-10">
            <a href="mailto:jkhpark23@gmail.com">
              <button className="btn btn-green hover:bg-jack-peach ">
                Mail me!
              </button>
            </a>
            <a
              href="https://github.com/Devjacky"
              target="_blank"
              rel="noopener"
            >
              <button className="btn btn-cream text-jack-charcoal hover:bg-jack-peach hover:text-jack-cream">
                View Github <FaGithub className="inline-block ml-3" />
              </button>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
