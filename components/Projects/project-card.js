import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaNode } from "react-icons/fa";
// import { SiJavascript, SiBootstrap, SiMongodb } from "react-icons/si";

export default function ProjectCard(props) {
  const { title, image, description, isOpen, slug } = props.project;
  const linkPath = `/projects/${slug}`;
  const imgPath = `/images/projects/${slug}/${image}`;

  return (
    <div className="mb-8">
      <Image
        src={imgPath}
        width={100}
        height={100}
        layout="responsive"
        className="preview"
      />
      <div className="max-w-[420px] mt-8">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">{title}</h2>
          <div className="flex items-center"></div>
        </div>
        <p className="mt-6">{description}</p>
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          <Link href={linkPath}>
            <a>
              <button className="btn btn-peach hover:bg-jack-cream hover:text-jack-charcoal">
                Learn More
              </button>
            </a>
          </Link>

          <button
            className={`btn btn-cream text-jack-charcoal ${
              isOpen ? "hover:bg-jack-peach hover:text-jack-cream" : ""
            } disabled:opacity-50`}
            disabled={isOpen ? false : true}
          >
            View Source <FaGithub className="inline-block ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
