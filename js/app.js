const inputElement = document.querySelector("input");
const btnElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

const lists = [];

class Todo {

    constructor(task, completed = false) {
        this.task = task;
        this.completed = completed;
        this.createTime = new Date.now().toString();
        this.updateTime = new Date.now().toString();
    }

    static addToDo(){

        const inputText = inputElement.value.trim();

        if(!inputElement) return alert("add task ......");

    }
}