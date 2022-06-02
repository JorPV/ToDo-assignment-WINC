// Selectors
const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".todo-list");
const newTodo = document.createElement("li");

// Retrieve data from API to DOM and create the list of todos
const createListTodos = getDataAPI().then((todos) => {
  todos.map((item) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    // create a checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "task-crossed";
    checkBox.id = "task-crossed";
    checkBox.value = "task";
    checkBox.classList.add("checkbox");
    todoDiv.appendChild(checkBox);
    // li value
    const newTodo = document.createElement("li");
    (newTodo.innerHTML = item.description), newTodo.classList.add("todo-item");
    // append <li> to the <div>
    todoDiv.appendChild(newTodo);
    // create trash icon
    const trashIcon = document.createElement("img");
    trashIcon.classList.add("trash-bin");
    trashIcon.src = "img/red-trash.png";
    // trashIcon.addEventListener("click", deleteTodoApi);
    todoDiv.appendChild(trashIcon);
    // append to list
    toDoList.appendChild(todoDiv);
    // clear toDo input value every time
    todoInput.value = " ";
    return toDoList;
  });
});

// Delete from DOM
const deleteTodoDom = (e) => {
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

// Add a new ToDo to the list and API
const addTodo = () => {
  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  // create a checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.name = "task-crossed";
  checkBox.id = "task-crossed";
  checkBox.value = "task";
  checkBox.classList.add("checkbox");
  todoDiv.appendChild(checkBox);
  // li value
  // const newTodo = document.createElement("li");
  (newTodo.innerHTML = todoInput.value), postTodo();
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
  // return todoInput;
};


// Event listeners
addButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    addTodo;
  }
});
toDoList.addEventListener("click", deleteTodoDom);
toDoList.addEventListener("click", checkTodo);
// toDoList.addEventListener("click", deleteTodoApi);
