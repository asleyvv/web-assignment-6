// tasks are stored in this array (each one is {text, done})
let tasks = [];

let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addTask");
let list = document.getElementById("tasks");
let msg = document.getElementById("msg");
let count = document.getElementById("count");

function addTask() {
  let text = input.value.trim();

  if (text == "") {
    msg.textContent = "Write a task first.";
    return;
  }

  msg.textContent = "";
  tasks.push({ text: text, done: false });
  input.value = "";
  input.focus();
  render();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  render();
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;
  render();
}

// redraws the whole list from the array
function render() {
  list.innerHTML = "";
  let doneCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    let box = document.createElement("input");
    box.type = "checkbox";
    box.checked = tasks[i].done;
    box.addEventListener("change", function () {
      toggleTask(i);
    });

    let span = document.createElement("span");
    span.textContent = tasks[i].text;
    if (tasks[i].done) {
      span.className = "done";
      doneCount++;
    }

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "red";
    del.addEventListener("click", function () {
      deleteTask(i);
    });

    li.appendChild(box);
    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
  }

  if (tasks.length == 0) {
    count.textContent = "No tasks yet. Add your first one above.";
  } else {
    count.textContent = doneCount + " of " + tasks.length + " tasks completed";
  }
}

addBtn.addEventListener("click", addTask);

// pressing Enter also adds the task
input.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addTask();
  }
});

render();
