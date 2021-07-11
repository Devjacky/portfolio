import ReactMarkdown from "react-markdown";
import Image from "next/image";

import Header from "../../Header";

export default function projectDetails(props) {
  const { project } = props;

  // to be able to use nextjs Image from markdown
  const projectRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const imgSrc = `/images/projects/${project.slug}/${image.properties.src}`;

        return (
          <div className="self-center">
            <Image src={imgSrc} alt={image.alt} width={640} height={420} />
          </div>
        );
      }
      return (
        <p className="mt-3 mb-6 text-lg text-center box-border px-6">
          {paragraph.children}
        </p>
      );
    },
  };

  return (
    <section className="relative container max-w-[1400px]  min-h-screen flex flex-col">
      <Header />
      <div className="container max-w-[920px]">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          {project.title}
        </h1>
        <div>
          <article className="flex flex-col ">
            <ReactMarkdown components={projectRenderers}>
              {project.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  );
}
