document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");
  const newTaskDescription = document.getElementById("new-task-description");
  createTaskForm.addEventListener("submit", createNewTask);

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
});
