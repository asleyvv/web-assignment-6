// Task 0
let myName = "Duman Zhanybekov";
let myGroup = "SE-2530";

console.log("Name: " + myName);
console.log("Group: " + myGroup);

alert("Hello, JavaScript World!");

let alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", function () {
  alert("Hello, JavaScript World!");
});


// Task 1
let list = document.getElementById("vars");

// prints to console and also puts it on the page
function show(text) {
  console.log(text);
  let li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// different data types
let city = "Astana";
let year = 2026;
let isStudent = true;

show("city = " + city + " (" + typeof city + ")");
show("year = " + year + " (" + typeof year + ")");
show("isStudent = " + isStudent + " (" + typeof isStudent + ")");

// arithmetic
let a = 15;
let b = 4;

show("a = " + a + ", b = " + b);
show("a + b = " + (a + b));
show("a - b = " + (a - b));
show("a * b = " + (a * b));
show("a / b = " + (a / b));
show("a % b = " + (a % b));
show("a ** b = " + (a ** b));

// strings
let first = "Duman";
let last = "Zhanybekov";
let full = first + " " + last;

show("Full name: " + full);
show("Message: " + "Hello, " + full + "! Welcome to " + city + ".");
