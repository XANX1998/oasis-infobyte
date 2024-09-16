document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('todo-input');
    const dateField = document.getElementById('todo-date');
    const timeField = document.getElementById('todo-time');
    const addButton = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        const taskDate = dateField.value;
        const taskTime = formatTime(timeField.value); 

        if (taskText !== '' && taskDate !== '' && taskTime !== '') {
            addTask(taskText, taskDate, taskTime);
            inputField.value = '';
            dateField.value = '';
            timeField.value = '';
        } else {
            alert("Please enter a task, date, and time.");
        }
    });

    function addTask(taskText, taskDate, taskTime) {
        const listItem = document.createElement('li');

        const dateTimeSpan = document.createElement('span');
        dateTimeSpan.classList.add('task-time');
        dateTimeSpan.textContent = `${taskDate} ${taskTime}`; 

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(dateTimeSpan);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }

    function formatTime(time) {
        if (time === '') return ''; 

        const [hour, minute] = time.split(':');
        let hour12 = parseInt(hour);
        const period = hour12 >= 12 ? 'PM' : 'AM';

        hour12 = hour12 % 12 || 12;

        return `${hour12}:${minute} ${period}`;
    }
});
