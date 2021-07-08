import Image from "next/image";
import { FaGithub, FaNode } from "react-icons/fa";
// import { SiJavascript, SiBootstrap, SiMongodb } from "react-icons/si";

export default function ProjectCard(props) {
  return (
    <div className="mb-8">
      <Image src={props.img} layout="responsive" className="preview" />
      <div className="max-w-[420px] mt-8">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">{props.name}</h2>
          <div className="flex items-center">
            {props.icons.map((tech, idx) => {
              const color = tech[1];
              const Icon = tech[0];
              return (
                <Icon
                  key={idx}
                  size="2.5rem"
                  fill={`${color}`}
                  className="ml-4"
                ></Icon>
              );
            })}
          </div>
        </div>
        <p className="mt-6">{props.description}</p>
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          <button className="btn btn-peach hover:bg-jack-cream hover:text-jack-charcoal">
            Learn More
          </button>
          <button
            className={`btn btn-cream text-jack-charcoal ${
              props.isOpen ? "hover:bg-jack-peach hover:text-jack-cream" : ""
            } disabled:opacity-50`}
            disabled={props.isOpen ? false : true}
          >
            View Source <FaGithub className="inline-block ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
