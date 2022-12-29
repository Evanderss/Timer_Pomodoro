const task = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const badd = document.querySelector("#addi");
const ittask = document.querySelector("#ittask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (ittask.value !== "") {
      createTask(ittask.value);
      ittask.value = "";
      renderTasks();
    }
  });