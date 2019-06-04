document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");
  const newTaskDescription = document.getElementById("new-task-description");

  createTaskForm.addEventListener("submit", createNewTask);

  deleteButton = document.createElement("button");
  createTaskForm.appendChild(deleteButton);
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", deleteFx);

  function createNewTask(event) {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    appendNewTask(newTask);
  }

  function appendNewTask(newTask) {
    tasks.appendChild(newTask);
    newTaskDescription.value = "";
  }

  function deleteFx() {
    console.log("DeleteFx fires");
    tasks.removeChild(tasks.lastChild);
  }
});

// A delete function that will remove tasks from your list

// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)

// As a challenge, implement a sorting functionality that displays the tasks ASC/DESC based on priority

// An additional input field (e.g. user, duration, date due)

// Ability to edit tasks

// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
