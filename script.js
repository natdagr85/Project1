const openInst = document.querySelector(".open-instructions");
const hidden = document.querySelector(".hidden");

openInst.addEventListener("click", function instructions() {
  hidden.classList.remove("hidden");
});
