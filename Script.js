const todoList = document.getElementById("todo-list");
const addButton = document.getElementById("add-btn");
const inputField = document.getElementById("todo-input");

let array = [];

addButton.addEventListener("click", addtodo);

function addtodo() {
  const todoText = inputField.value.trim();
  array.push(todoText);
  inputField.value = "";
  updateList();
}

function updateList() {
  todoList.innerHTML = "";
  array.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.textContent = todo;
    todoList.append(listItem);
  });
}
