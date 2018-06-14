class TaskList {
  constructor(){
    this.tasks = [];
  }

  addTask(task){
    this.tasks.push(task)
  }

  deleteTask(task){
    let taskIndex = this.tasks.indexOf(task)
    this.tasks.splice(taskIndex, 1)
  }

  findTask(task){
    this.tasks.find(t => t.description === task)
  }

}
