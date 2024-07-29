const inputElement = document.querySelector("input");
const btnElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

const lists = [];

class Todo {
    constructor(task, completed = false) {
        this.task = task;
        this.completed = completed;
        this.createTime = new Date().toLocaleString();
        this.updateTime = new Date().toLocaleString();
    }

    static addToDo() {
        const inputText = inputElement.value.trim();

        if (!inputText) return alert("Please add a task.");

        const newTask = new Todo(inputText);
        lists.push(newTask);
        inputElement.value = "";
        Todo.render();
    }

    static render() {
        ulElement.innerHTML = "";

        lists.forEach((todo, index) => {
            const li = document.createElement("li");
            li.classList = todo.completed ? "completed" : "";
            li.innerHTML = `
                <span>${todo.task}</span>
                <button class="edit" onclick="Todo.editTodoPrompt(${index})">Edit</button>
                <button onclick="Todo.removeTodo(${index})">Delete</button>
                <button class="complete" onclick="Todo.toggleComplete(${index})">Complete</button>
            `;

            ulElement.prepend(li);
        });
    }

    static removeTodo(index) {
        lists.splice(index, 1);
        Todo.render();
    }

    static toggleComplete(index) {
        lists[index].completed = !lists[index].completed;
        lists[index].updateTime = new Date().toLocaleString();
        Todo.render();
    }

    static editTodoPrompt(index) {
        const newTask = prompt("Enter your task", lists[index].task);

        if (newTask !== null && newTask.trim()) {
            lists[index].task = newTask.trim();
            lists[index].updateTime = new Date().toLocaleString();
            Todo.render();
        }
    }
}

btnElement.addEventListener("click", Todo.addToDo);

document.addEventListener("DOMContentLoaded", Todo.render);
