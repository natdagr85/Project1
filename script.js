const openInst = document.querySelector(".open-instructions");
const hidden = document.querySelector(".hidden");
const closeInst = document.querySelector(".close-instructions");

openInst.addEventListener("click", function instructions() {
  hidden.classList.remove("hidden");
});

closeInst.addEventListener("click", function instructions() {
  hidden.classList.add("hidden");
});
