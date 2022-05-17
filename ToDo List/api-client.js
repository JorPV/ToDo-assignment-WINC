const apiUrl = 'http://localhost:3000/'

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

getDataAPI().then(output => console.log("Got the data: ", output));

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
// const deleteTask = async () => {
//     const getId = task.target.id;
//     console.log(getId); 
//     await fetch(apiUrl + getId, {
//         method: "DELETE",
//     })
// };

// trashIcon.addEventListener("click", deleteTask);

// Add todos to DOM
// const addTodoItem = async (description) => {
//     const allTodos = document.querySelector(".todo-list")
//     if(allTodos.find((todo) => todo.description === description)) {
//         console.log("It already exists!")
//         return
//     }
//     const todo = { description: description, done: false };
//     ... // TODO add todo to database
//   };