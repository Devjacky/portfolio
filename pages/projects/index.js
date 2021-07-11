import Projects from "../../components/Projects";
import { getAllProjects } from "../../utils/projects-util";

export function getStaticProps() {
  const projectsList = getAllProjects();

  return {
    props: {
      projects: projectsList,
    },
  };
}

export default function ProjectsPage(props) {
  return <Projects projects={props.projects} />;
}
