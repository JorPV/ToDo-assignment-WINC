const apiUrl = "http://localhost:3000/";

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

// POST request
// Add task to the API
const postTodo = async () => {
  try {
    await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ description: toDoLi.innerHTML, done: false }),
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
    console.log(`To-do succesfully deleted`);
  } catch (error) {
    console.log(`Error DELETE: ${error}`);
  }
};


// PUT request
// PUT request function
const updateTodoApi = async (todo) => {
  const id = todo.id; 
  const newText = todo.innerHTML
  const updateObject = {
    description: newText,
    done: false,
  };
  console.log(updateObject)
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObject),
    });
    const objectData = await response.json();
    console.log(`${objectData.description}, has been succesfully updated`)
  } catch (error) {
    console.log(`UPDATE error ${error}`);
  }
};

