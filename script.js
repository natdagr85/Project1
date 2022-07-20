const openInst = document.querySelector(".open-instructions");
const hidden = document.querySelector(".hidden");
const closeInst = document.querySelector(".close-instructions");
const blur = document.querySelector(".overlay");

openInst.addEventListener("click", function instructions() {
  hidden.classList.remove("hidden");
  blur.classList.remove("hidden");
});

closeInst.addEventListener("click", function instructions() {
  hidden.classList.add("hidden");
  blur.classList.add("hidden");
});
