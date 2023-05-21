import { projectList } from "./createProject";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function todoForm() {
  const currentProject = event.target.getAttribute("data-id");
  const todoList = document.querySelector(".todo-list");
  const form = document.createElement("form");
  form.classList.add("todo-form");

  form.innerHTML = `
    <label for="title">title</label>
    <input type="text" name="title" id="title" />
    <label for="description">Description</label>
    <input type="text" name="description" id="description" />
    <label for="date">Date</label>
    <input type="date" name="date" id="date" />
    <button type="submit">Accept</button>
  `;
  todoList.appendChild(form);

  const title = form.querySelector("#title").value;
  const description = form.querySelector("#description").value;
  const date = form.querySelector("#date");
  //   addTodoToProject(title, description, "Hi");
  console.log(currentProject);
}

export default function addTodoToProject(project) {
  const todo = new Todo("Hola", "Sisi", "20/07/2024", "High");

  project.addTodo(todo);
}

export { todoForm };
