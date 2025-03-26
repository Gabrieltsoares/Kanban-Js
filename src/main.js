
async function getTasks() {
    const url = "http://localhost:3000/Tasks"
    const response = await fetch(url);
    const tasks = await response.json()

    renderTasks(tasks)

}

async function renderTasks(tasks) {
    const pendingColumn = document.getElementById('pending-container')
    const progressColumn = document.getElementById('progress-container')
    const doneColumn = document.getElementById('done-container')

    pendingColumn.innerHTML = ''
    progressColumn.innerHTML = ''
    doneColumn.innerHTML = ''

    tasks.forEach(task => {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task-card')
        taskDiv.innerHTML = `
        <h4>${task.title}</h4>
        <p>${task.description}</p>
        <p>${task.priority}</p>
        `;
        if (task.status === 'todo')pendingColumn.appendChild(taskDiv);
        if (task.status === 'doing')progressColumn.appendChild(taskDiv);
        if (task.status === 'done')doneColumn.appendChild(taskDiv);
    })
}


async function createTask(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value
    const description = document.querySelector('input[name="description"]').value
    const status = document.querySelector('input[name="status"]:checked').value
    const priority = document.querySelector('input[name="priority"]:checked').value

    const newTask = {
        title: title,
        description: description,
        status: status,
        priority: priority
    };

    const url = 'http://localhost:3000/Tasks'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    };

    try{
        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error('Erro ao criar tarefa');
        }
        alert('Task criada com sucesso')
        const form = document.getElementById('form')
        form.reset()
    } catch(error){
        console.error(error)
    }
}


const modal = document.getElementById('form-pop');
const newTaskBtn = document.getElementById('new-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const submitBtn = document.getElementById('submit-btn');

function abrirModal() {
    modal.classList.add('active');

}

function fecharModal() {
    modal.classList.remove('active')
}

function createButton (event) {
    event.preventDefault();
    createTask(event);
}

newTaskBtn.addEventListener('click', abrirModal);
cancelBtn.addEventListener('click', fecharModal);
submitBtn.addEventListener('click',  createButton);
getTasks();