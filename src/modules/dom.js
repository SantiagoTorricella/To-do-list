import { createToDo } from "./ToDo";
// import createProject from "./projects";

// Nodes References
const body = document.querySelector(".project-preview");
const addButton = document.querySelector(".nav__add-button");
const pushButton = document.querySelector(".modal__add-button");
const modal = document.querySelector(".modal");

//Show modal button
addButton.addEventListener("click", () => {
  modal.showModal();
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
  toDoTitle.classList.add("to-do-description");
  toDoDescription.innerText = todo.description;
  toDoCard.appendChild(toDoDescription);

  const toDoDate = document.createElement("p2");
  toDoDate.classList.add("to-do-date");
  toDoDate.innerText = todo.date;
  toDoCard.appendChild(toDoDate);

  body.appendChild(toDoCard);
}

// Add task button
pushButton.addEventListener("click", () => {
  const taskName = document.getElementById("to-do-name").value;
  const taskDescription = document.getElementById("to-do-description").value;
  const taskDueDate = document.getElementById("to-do-date").value;
  let newToDo = createToDo(taskName, taskDescription, taskDueDate);
  console.log(newToDo);
  pushToDo(newToDo);
  modal.close();
});
