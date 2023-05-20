import { projectList } from "./createProject";

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
      <button class="btn-addTask">ADD TASK</button>
    `;
    todoElement.innerHTML = `
        <p>${todo.title}</p> 
    `;

    todoList.appendChild(projectInfo);
    todoList.appendChild(todoElement);
  });

  console.log(projectList[dataId].todoList);
}

function findProject(event) {
  const dataId = event.target.getAttribute("data-id");
  renderTodos(dataId);
}

export { renderTodos, findProject };
