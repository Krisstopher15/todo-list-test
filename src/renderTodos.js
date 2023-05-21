import { projectList } from "./createProject";
import { todoForm } from "./todoForm.js";

function renderTodos(dataId) {
  const todoList = document.querySelector(".todo-list");
  const todos = projectList[dataId].todoList;

  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    const projectInfo = document.createElement("div");
    todoElement.classList.add("todo");
    projectInfo.classList.add("project-info");

    projectInfo.innerHTML = `
      <p>${projectList[dataId].name}</p>
      <button data-id="${dataId}" class="btn-addTask">ADD TASK</button>
    `;
    todoElement.innerHTML = `
        <p>${todo.title}</p> 
        <p>${todo.description}</p>
    `;

    todoList.appendChild(projectInfo);
    todoList.appendChild(todoElement);

    const btnAddTask = projectInfo.querySelector(".btn-addTask");

    btnAddTask.addEventListener("click", todoForm);
  });
}

function findProject(event) {
  const dataId = event.target.getAttribute("data-id");
  renderTodos(dataId);
}

export { renderTodos, findProject };
