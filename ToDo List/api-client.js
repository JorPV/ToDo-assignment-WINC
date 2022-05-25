const apiUrl = "http://localhost:3000/";
const toDosIds = [];

// GET reguest
const getDataAPI = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("Resolved: ", response);
    return data;
  } catch (error) {
    console.log("Rejected", error);
  }
};

const getToDos = getDataAPI().then((output) =>
  console.log("I have the data: ", output)
);

// DELETE request
const deleteTask = () => {
    fetch(apiUrl, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((todos) =>
        todos.forEach((todo) => {
          const todoID = todo._id;
          console.log("ID :" + todoID);
          const urlWithID = apiUrl + todoID;
          console.log(urlWithID);
          return urlWithID;
        })
      )
      .catch((error) => {
        console.log("Error: " + error);
      });
  };


// GET ID'S
// Get the ID with the .then() method
const getTodosId = () => {
  fetch(apiUrl, {
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((todos) =>
      todos.forEach((todo) => {
        const todoID = todo._id;
        toDosIds.push(todoID);
        console.log("ID :" + todoID);
        return todoID;
      })
    )
    .catch((error) => {
      console.log("Error: " + error);
    });
};

getTodosId();


// console.log(toDosIds);

// const todoDescription = [];
// const getDescription = document.getElementsByTagName("li")

// for (let i = 0; i < toDoList.lengh; i++) {
//    todoDescription.push(parseInt(toDoList[i].innerHTML))
// };

// console.log(todoDescription)

// for (let i = 0; i < getDescription.lengh; i++) {
//   console.log(getDescription[i])
// };

// POST request
// Add task to the API
const addTasks = async () => {
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ description:newTodo.innerHTML, done: false }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// DELETE request
// Trying to get the todo ID
// const getProperties = Object.entries(toDosData).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });
// console.log(getProperties);

// for(const property in keys) {
//     if (keys.hasOwnProperty(_id)){
//         console.log (_id);
//     }
// };
// console.log(getToDos)


// toDoList.addEventListener("click", deleteTask);

// Check if Todo is already in API
// const addTodoItem = async (description) => {
//     const allTodos = document.querySelector(".todo-list")
//     if(allTodos.find((todo) => todo.description === description)) {
//         console.log("It already exists!")
//         return
//     }
//     const todo = { description: description, done: false };
//     ... // TODO add todo to database
//   };
