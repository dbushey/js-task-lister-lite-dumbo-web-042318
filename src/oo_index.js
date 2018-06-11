
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.getElementById('create-task-form');

  // Adds a listener for the "submit" event.
  form.addEventListener('submit', function(e) {
    const task = document.getElementById("new-task-description").value;
    e.preventDefault();
    //console.log(task);

    const tasksArea = document.getElementById("tasks");
   // const taskLine = document.createElement('li');

    tasksArea.innerHTML += `<li>${task}</li>`
  });





});
