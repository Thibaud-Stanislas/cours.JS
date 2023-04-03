const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  console.log(e);
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid teal";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid pink";
});
