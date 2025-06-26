const todoInput = document.querySelector("#todo-input");
const addTodo = document.querySelector("#add-todo");

const todos = [
    {
        text: "buy groceries",
        completed: false
    },
    {
        text: "buy groceries2",
        completed: false
    }
]

todoInput.addEventListener("keypress", (e) => {
    // console.log(e);
    if (e.key === "Enter") {
        console.log("Enter key pressed");
        addTodo.click(); // trigger the click event on the addTodo button
    }
})

addTodo.addEventListener("click", (e) => {
    // e = event object
    e.preventDefault();
    const todoText = todoInput.value;
    console.log(todoText);
    if (todoText.trim() !== "") {
        newTodo(todoText);
        renderTodos(); // re-render the todos
        todoInput.value = "";
    }
})

const todoList = document.querySelector("#todo-list"); // this is the ul element

function newTodo(todoText) {
    todos.push({
        text: todoText,
        completed: false
    })
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        renderTodo(todo);
    })
}

function renderTodo(todo) {
    // todo is an object with text and completed properties
    const li = document.createElement("li");
    li.classList.add("p-2", "border-b", "flex", "justify-start", "items-center", "gap-2");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", (e) => {
        console.log("checkbox changed: ", e);
        todo.completed = e.target.checked; // basically we are getting the state of the checkbox
        renderTodos();
    })
    
    li.appendChild(checkbox);
    
    const span = document.createElement("span");
    span.innerText = todo.text;
    li.appendChild(span);

    todoList.appendChild(li);
}



// render the full todo list
renderTodos();

// --- old code ---
// render a single todo, -- this is not used anymore
function renderTodoOld(todoText) {
    const li = document.createElement("li");

    li.classList.add("p-2", "border-b", "flex", "justify-between", "items-center");

    // li.textContent = todoText;
    li.innerText = todoText;

    todoList.appendChild(li);
}