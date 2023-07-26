import { createToDo } from "./ToDo";
import createProject from "./projects";

// Variables
let defaultList = [];
let compras = createProject("compras");
let facultad = createProject("facultad");
let projectsArray = [compras, facultad];

// Nodes References
const inbox = document.getElementById("nav__buttons-default");
const body = document.querySelector(".project-preview");
const addButton = document.querySelector(".nav__add-button");
const pushButton = document.querySelector(".modal__add-button");
const modal = document.querySelector(".modal");
const hideModal = document.querySelector(".modal__button");
const showAddProject = document.querySelector(".nav__projects-title");
const hideAddProject = document.querySelector(".nav__cancel-project-button");
const projectModal = document.querySelector(".nav__project-add-popup");
const projectList = document.querySelector(".nav__project-list");
const addProject = document.querySelector(".nav__add-project-button");

//Show modal on click
addButton.addEventListener("click", () => {
  modal.showModal();
});

hideModal.addEventListener("click", () => {
  modal.close();
});

showAddProject.addEventListener("click", () => {
  projectModal.style.visibility = "visible";
});

hideAddProject.addEventListener("click", () => {
  projectModal.style.visibility = "hidden";
});

//Push to do on screen
function pushToDo(todo) {
  const toDoCard = document.createElement("div");
  toDoCard.classList.add("to-do-card");

  const toDoTitle = document.createElement("h1");
  toDoTitle.classList.add("to-do-title");
  toDoTitle.innerText = todo.name;
  toDoCard.appendChild(toDoTitle);

  const toDoDescription = document.createElement("p");
  toDoDescription.classList.add("to-do-description");
  toDoDescription.innerText = todo.description;
  toDoCard.appendChild(toDoDescription);

  const toDoDate = document.createElement("p2");
  toDoDate.classList.add("to-do-date");
  toDoDate.innerText = todo.date;
  toDoCard.appendChild(toDoDate);

  const toDoButton = document.createElement("button");
  toDoButton.innerText = "✔";
  toDoButton.classList.add("to-do-button");
  toDoCard.appendChild(toDoButton);

  body.appendChild(toDoCard);
}

// Sumbit project on screen
addProject.addEventListener("click", () => {
  const projectDivButton = document.createElement("button");
  const projectName = document.querySelector(
    ".nav__text-add-project-popup"
  ).value;

  let projectFolder = createProject(projectName);

  projectDivButton.classList.add("nav__project-title");
  projectDivButton.innerText = projectFolder.name;
  projectList.appendChild(projectDivButton);

  projectsArray.push(projectFolder);
  projectModal.style.visibility = "hidden";
});

// Sumbit and push To Do
pushButton.addEventListener("click", () => {
  const taskName = document.getElementById("to-do-name").value;
  const taskDescription = document.getElementById("to-do-description").value;

  const taskDueDate = document.getElementById("to-do-date").value;

  let newToDo = createToDo(
    taskName,
    taskDescription,
    taskDueDate,
    activeProject
  );

  pushToDo(newToDo);
  defaultList.push(newToDo);
  modal.close();
});

// SETTING AND GETTING ACTIVE PROJECT
const projects = document.querySelectorAll(".nav__project-title");
let activeProject;

projects.forEach((project) => {
  project.addEventListener("click", () => {
    projects.forEach((project) => {
      if (project.className === "nav__project-title active")
        project.classList.remove("active");
    });
    project.classList.add("active");
    activeProject = project.innerText;
  });
});
