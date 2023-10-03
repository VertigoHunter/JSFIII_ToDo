let list = []

//document.getElementById('taskList');

//let taskAdded= document.getElementById("#inputTask").value;

function addTask()
{
    inputValue = document.getElementById('inputTask').value;
    list.push(inputValue)
    
   // var li = document.createElement('li');
    //li.appendChild(list);
    console.log(list);
    return false;
}

/*function addTask(list, taskAdded)
{
    list.push(taskAdded);
    //console.log([...new Set(list)])
    console.log(list);
}*/