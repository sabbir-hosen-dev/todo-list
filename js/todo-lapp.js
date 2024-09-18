const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-todo");
const clearbtn = document.getElementById("clear");
const todos = document.getElementById("todos");

let id = 0;

// add todo
function addTodo() {
  if (!input.value == "") {
    id++;

    const todo = document.createElement("div");
    todo.id = `id-${id}`;
    todo.className =
      "todo flex justify-between items-center w-full bg-[#FFD7C4] mt-5 rounded-md p-1 pl-2 pr-2";

    todo.innerHTML = `
           <div class="font-bold text-gray-900">${input.value}</div>
            <i class="fa-solid fa-trash text-white shadow-slate-900 bg-red-500 p-[2px] rounded-md hover:text-red-500 cursor-pointer" ></i>
           `;
    todos.appendChild(todo);
    input.value = "";
  } else {
    alert("Please input your todo");
  }
}

// add button listiner 
addBtn.addEventListener("click", addTodo);


// clear btn listener 
clearbtn.addEventListener("click", function () {
  id = 0;
  todos.replaceChildren();
});
