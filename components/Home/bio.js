import Image from "next/image";
import Link from "next/link";
import { FaBirthdayCake, FaMapMarkerAlt, FaFlask } from "react-icons/fa";
import { BiBook, BiMailSend } from "react-icons/bi";
import pic2 from "../../public/images/second.jpg";

export default function BioSection({ bioRef }) {
  return (
    <section className="bg-jack-cream text-jack-charcoal  min-h-screen">
      <div
        ref={bioRef}
        className="container flex flex-col-reverse lg:flex-row-reverse items-center gap-12 py-44 mt-14 lg:mt-28  max-w-[1200px]"
      >
        {/* Introduction */}
        <div className="container flex flex-1 flex-col lg:items-start lg:pl-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left mb-6">
            I'm Jack Park and I am a Fullstack Developer
          </h2>
          <p className="text-md text-center lg:text-left mb-6">
            Hi! My name is Jack Park. I am a Web Developer, and I'm very
            passionate and dedicated to my work. I am interested in building
            robust web applications using the latest technologies.
          </p>
          {/* Basic information */}
          <div className="mb-6 flex flex-col self-center lg:self-start">
            <div className="flex items-center">
              <BiMailSend className="inline-block mr-3" />
              <span className="pr-3 min-w-[100px]">Mail:</span>
              <span> jkhpark23@gmail.com</span>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="inline-block mr-3" />
              <span className="pr-3 min-w-[100px]">Location:</span>
              <span> Seoul, South Korea</span>
            </div>
            <div className="flex items-center">
              <BiBook className="inline-block mr-3" />
              <span className="pr-3 min-w-[100px]">Education:</span>
              <span> University of Texas at Austin </span>
            </div>
            <div className="flex items-center">
              <FaFlask className="inline-block mr-3" />
              <span className="pr-3 min-w-[100px]">Major:</span>
              <span> Computer Science </span>
            </div>
            <div className="flex items-center">
              <FaBirthdayCake className="inline-block mr-3" />
              <span className="pr-3 min-w-[100px]">Birthday:</span>
              <span> 1996.09.23</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-center flex-wrap gap-6 mt-16">
            <Link href="/projects">
              <button className="btn btn-peach  hover:bg-jack-highlight">
                View Projects
              </button>
            </Link>
            <a href="mailto:jkhpark23@gmail.com">
              <button className="btn btn-green hover:bg-jack-highlight ">
                Contact Me
              </button>
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center  flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <Image src={pic2} width={400} height={500} alt="handsome developer" />
        </div>
      </div>
    </section>
  );
}
