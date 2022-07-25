const openInst = document.querySelector(".open-instructions");
const hidden = document.querySelector(".hidden");
const closeInst = document.querySelector(".close-instructions");
const blur = document.querySelector(".overlay");
const quiz = document.querySelector(".quiz");
const start = document.querySelector(".start-btn");
const submit = document.querySelector(".submit");
const scoreOverlay = document.querySelector(".score-overlay");
const scoreP = document.querySelector(".score-p");

const answers = [false, true, false, true, true];
let input = [];
let score = 0;

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
});

document.querySelector(".q1t").addEventListener("click", function truebtn() {
  input.push(true);
});

document.querySelector(".q2t").addEventListener("click", function truebtn() {
  input.push(true);
});

document.querySelector(".q3t").addEventListener("click", function truebtn() {
  input.push(true);
});

document.querySelector(".q4t").addEventListener("click", function truebtn() {
  input.push(true);
});

document.querySelector(".q5t").addEventListener("click", function truebtn() {
  input.push(true);
});

document.querySelector(".q1f").addEventListener("click", function truebtn() {
  input.push(false);
});

document.querySelector(".q2f").addEventListener("click", function truebtn() {
  input.push(false);
});

document.querySelector(".q3f").addEventListener("click", function truebtn() {
  input.push(false);
});

document.querySelector(".q4f").addEventListener("click", function truebtn() {
  input.push(false);
});

document.querySelector(".q5f").addEventListener("click", function truebtn() {
  input.push(false);
});

submit.addEventListener("click", function finish() {
  if (answers[0] == input[0]) {
    score += 20;
  } else if (answers[1] == input[1]) {
    score += 20;
  } else if (answers[2] == input[2]) {
    score += 20;
  } else if (answers[3] == input[3]) {
    score += 20;
  } else if (answers[4] == input[4]) {
    score += 20;
  }

  blur.classList.remove("hidden");
  scoreOverlay.classList.remove("hidden");
});
