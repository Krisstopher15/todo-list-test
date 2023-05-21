import addTodoToProject from "./todoForm.js";
import removeProject from "./removeProject.js";
import { renderTodos, findProject } from "./renderTodos.js";

let projectList = [];
let id = 0;

class Project {
  constructor(id, name) {
    this.name = name;
    this.id = id;
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

  const project = new Project(id, inputProjectName);
  pushProjects(project);

  id++;
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
      <p data-id="${index}" class="project-element-name">${element.name}</p>
      <button data-id="${index}" class="btn-remove">del</button>
    `;

    const btnRemove = projectElement.querySelector(".btn-remove");
    const projectName = projectElement.querySelector(".project-element-name");

    projectName.addEventListener("click", findProject);
    btnRemove.addEventListener("click", removeProject);

    projects.appendChild(projectElement);
  });
}

export { createProject, projectList, renderProjects };
