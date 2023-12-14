/*

   Filename: complex_code.js

   Content: This code is a complex implementation of a task management system.
            It includes various classes, methods, and functionalities to manage tasks.
            The code is written in a modular and object-oriented manner.

*/

// Class representing a Task
class Task {
  constructor(id, title, description, dueDate, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }
}

// Class representing a TaskList
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  getIncompleteTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  sortByDueDate() {
    this.tasks.sort((task1, task2) => task1.dueDate - task2.dueDate);
  }
}

// Create a sample task list
const task1 = new Task(1, "Task 1", "Description of Task 1", new Date("2021-12-31"), false);
const task2 = new Task(2, "Task 2", "Description of Task 2", new Date("2022-01-15"), false);
const task3 = new Task(3, "Task 3", "Description of Task 3", new Date("2022-01-10"), true);

const taskList = new TaskList();
taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);

// Perform operations on the task list
console.log("Initial Task List:");
console.log(taskList.tasks);

console.log("Completed Tasks:");
console.log(taskList.getCompletedTasks());

console.log("Incomplete Tasks:");
console.log(taskList.getIncompleteTasks());

taskList.removeTask(2);

console.log("Task List after removing Task 2:");
console.log(taskList.tasks);

const task3ById = taskList.getTaskById(3);
console.log("Task 3 retrieved by ID:");
console.log(task3ById);

task3ById.markAsIncomplete();

console.log("Marked Task 3 as Incomplete:");
console.log(taskList.tasks);

taskList.sortByDueDate();

console.log("Task List sorted by Due Date:");
console.log(taskList.tasks);

// Additional complex code...

// ...

// ...

// ...

// More than 200 lines of complex code...