// Selectors
const todoInput = document.querySelector(".todo-input");
const addbutton = document.querySelector(".add-button");
const toDoList = document.querySelector(".todo-list");
const newTodo = document.createElement("li");
const trashIcon = document.createElement("button");

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
  newTodo.innerText = todoInput.value, addTasks();
  newTodo.classList.add("todo-item");
  // append <li> to the <div>
  todoDiv.appendChild(newTodo);
  // create trash icon
  trashIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  trashIcon.classList.add("trashBin");
  todoDiv.appendChild(trashIcon);
  // append to list
  toDoList.appendChild(todoDiv);
  // clear toDo input value
  todoInput.value = " ";
};

// Delete from DOM
const deleteTodo = (action) => {
  const item = action.target;
  // delete toDo
  if (item.classList[0] === "trashBin") {
    const todo = item.parentElement;
    todo.addEventListener(() => {
      todo.remove();
    });
  }
  // check box
  if (item.classList[0] === "checkbox") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};

// Event listeners
addbutton.addEventListener("click", addTodo);
trashIcon.addEventListener("click", deleteTodo)

