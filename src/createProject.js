import addTodoToProject from "./addTodo.js";
import removeProject from "./removeProject.js";

let projectList = [];

class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
}

function pushProjects(project) {
  projectList.push(project);
}

function createProject() {
  const inputProjectName = document.querySelector("#pj-name-input").value;

  const project = new Project(inputProjectName);
  pushProjects(project);

  renderProjects();
  addTodoToProject(project);
  console.table(projectList);
}

function renderProjects() {
  const projects = document.querySelector(".projects");

  projects.innerHTML = "";

  projectList.forEach((element, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-element");
    projectElement.innerHTML = `
      <div data-id="${index}">${element.name}</div>
      <button data-id="${index}" class="btn-remove">del</button>
    `;

    const btnRemove = projectElement.querySelector(".btn-remove");

    btnRemove.addEventListener("click", removeProject);

    projects.appendChild(projectElement);
  });
}

export { createProject, projectList, renderProjects };
