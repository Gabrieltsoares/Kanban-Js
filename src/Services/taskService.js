/*

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

async function updateTask(id,updatedTask) {

}

async function deleteTask(id,task) {

}

async function getAllTasks() {

}

async function moveTask(id,newStatus) {

}

export {createTask};

*/