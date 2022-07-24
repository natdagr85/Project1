const openInst = document.querySelector(".open-instructions");
const hidden = document.querySelector(".hidden");
const closeInst = document.querySelector(".close-instructions");
const blur = document.querySelector(".overlay");
const quiz = document.querySelector(".quiz");
const start = document.querySelector(".start-btn");
const submit = document.querySelector(".submit");

const answers = [false, true, false, true, true];

openInst.addEventListener("click", function instructions() {
  hidden.classList.remove("hidden");
  blur.classList.remove("hidden");
});

closeInst.addEventListener("click", function instructions() {
  hidden.classList.add("hidden");
  blur.classList.add("hidden");
});

start.addEventListener("click", function start() {
  quiz.classList.remove("hidden");
  submit.classList.remove("hidden");
  openInst.classList.add("hidden");
  start.classList.add("hidden");
});
