// Task 2 - change text
let para = document.getElementById("para");
let textBtn = document.getElementById("textBtn");

textBtn.addEventListener("click", function () {
  para.textContent = "The text was changed with JavaScript!";
});


// Task 3 - change styles
let box = document.getElementById("box");
let colorBtn = document.getElementById("colorBtn");
let sizeBtn = document.getElementById("sizeBtn");

let colors = ["#dbe7f5", "#f9e2b0", "#cdeccf", "#f4cccc"];
let sizes = [16, 22, 28, 34];
let ci = 0;
let si = 0;

colorBtn.addEventListener("click", function () {
  ci = ci + 1;
  if (ci >= colors.length) {
    ci = 0;
  }
  box.style.backgroundColor = colors[ci];
});

sizeBtn.addEventListener("click", function () {
  si = si + 1;
  if (si >= sizes.length) {
    si = 0;
  }
  box.style.fontSize = sizes[si] + "px";
});


// Task 4 - add / remove list items
let items = document.getElementById("items");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let listMsg = document.getElementById("listMsg");

addBtn.addEventListener("click", function () {
  let n = items.children.length + 1;
  let li = document.createElement("li");
  li.textContent = "Item " + n;
  items.appendChild(li);
  listMsg.textContent = "";
});

removeBtn.addEventListener("click", function () {
  let last = items.lastElementChild;
  if (last == null) {
    listMsg.textContent = "The list is empty, nothing to remove.";
    return;
  }
  items.removeChild(last);
});
