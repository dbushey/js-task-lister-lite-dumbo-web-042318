document.addEventListener("DOMContentLoaded", init)
  const taskList = new TaskList();
  const form = document.getElementById('create-task-form');
  const box = document.getElementById("new-task-description");
  const tasksArea = document.getElementById("tasks");

function init(){
  // Adds a listener for the "submit" event.
  form.addEventListener('submit', createTask)
}

function createTask(e) {
  e.preventDefault();
  const task = new Task(box.value, taskList);
  renderTask(task)
}

function renderTask(task){
  let newTask = task.htmlTemplate()
  tasksArea.innerHTML += newTask
}

const divList = document.querySelector("div#list")

divList.addEventListener('click', handleClickEvent)

function handleClickEvent(e){
  if (e.target.localName === "button") {
    let parentEl = e.target.parentElement
    parentEl.remove()
  }
}
