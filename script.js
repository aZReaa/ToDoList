var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTodoItem);
function addTodoItem() {
    alert("Button CLICKED");
}

var toDoEntryBox = document.getElementById("todoEntryBox");
var todoEntry = document.getElementById("Todo-List");

function NewTodoItem(ItemText, Completed); {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(ItemText);
    ToDoItem.appendChild(toDoText);
    if (Completed) {
        toDoItem.classList.add("completed");
    }
    
    toDoListBox.appendChild(ToDoItem);
    toDoItem.addEventListener("dbclick", toggleTodoItemState);
}

function addTodoItem() {
    var ItemText = toDoEntryBox.value;
    new TodoItem(ItemText, false);
}

function toggleTodoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var toDoItems= toDoList.getElementByClassname("completed");

    while (CompletedItems.Length > 0) {
        completed.item(0).remove();
    }
}

function empetylist(); {
    var TodoItems = toDoList.children;
    while (toDoItems.Length > 0) {
        toDoItems.Item(0).remove()
    }
}

var myArray = [];
myArray.push("Something to store");
myArray.push("Something else to store");
alert(myArray[0]);

var  toDoInfo = {
    "task": "thing i need to do",
    "compeleted": false
};

function saveList() {
    var ToDos = [];
    
    for (var i = 0; i < ToDoList.children.length; i++) {
        var toDo =  ToDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "compeleted": toDo.classList.contains("completed")
    };

    ToDos.push(toDoInfo);

    }

    localStorage.setItem("ToDoList", JSON.stringify(ToDos));
    console.log("Masuk Kesini Ya")
}

function loadList() {
    if (localStorage.getItem("ToDoS") != null) {
        var toDos = JSON.parse(localStorage.getItem("ToDos");

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            NewToDoItem(toDo.task, ToDo.completed);
        }
    }
}