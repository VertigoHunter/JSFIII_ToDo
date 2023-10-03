let list = []

//document.getElementById('taskList');

//let taskAdded= document.getElementById("#inputTask").value;

var taskCounter = 0;

function addTask()
{
    const inputValue = document.getElementById('inputTask').value;
    let li = document.createElement('li');
    let attachment = document.createTextNode(inputValue);
    li.appendChild(attachment);
    document.getElementById('taskList').appendChild(li);
    taskCounter += 1;
    console.log(list);
    console.log(taskCounter);
    return false;
}

/*
let removeButton = document.createElement("span");
removeButton.addEventListener("click", removeTask()
{
})
*/

/*
let removeButton =
removeButton.addEventListener("click", removeTask);

function removeTask()
{
    var elem = document.getElementById(taskList.attachment);
    elem.parentNode.removeChild(elem);
    return false;
}
*/

// <input type="checkbox" name="rapper1" value="Ice Cube"> Ice Cube