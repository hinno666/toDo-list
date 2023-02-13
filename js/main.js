const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.querySelector('#input-task');

// Event Listener for add Button

addTask.addEventListener('click', () => {


    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<li class='fa-solid fa-check'></li>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<li class='fa-solid fa-trash-can'></li>`;
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

     let editButton = document.createElement("button");
     editButton.innerHTML = `<li class='fa-solid fa-pen-to-square'></li>`;
     editButton.classList.add("editTask");
     task.appendChild(editButton);

    if(inputTask.value === '') {
        alert('Please Enter a Task');
    }else {
        taskContainer.appendChild(task);
    }

    inputTask.value = '';

    checkButton.addEventListener('click', () => {

        checkButton.parentElement.style.backgroundColor = 'green';

    });

    deleteButton.addEventListener('click', (e) => {

        e.target.parentElement.parentElement.remove();

    });

    editButton.addEventListener('click', () => {

        let edit = prompt('edit the selected item', '');
        
        li.innerHTML = edit;

    });
    

});