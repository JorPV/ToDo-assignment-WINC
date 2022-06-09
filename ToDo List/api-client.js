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
// const getToDos = getDataAPI().then((output) => {
//   console.log("API data: ", output);
//   return output;
// });

// POST request
// Add task to the API
const postTodo = async () => {
  try {
    await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ description: toDosLi.innerHTML, done: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error POST :" + error);
  }
};

// DELETE request
const deleteTodoApi = async (event) => {
  const id = event.target.id;
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      method: "DELETE",
    });
    console.log(`ToDo succesfully deleted`);
  } catch (error) {
    console.log(`Error DELETE: ${error}`);
  }
};


// PUT request
// PUT request function
const updateTodoApi = async (event) => {
  const id = event.target.id;
  const updateObject = {
    description: event.target.innerHTML,
    done: false,
  };
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObject),
    });
    const objectData = await response.json();
    console.log(objectData);
  } catch (error) {
    console.log(`UPDATE error ${error}`);
  }
};

// updateTodoApi();

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

// getTodosDescription();

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

// getTodosId();
