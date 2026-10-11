// Task 5 - mouse events
let hoverBox = document.getElementById("hoverBox");
let startColor = "#8fb4de";

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "#f2b84b";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = startColor;
});


// Task 6 - keyboard events
let inp = document.getElementById("inp");
let out = document.getElementById("out");

inp.addEventListener("keyup", function () {
  if (inp.value == "") {
    out.textContent = "";
  } else {
    out.textContent = "You typed: " + inp.value;
  }
});


// Task 7 - calculator
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let res = document.getElementById("res");

function calc(op) {
  if (n1.value == "" || n2.value == "") {
    res.textContent = "Enter both numbers first.";
    return;
  }

  let a = Number(n1.value);
  let b = Number(n2.value);
  let r;

  if (op == "+") {
    r = a + b;
  } else if (op == "-") {
    r = a - b;
  } else if (op == "*") {
    r = a * b;
  } else if (op == "/") {
    if (b == 0) {
      res.textContent = "You can't divide by zero.";
      return;
    }
    r = a / b;
  }

  // so 0.1 + 0.2 doesn't show 0.30000000000000004
  r = Math.round(r * 1000000) / 1000000;
  res.textContent = "Result: " + r;
}

document.getElementById("plus").addEventListener("click", function () {
  calc("+");
});
document.getElementById("minus").addEventListener("click", function () {
  calc("-");
});
document.getElementById("mult").addEventListener("click", function () {
  calc("*");
});
document.getElementById("div").addEventListener("click", function () {
  calc("/");
});
