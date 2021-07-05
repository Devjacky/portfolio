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
import ksakorea from "../../public/ksakorea.png";
import coming from "../../public/coming.jpg";
import Image from "next/image";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <>
      <Header />

      <main className="relative">
        {/* Projects section */}
        <section className="bg-white text-jack-charcoal py-10 mt-10 lg:mt-20 ">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 ">
            {/* Introduction */}
            <div className="flex flex-1 flex-col lg:items-start ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left mb-6">
                Recent Projects
              </h2>
              {/* cards */}

              <div className="container flex flex-col lg:flex-row flex-wrap justify-around gap-12">
                <ProjectCard
                  name="KSA Korea"
                  icons={[
                    [SiNodeDotJs, "green"],
                    [SiJavascript, "#fddc01"],
                    [SiBootstrap, "indigo"],
                    [SiMongodb, "green"],
                  ]}
                  description=" Social Marketing App designed to encourage recycling. Created using
          Express, Node, MongoDB, deployed on Heroku."
                  img={coming}
                  isOpen={false}
                />
                <ProjectCard
                  name="Crispy - Crispr Scraper"
                  icons={[
                    [SiNodeDotJs, "green"],
                    [SiJavascript, "#fddc01"],
                    [SiBootstrap, "indigo"],
                    [SiMongodb, "green"],
                  ]}
                  description=" Social Marketing App designed to encourage recycling. Created using
          Express, Node, MongoDB, deployed on Heroku."
                  img={coming}
                  isOpen={false}
                />
                <ProjectCard
                  name="Date Night"
                  icons={[
                    [SiNodeDotJs, "green"],
                    [SiJavascript, "#fddc01"],
                    [SiBootstrap, "red"],
                    [SiMongodb, "green"],
                  ]}
                  description="         Social Marketing App designed to encourage recycling. Created using
          Express, Node, MongoDB, deployed on Heroku."
                  img={coming}
                  isOpen={true}
                />
                <ProjectCard
                  name="Gnarly"
                  icons={[
                    [SiNodeDotJs, "green"],
                    [SiJavascript, "#fddc01"],
                    [SiBootstrap, "indigo"],
                    [SiMongodb, "green"],
                  ]}
                  description="         Social Marketing App designed to encourage recycling. Created using
          Express, Node, MongoDB, deployed on Heroku."
                  img={coming}
                  isOpen={false}
                />
                <ProjectCard
                  name="Portfolio"
                  icons={[
                    [SiNodeDotJs, "green"],
                    [SiJavascript, "#fddc01"],
                    [SiBootstrap, "indigo"],
                    [SiMongodb, "green"],
                  ]}
                  description="         Social Marketing App designed to encourage recycling. Created using
          Express, Node, MongoDB, deployed on Heroku."
                  img={coming}
                  isOpen={true}
                />
                <ProjectCard
                  name="Reddit Short Videos"
                  icons={[
                    [SiNodeDotJs, "green"],
                    [SiJavascript, "#fddc01"],
                    [SiBootstrap, "indigo"],
                    [SiMongodb, "green"],
                  ]}
                  description="         Social Marketing App designed to encourage recycling. Created using
          Express, Node, MongoDB, deployed on Heroku."
                  img={coming}
                  isOpen={true}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
