console.log('Organizing Life App is running');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function eraseTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
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
