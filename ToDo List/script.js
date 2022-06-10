// Selectors
const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const toDoUl = document.querySelector(".todo-list");
const toDoLi = document.createElement("li");

// Retrieve data from API to DOM and create the list of todos
const createListTodos = getDataAPI().then((result) => {
  console.log("API data: ", result);
  result.map((item) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    // create a checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "task-checkbox";
    checkBox.value = "task-crossed";
    checkBox.classList.add("checkbox");
    //change the status of the to-do
    checkBox.addEventListener("click", () => {
      if (checkBox.checked) {
        console.log("To-Do completed");
        item.done = true;
        console.log(item);
      } else {
        item.done = false;
      }
    });
    todoDiv.appendChild(checkBox);
    // li value
    const toDoLi = document.createElement("li");
    (toDoLi.innerHTML = item.description), (toDoLi.className = "todo-item");
    toDoLi.id = item._id;
    toDoLi.description = item.description;
    toDoLi.contentEditable = "true";
    // update to-do
    toDoLi.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        let oldText = e.target.description;
        let newText = e.target.innerHTML;
        console.log(`Updated to-do: '${oldText}' to '${newText}'`);
        updateTodoApi(toDoLi);
        e.preventDefault();
      }
    });
    // append <li> to the <div>
    todoDiv.appendChild(toDoLi);
    // create trash icon
    const trashIcon = document.createElement("img");
    // trashIcon.innerHTML= '<i class="fa-regular fa-trash-can"></i>';
    trashIcon.classList.add("trash-bin");
    trashIcon.src = "img/red-trash.png";
    trashIcon.id = item._id;
    // Delete task
    trashIcon.addEventListener("click", deleteTodoApi);
    todoDiv.appendChild(trashIcon);
    // append to list
    toDoUl.appendChild(todoDiv);
    // clear toDo input value every time
    todoInput.ariaPlaceholder = "Add a task to-do ";
    return toDoUl;
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

// Add a new ToDo to the API
const addTodo = () => {
  (toDoLi.innerHTML = todoInput.value), postTodo();
  toDoLi.classList.add("todo-item");
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
toDoUl.addEventListener("click", deleteTodoDom);

// Event listener to crosscheck todos
toDoUl.addEventListener("click", checkTodo);
// toDoList.addEventListener("click", deleteTodoApi);
