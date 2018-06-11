
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const form = document.getElementById('create-task-form');
  const box = document.getElementById("new-task-description");
  const tasksArea = document.getElementById("tasks");

  // Adds a listener for the "submit" event.
  let i = 0;
  form.addEventListener('submit', function(e) {
    const task = new Task(box.value, taskList);
    e.preventDefault();

    // tasksArea.innerHTML += `<li>${task.value}<button>X</button></li>
    let taskLi = document.createElement("li");
    let text = document.createTextNode(`${task.value}`)
    taskLi.appendChild(text)
    let newButton = document.createElement("button")
    newButton.setAttribute("data-num", ++i)
    newButton.innerHTML = "X"
    newButton.addEventListener('click', deleteTask)
    taskLi.append(newButton)
    tasksArea.appendChild(taskLi)
    form.reset();

    const deleteButtons = tasksArea.querySelectorAll("button");

    function deleteTask(e){
      const buttonNum = e.target.dataset.num
      const buttonToDelete = getElementByAttribute("buttonNum")
      console.log(buttonToDelete);
      // document.removeElement(button)
      // deleteButtons.removeChild(buttonNum);
    }

    // deleteButtons.forEach()

    //deleteButtons.addEventListener('click')
    // let newArray = [...deleteButtons]
    // for(const el in newArray) {
    //   el.addEventListener('click', deleteTask)
    // }
    // console.log(newArray)

  });



});
