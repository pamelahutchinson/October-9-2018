
let taskInput = document.getElementById('new-task');
let addButton = document.getElementById('button');
let incompleteTaskHolder = document.getElementById('incomplete-tasks');
let completedTaskHolder = document.getElementById('completed-tasks');

let createNewTaskElement = function(taskString){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    let deleteButton = document.createElement('button');

        label.innerText = taskString;
        checkBox.type = "checkbox";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    return listItem;
}

function addTask(){
    listItem = createNewTaskElement(taskInput.value)
    incompleteTaskHolder.appendChild(listItem,taskCompleted);
    taskInput.value = "";
}
let deleteTask = function(){
    let ul = listItem.parentNode;
    ul.removeChild(listItem)
}

let taskCompleted = function(){
    let listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskIncomplete);
}

let taskIncomplete = function(){
    listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}

// addButton.onclick = addTask;

addButton.addEventListener("click", addTask);

let bindTaskEvents = function(taskListItem,checkBoxEventHandler){
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let deleteButton = taskListItem.querySelector("button.delete");

deleteButton.onclick = deleteTask;
checkBox.onchange = checkBoxEventHandler;
}

for (let i=0;
    i<incompleteTaskHolder.children.length;i++){
        bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
    }
for (let i=0;
    i<completedTaskHolder.children.length;i++){
        bindTaskEvents(completedTaskHolder.children[i],taskCompleted);
    }

