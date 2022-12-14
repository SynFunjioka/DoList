// import CreateCategory from './taksControllertaksController';

let categories = []


function CreateCategory(name){

    let categoryBody = `
    <section class="ToDoList-Category" id="Category-${name}">
        <h2>${name}</h2>
        <div class="ToDoList-List">
            
        </div>
        <button>New task</button>
    </section>`;

    let parent = document.getElementById('ToDoList');
    parent.insertAdjacentElement('beforeend', categoryBody);

    return new Category(name);
}

function CreateTask(name = "Funciona", description = "Esto es una prueba"){
    
    let taskBody = `
        <div class="task" id="${name}">
            <div class="form-group">
                <input class="custom-checkbox checkbox--circle" type="checkbox" 
                    name="completeTask" id="checkbox#${name}" 
                    value="custom_checkbox">
                <label class="" for="checkbox#${name}"></label>
            </div>
            <p>${name}</p>
        </div>`;
    const node = document.createRange().createContextualFragment(taskBody);

    let parent = document.getElementById('listaPrueba');
    parent.appendChild(node);

    categories.push(new Task(name, description));
}

function InjectTaskCreator(parent){
    let parentElement = document.getElementById(parent);

    let inputContent = `
        <div class="ToDoList-CreateTask form-group">
            <input class="custom-input" type="text" placeholder="Task name" autofocus id="taskCreator">
        </div>
    `;

    parentElement.insertBefore();
}

//Triggers
let inputTaskCreator = document.getElementById("taskCreator");
inputTaskCreator.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      CreateTask(inputTaskCreator.value);
      inputTaskCreator.parentElement.remove();
    }
  });


function Category(name){
    this.categoryName = name;
    this.tasks = [];
}

function Task(name, description){
    this.taskName = name;
    this.taskDescription = description;
    this.taskCompleted = false;
}