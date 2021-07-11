import { FaGithub, FaNode } from "react-icons/fa";
import {
  SiJavascript,
  SiBootstrap,
  SiMongodb,
  SiNodeDotJs,
  SiElectron,
} from "react-icons/si";
import Header from "../Header";
import Nest from "../../public/nestjs-icon.svg";

import coming from "../../public/coming.jpg";
import Image from "next/image";
import ProjectCard from "./project-card";

export default function Projects(props) {
  const { projects } = props;

  return (
    <>
      <Header />
      <main className="relative">
        {/* Projects section */}
        <section className=" text-jack-charcoal py-10 mt-10 lg:mt-20 ">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 ">
            {/* Introduction */}
            <div className="flex flex-1 flex-col lg:items-start ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left mb-10">
                Recent Projects
              </h2>
              {/* cards */}
              <div className="container flex flex-col lg:flex-row flex-wrap justify-around gap-12">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
