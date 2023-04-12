const task = document.getElementById("task");
const addBtn = document.getElementById("add");

const output = document.getElementById("output");

addBtn.addEventListener("click", () => {
  if (task.value.length == " ") return;
  console.log(task.value);

  const taskContainer = document.createElement("list");
  taskContainer.classList.add("list-container");
  output.appendChild(taskContainer);

  const taskText = document.createElement("ul");
  taskText.innerText = task.value;
  taskContainer.appendChild(taskText);

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  taskContainer.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  taskContainer.appendChild(deleteButton);

  editButton.addEventListener("click", () => {
    task.value = taskText.innerText;
    const parent = editButton.parentElement;
    parent.remove();
  });

  deleteButton.addEventListener("click", () => {
    const parent = editButton.parentElement;
    parent.remove();
  });

  task.value = " ";
});
