const Task = (function createTaskClass() {
  let id = 0
  return class Task {
  constructor(description, taskList){
    this.id = ++id
    this.description = description
    this.taskList = taskList;
    this.taskList.tasks.push(this)
  }

  htmlTemplate(){
    return `<li>${this.description}<button data-id="${this.id}">X</button></li>`
  }
}
})()
