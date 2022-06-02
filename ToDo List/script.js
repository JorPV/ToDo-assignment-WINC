// Selectors
const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".todo-list");
const toDosLi = document.createElement("li");

// Retrieve data from API to DOM and create the list of todos
const createListTodos = getDataAPI().then((result) => {
  console.log("API data: ", result);
  result.map((item) => {
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
    const toDosLi = document.createElement("li");
    (toDosLi.innerHTML = item.description), 
    toDosLi.classList.add("todo-item");
    toDosLi.contentEditable = "true"; 
    // toDos.id = item._id;
    // append <li> to the <div>
    todoDiv.appendChild(toDosLi);
    // create trash icon
    const trashIcon = document.createElement("img");
    trashIcon.classList.add("trash-bin");    
    trashIcon.src = "img/red-trash.png";
    trashIcon.id = item._id;
    trashIcon.addEventListener("click", deleteTodoApi);
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
  (toDosLi.innerHTML = todoInput.value), postTodo();
  toDosLi.classList.add("todo-item");
  // toDoList.contentEditable = "true"; 
  // append <li> to the <div>
  todoDiv.appendChild(toDosLi);
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


// EVENT LISTENERS
// Event listener to add todos
addButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (event) => {
  if ((event.keyCode || event.which) == 13) {
    addTodo;
  }
});

// Event listener to delete todos from the DOM
toDoList.addEventListener("click", deleteTodoDom);

// Event listener to crosscheck todos
toDoList.addEventListener("click", checkTodo);
// toDoList.addEventListener("click", deleteTodoApi);

// Event listener to update Todos
toDosLi.addEventListener("Keypress", (e) => {
  if(e.keycode === 13) {
  console.log(e.target)}
  // if (e.target.description === toDosLi.textContent) {
  //   if ((e.keyCode || e.which) == 13) {
  //  console.log(`EVENT UPDATED`); }
  //   }
});


const updateTodoDOM = () => {

}