let projectList = [];

class Project {
  constructor(name) {
    this.name = name;
  }
}

function pushProjects(project) {
  projectList.push(project);
}

function createProject() {
  const list = document.createElement("ul");
  const projectElem = document.createElement("li");
  const projects = document.querySelector(".projects");
  const inputProjectName = document.querySelector("#pj-name-input").value;

  list.textContent = inputProjectName;

  list.appendChild(projectElem);
  projects.appendChild(list);

  const project = new Project(inputProjectName);

  pushProjects(project);
  console.table(projectList);
}

function renderProjects(project) {}

export { createProject };
