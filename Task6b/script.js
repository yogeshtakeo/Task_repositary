// Select the form and task list elements from the HTML
const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");

const tasks = {}; // empty object to store tasks and their ids

let id = 1; // id for the first task

//Add event listener
form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent default submission behavior
  //new task input and get it's value
  const newTaskInput = document.getElementById("new-task-input");
  const newTask = newTaskInput.value;
  //check to see if the new task is empty
  if (newTask.trim() !== "") {
    const taskId = generateId(); //Unique ID for the task
    const task = { id: taskId, text: newTask }; // new task object
    tasks[taskId] = task;
    //new task item element for the task and append it to the task list
    const taskItem = createTaskItem(task);
    taskList.appendChild(taskItem);
    newTaskInput.value = ""; //clear the new task input field
  }
});
// Create a new task item element
function createTaskItem(task) {
  const taskItem = document.createElement("li");
  taskItem.dataset.taskId = task.id;
  // Set the innerHTML of the task item to a template literal with the task's text and a delete button
  taskItem.innerHTML = `
    <span>${task.text}</span>
    <button class="delete-button">Delete</button>
  `;
  taskItem
    .querySelector(".delete-button")
    .addEventListener("click", deleteTask);
  return taskItem;
}
//delete a task
function deleteTask(event) {
  //Get the task's ID from its parent list item's data-task-id attribute
  const taskId = event.target.parentNode.dataset.taskId;
  delete tasks[taskId];
  // Select the task item element with the corresponding data-task-id attribute
  const taskItem = document.querySelector(`li[data-task-id="${taskId}"]`);
  taskItem.remove();
}

function generateId() {
  return id++;
}
