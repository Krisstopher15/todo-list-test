import "./style.css";
import { createProject } from "./createProject";

const formAddProject = document.querySelector(".add-project");

formAddProject.addEventListener("submit", (e) => {
  e.preventDefault();
  createProject();
});
