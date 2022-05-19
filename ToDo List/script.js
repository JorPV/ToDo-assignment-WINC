// Selectors
const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".todo-list");


const addTodo = (event) => {
  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  // create a checkbox
  const checkCompleted = document.createElement("input");
  checkCompleted.type = "checkbox";
  checkCompleted.name = "task-crossed";
  checkCompleted.id = "task-crossed";
  checkCompleted.value = "task";
  checkCompleted.classList.add("checkbox");
  todoDiv.appendChild(checkCompleted);
  // li value
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value, //addTasks();
  newTodo.classList.add("todo-item");
  // append <li> to the <div>
  todoDiv.appendChild(newTodo);
  // create trash icon
  const trashIcon = document.createElement("img");
  trashIcon.classList.add("trash-bin");
  trashIcon.src = "img/red-trash.png";
  // trashIcon.innerHTML= '<i class="fa-light fa-trash-can"></i>'
  todoDiv.appendChild(trashIcon);
  // append to list
  toDoList.appendChild(todoDiv);
  // clear toDo input value every time
  todoInput.value = " ";
};

// Delete from DOM
const deleteTodo = (e) => {
  const item = e.target;
  // delete toDo
  if (item.classList[0] === "trash-bin") {
    const task = item.parentElement;
    task.classList.add("delete");
    task.addEventListener("transitionend", () => {
      task.remove();
    });
  }
};

// Check todo
const checkTodo = (event) => {
  const listItem = event.target;
  if (listItem.classList[0] === "checkbox") {
    const todo = listItem.parentElement;
    todo.classList.toggle("completed");
  }
};

// Event listeners
addButton.addEventListener("click",  addTodo);
todoInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {addTodo()}
});
toDoList.addEventListener("click", deleteTodo);
toDoList.addEventListener("click", checkTodo);
