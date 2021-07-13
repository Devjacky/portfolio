import Header from "../Header";

import ProjectCard from "./project-card";

export default function Projects(props) {
  const { projects } = props;

  return (
    <>
      <Header />
      <section className="relative max-w-[1600px]">
        <div className=" text-jack-charcoal py-10 mt-10 lg:mt-20 ">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 ">
            <div className="flex flex-1 flex-col lg:items-start ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center w-full mb-10">
                Recent Projects
              </h2>

              <div className="container flex flex-col lg:flex-row flex-wrap justify-around gap-12">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
