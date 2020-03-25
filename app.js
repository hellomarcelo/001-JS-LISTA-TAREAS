document.getElementById('formTask').addEventListener('submit',saveTask);

function saveTask(e){

    let title =  document.getElementById('title').value;  //Obtenemos el valor del input
    let description = document.getElementById('description').value;

    const task = {
        title,                //no escribimos title: title ya que el nombre es el mismo, NUEVO JS
        description
    };

    if(localStorage.getItem('tasks') === null){
        
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

    } else {
       let tasks = JSON.parse(localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault(); //Previene el comportamiento por defecto
}

function getTasks(){
   
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = '';

     for(let i = 0; i < tasks.length; i++){
         let title = tasks[i].title;
         let description = tasks[i].description;

        tasksView.innerHTML += `

            <div class="card mb-3">
            <div class="card-body">
                <h5>${title}</h5>
                <p>${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">
                borrar
                </a>
            
            </div>
            </div>
        `
     }
}

function deleteTask(title){
   
    console.log(title)
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].title == title) {
        tasks.splice(i, 1);
        }
    }
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
    
}

getTasks();



