import { createToDo } from "./ToDo";
// import createProject from "./projects";

// Nodes References
const body = document.querySelector(".project-preview");
const addButton = document.querySelector(".nav__add-button");
const pushButton = document.querySelector(".modal__add-button");
const modal = document.querySelector(".modal");
const showAddProject = document.querySelector(".nav__projects-title");
const projectModal = document.querySelector(".nav__project-add-popup");
const projectList = document.querySelector(".nav__projects");
const addProject = document.querySelector(".nav__add-project-button");

//Show modal on click
addButton.addEventListener("click", () => {
  modal.showModal();
});

showAddProject.addEventListener("click", () => {
  projectModal.style.visibility = "visible";
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
  const projectDivTitle = document.createElement("button");
  const projectName = document.querySelector(
    ".nav__text-add-project-popup"
  ).value;
  projectDivTitle.classList.add("project-title");
  projectDivTitle.innerText = projectName;
  console.log(projectName);
  projectList.appendChild(projectDivTitle);
  projectModal.style.visibility = "hidden";
});

// Sumbit and push To Do
pushButton.addEventListener("click", () => {
  const taskName = document.getElementById("to-do-name").value;
  const taskDescription = document.getElementById("to-do-description").value;
  const taskDueDate = document.getElementById("to-do-date").value;
  let newToDo = createToDo(taskName, taskDescription, taskDueDate);
  pushToDo(newToDo);
  modal.close();
});

let toDoPrueba = createToDo("hola", "sabes que si", "28/02/23");
pushToDo(toDoPrueba);
