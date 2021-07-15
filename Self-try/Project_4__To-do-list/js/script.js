const todoList = [];
const todoListElement = document.getElementById("list-container");

var delHelper=0;   //This will help me in managing localStorage deletion

document.getElementById("add-button").addEventListener("click", action);
document.getElementById("input-field").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        action()
    }
});

function action() {
    const todoText = document.getElementById("input-field").value;

    if (todoText == "") {
        alert("Insert Something!!");
    } else {
        const todoObject = {
            id: todoList.length,
            todoText: todoText,
            isDone: false,
        };

        //adding to localStorage here:
        var ind = todoList.length;
        ind += 1;
        delHelper = ind;
        var key = "Item" + ind;
        localStorage.setItem(key, todoObject.todoText);

        todoList.unshift(todoObject);
        displayTodos();
    }
}

function doneTodo(todoId) {
    const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);

    todoList[selectedTodoIndex].isDone ?
        (todoList[selectedTodoIndex].isDone = false) :
        (todoList[selectedTodoIndex].isDone = true);
    displayTodos();
}

function deleteItem(x) {

    //from localStorage too:
    var key = "Item" + delHelper;
    localStorage.removeItem(key);
    delHelper--;

    todoList.splice(
        todoList.findIndex((item) => item.id == x),
        1
    );

    displayTodos();
}

function displayTodos() {
    todoListElement.innerHTML = "";
    document.getElementById("input-field").value = "";

    todoList.forEach((item) => {
        const listElement = document.createElement("li");
        const delBtn = document.createElement("i");

        listElement.innerHTML = item.todoText;
        listElement.setAttribute("data-id", item.id);

        delBtn.setAttribute("data-id", item.id);
        delBtn.classList.add("far");
        delBtn.classList.add("fa-trash-alt");
        delBtn.setAttribute("data-id", item.id);

        if (item.isDone) {
            listElement.classList.add("checked");
        }

        listElement.addEventListener("click", function (e) {
            const selectedId = e.target.getAttribute("data-id");
            doneTodo(selectedId);
        });

        delBtn.addEventListener("click", function (e) {
            const delId = e.target.getAttribute("data-id");
            deleteItem(delId);
        });

        todoListElement.appendChild(listElement);
        listElement.appendChild(delBtn);
    });
}