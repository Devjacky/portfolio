import ReactMarkdown from "react-markdown";
import Image from "next/image";

import Header from "../../Header";

export default function projectDetails(props) {
  const { project } = props;

  // to be able to use nextjs Image from markdown
  const projectRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/projects/${project.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div>
            <Image
              src={`/images/projects/${project.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
    },
  };

  return (
    <section className="relative container max-w-[1400px]  min-h-screen flex flex-col">
      <Header />
      <div className="container max-w-[920px]">
        <div className="w-full">PlaceHolder Carousel Component</div>
        <h3>{project.title}</h3> <h4>Project Date</h4>
        <div>Tags Div</div>
        <div>
          <article>
            <ReactMarkdown renderers={projectRenderers}>
              {project.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  );
}
