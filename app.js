console.log('Organizing Life App is running');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = () => {
            li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        };

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(li);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(li);
        
        li.prepend(checkbox);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(taskItem) {
    const newTask = prompt('Edit the task:', taskItem.textContent);
    if (newTask !== null) {
        taskItem.childNodes[1].textContent = newTask;
    }
}

function rotateTasks() {
    const taskList = document.getElementById('taskList');
    if (taskList.children.length > 0) {
        const firstChild = taskList.children[0];
        taskList.removeChild(firstChild);
        taskList.appendChild(firstChild);
    }
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    
    for (let i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].textContent);
    }
    
    console.log('Tasks saved:', tasks); // Replace with actual save logic
}
