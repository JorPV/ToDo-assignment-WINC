const apiUrl = 'http://localhost:3000/'

const toDosData = [];

// GET reguest
const getDataAPI = async () => {
    try {
    const response = await fetch(apiUrl, {headers: {'Content-Type': 'application/json'}})
    const data =  await response.json();
    console.log('Resolved: ', response);
       return data;
   } catch (error) {
       console.log('Rejected', error);
   }; 
}

const getToDos = getDataAPI().then(output => console.log("I have the data: ", output));

// POST request
// Add task to the API
const addTasks = async () => {
    fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({description: newTodo.innerHTML, done: false}),
    headers: {
        'Content-Type': 'application/json' 
    }
})
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

// const deleteTask = async () => {
//     const getId = await fetch (getToDos,
//         {body: JSON.stringify({_id})})
//     };
//     console.log(getId);
//     await response (apiUrl + getId, {
//         method: "DELETE",
//     })
// };

// toDoList.addEventListener("click", deleteTask);

// Add todos to API
// const addTodoItem = async (description) => {
//     const allTodos = document.querySelector(".todo-list")
//     if(allTodos.find((todo) => todo.description === description)) {
//         console.log("It already exists!")
//         return
//     }
//     const todo = { description: description, done: false };
//     ... // TODO add todo to database
//   };