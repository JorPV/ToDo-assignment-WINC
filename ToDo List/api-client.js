const apiUrl = "http://localhost:3000/";
const toDosIds = [];
const toDosInfo = []; 

// GET request
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
// once getDataApi is fullfilled or rejected, we log it with the .then() method
const getToDos = getDataAPI().then((output) => {
  console.log("API data: ", output);
  return output
  });
 

// GET THE DESCRIPTION
  const getTodosDescription = () => {
    fetch(apiUrl, {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((todos) =>
        todos.forEach((todo) => {
          const todoInfo = todo.description;
          console.log(`Description: ${todoInfo}`);
          return todoInfo;
        })
      )
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  getTodosDescription(); 


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
        console.log("ID :" + todoID);
        return todoID;
      })
    )
    .catch((error) => {
      console.log("Error: " + error);
    });
};

getTodosId();

// POST request
// Add task to the API
const postTodo = async () => {
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ description: newTodo.innerHTML, done: false }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};


// DELETE request
const deleteTodoApi = () => {
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

// toDoList.addEventListener("click", deleteTodoApi);
// deleteTodoApi();




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
