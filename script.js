document.addEventListener('DOMContentLoaded', function () {
    //Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    //Create the addTask Function
    function addTask(){

        let taskText = taskInput.value.trim();
        console.log(taskText);
        if(!taskText){
            alert('Type a task first');
        }
        //Task Creation and Removal
        if(taskText){
            let listElement = document.createElement('li');
            listElement.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener('click', () => {
                listElement.parentElement.removeChild(listElement);
            });

            listElement.appendChild(removeButton);
            taskList.appendChild(listElement);
            taskInput.value = '';
        }

        

    }

    //Attach Event Listeners

        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', event => {
            
            if(event.key==='Enter'){
            addTask();
        }
    });
});


    
