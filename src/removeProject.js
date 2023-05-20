import { projectList } from "./createProject.js";
import { renderProjects } from "./createProject.js";

export default function removeProject(event) {
  const dataId = event.target.getAttribute("data-id");
  removeProjectFromId(dataId);
  renderProjects();
}

function removeProjectFromId(dataId) {
  const index = projectList.findIndex(
    (element, index) => index === Number(dataId)
  );

  if (index === -1) {
    alert("Project List Empty");
  } else {
    projectList.splice(index, 1);
  }
  console.table(projectList);
}
