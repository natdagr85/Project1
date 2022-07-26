//created variables for DOM elements to make scripting easier
const openInst = document.querySelector(".open-instructions");
const hidden = document.querySelector(".hidden");
const closeInst = document.querySelector(".close-instructions");
const blur = document.querySelector(".overlay");
const quiz = document.querySelector(".quiz");
const start = document.querySelector(".start-btn");
const submit = document.querySelector(".submit");
const scoreOverlay = document.querySelector(".score-overlay");
const scoreP = document.querySelector(".score-p");
const restart = document.querySelector(".rst-btn");

//answers are the correct answers to trivia, input is the users input
const answers = [false, true, false, true, true];
let input = [];
let score = 0;

//adding scripting to buttons to remove/add hidden class tag
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

//true or false buttons for quiz push user answer to input array
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

//submit button checks if answer and input values are the same, if so add 20%.
//submit button also calculates score and pushes through dom to show user
submit.addEventListener("click", function finish() {
  if (answers[0] == input[0]) {
    score += 20;
  }
  if (answers[1] == input[1]) {
    score += 20;
  }
  if (answers[2] == input[2]) {
    score += 20;
  }
  if (answers[3] == input[3]) {
    score += 20;
  }
  if (answers[4] == input[4]) {
    score += 20;
  }
  document.querySelector(".score-p").textContent = `Your Score: ${score}%`;
  blur.classList.remove("hidden");
  scoreOverlay.classList.remove("hidden");
});

//restart button reverts all display and input/score back to original so user can play again
restart.addEventListener("click", function rst() {
  scoreOverlay.classList.add("hidden");
  blur.classList.add("hidden");
  quiz.classList.add("hidden");
  submit.classList.add("hidden");
  openInst.classList.remove("hidden");
  score = 0;
  input = [];
});
