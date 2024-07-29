const inputElement = document.querySelector("input");
const btnElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

const lists = [];

class Todo {

    constructor(task, completed = false, createTime, updateTime) {
        this.task = task;
        this.completed = completed;
        // this.createTime = new Date.now().toString();
        // this.updateTime = new Date.now().toString();
    }

    static addToDo() {

        const inputText = inputElement.value.trim();

        if (!inputText) return alert("add task ......");

        const newTask = new Todo(inputText);
        lists.push(newTask);
        inputElement.value = ""
        Todo.render();

    }


    static render() {
        ulElement.innerHTML = "";

        lists.forEach((todo, index) => {
            const li = document.createElement("li");
            li.classList = todo.completed ? "complete" : "";
            li.innerHTML = `
            <span>${todo.task}</span>
                <button class="edit" onclick="Todo.editTodoPrompt(${index})">Edit</button>
                <button onclick="Todo.removeTodo(${index})">Delete</button>
                <button class="complete" onclick="Todo.toggleComplete(${index})">Complete</button>
            `

            ulElement.prepend(li);
        })
    }

static removeTodo(index){
    lists.splice(index , 1);
    Todo.render();

}

}


btnElement.addEventListener("click", Todo.addToDo);