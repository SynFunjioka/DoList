

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

    let parent = document.getElementById('listaPrueba');
    parent.insertAdjacentElement('beforeend', taskBody);

    return new Task(name, description);
}

function Category(name){
    this.categoryName = name;
    this.tasks = [];
}

function Task(name, description){
    this.taskName = name;
    this.taskDescription = description;
    this.taskCompleted = false;
}