
const form = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

const tasks = {};

form.addEventListener('submit', event => {
  event.preventDefault();
  
 const taskText = taskInput.value;
  
 const taskId = Object.keys(tasks).length;
  tasks[taskId] = { text: taskText };

  addTaskToDom(taskId, taskText);

  taskInput.value = '';
});

taskList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-button')) {
    const taskId = event.target.parentElement.dataset.taskId;
    
    delete tasks[taskId];
    event.target.parentElement.remove();
  }
});

function addTaskToDom(taskId, taskText) {
  const li = document.createElement('li');
  
li.dataset.taskId = taskId;

const span = document.createElement('span');
span.textContent = taskText;

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-button');
deleteButton.textContent = 'Delete';

li.appendChild(span);
li.appendChild(deleteButton);

taskList.appendChild(li);
}

