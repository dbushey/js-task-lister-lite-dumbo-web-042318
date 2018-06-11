class Task {

  constructor(value, taskList){
    this.value = value
    this.taskList = taskList;
    taskList.arr << this
  }

  deleteTask(){

  }
}
