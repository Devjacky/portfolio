import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard(props) {
  const { title, image, description, url, source, slug } = props.project;

  const imgPath = `/images/projects/${slug}/${image}`;

  return (
    <div className="mb-8">
      <Image
        src={imgPath}
        width={420}
        height={300}
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
          <a href={url} target="_blank">
            <button
              className={`${
                url.length ? "" : "hidden"
              } btn btn-peach hover:bg-jack-cream hover:text-jack-charcoal`}
            >
              <BiLinkExternal className="inline-block mr-3" /> View Site
            </button>
          </a>

          <a href={source} target="_blank">
            <button
              className={`btn btn-cream text-jack-charcoal ${
                source ? "hover:bg-jack-peach hover:text-jack-cream" : ""
              } disabled:opacity-50`}
              disabled={source ? false : true}
            >
              View Source <FaGithub className="inline-block ml-3" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
