const nomeTarefa = document.querySelector('#taskName');
const responsavel = document.querySelector('#taskOwner');
const botaoAdicionaTarefa = document.querySelector('#addTaskBtn');
const divGeral = document.querySelector('#taskList');
const data = document.querySelector('#taskDate');

botaoAdicionaTarefa.addEventListener('click', (e) => {
    if (!nomeTarefa.value || !responsavel.value || !data.value) return;
    criaDiv();
    clearInput();
    delTask();
});

divGeral.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('edit-name')) {
        const novaTarefa = prompt('Nova tarefa:');
        const tarefa = el.parentElement;
       tarefa.firstChild.nodeValue = novaTarefa;
       return;
    } else if (el.classList.contains ('edit-owner')) {
        const responsavel = el.parentElement;
        const novoResponsavel = prompt('Digite o responsavel:');
        responsavel.firstChild.nodeValue = novoResponsavel;
        return;
    }
});



function criaDiv() {
    const taskItem = document.createElement('div')
    taskItem.setAttribute('class', 'task-item');
    divGeral.appendChild(taskItem);

    const taskName = document.createElement('div');
    taskName.setAttribute('class', 'task-name');
    taskName.innerHTML = nomeTarefa.value;
    taskItem.appendChild(taskName);

    const editName = document.createElement('span');
    editName.setAttribute('class', 'edit-name');
    editName.innerHTML = '&#9998';
    taskName.appendChild(editName);

    const taskDate = document.createElement('div');
    taskDate.setAttribute('class', 'task-date');
    taskDate.innerText = data.value;
    taskItem.appendChild(taskDate);


    const taskOwner = document.createElement('div');
    taskOwner.setAttribute('class', 'task-owner');
    taskOwner.innerHTML = responsavel.value;
    taskItem.appendChild(taskOwner);

    const editOwner = document.createElement('span');
    editOwner.setAttribute('class', 'edit-owner');
    editOwner.innerHTML = '&#9998';
    taskOwner.appendChild(editOwner);

    const del = document.createElement('div');
    del.setAttribute('class', 'del-icon');
    del.innerHTML = '&#10006;'
    taskItem.appendChild(del);
}


function delTask() {
    divGeral.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('del-icon')) {
            el.parentElement.remove();
            return;
        }
    });
}

function clearInput() {
    nomeTarefa.value = '';
    responsavel.value = '';
    data.value = '';
    nomeTarefa.focus();
}
