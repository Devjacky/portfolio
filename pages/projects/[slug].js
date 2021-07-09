import ProjectDetails from "../../components/Projects/ProjectDetails";
import { getProjectData, getProjectFiles } from "../../utils/projects-util";

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 6000,
  };
}

export function getStaticPaths() {
  const projectFileNames = getProjectFiles();
  const slugs = projectFileNames.map((name) => name.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default function ProjectDetailsPage(props) {
  return <ProjectDetails project={props.project} />;
}
