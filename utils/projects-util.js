import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content/projects");

export function getProjectFiles() {
  return fs.readdirSync(projectsDir);
}

export function getProjectData(projectIdentifier) {
  const projectSlug = projectIdentifier.replace(/\.md$/, "");
  const filePath = path.join(projectsDir, `${projectSlug}.md`);
  const projectContent = fs.readFileSync(filePath, "utf-8");
  //data - metadata content-actual markdown
  const { data, content } = matter(projectContent);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
}

export function getAllProjects() {
  const projectFiles = getProjectFiles();
  const projects = projectFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });
  return projects;
}
