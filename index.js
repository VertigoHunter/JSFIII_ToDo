let list = []

//document.getElementById('taskList');

//let taskAdded= document.getElementById("#inputTask").value;

var taskCounter = 0;

function addTask()
{
    const inputValue = document.getElementById('inputTask').value;
    let li = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.value= 1;
    checkBox.name="todo"
    let attachment = document.createTextNode(inputValue);
    li.appendChild(checkBox);
    li.appendChild(attachment);
    document.getElementById('taskList').appendChild(li);
    taskCounter += 1;
    console.log(list);
    console.log(taskCounter);
    return false;

    
}

function removeTask()
{
    //let oppCounter = taskCounter;

    let elem = document.getElementById("taskList");
    if (elem.hasChildNodes())
    {
        elem.removeChild(elem.children[0])
    }
    //elem.remove(); 
    //document.getElementById('inputTask').click();
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