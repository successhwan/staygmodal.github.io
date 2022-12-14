// const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("button");

window.onload = () => {
  modal.classList.remove("hidden")
}

const openModal = () => {
  modal.classList.remove("hidden");
}
const closeModal = () => {
  modal.classList.add("hidden");
}
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
// openButton.addEventListener("click", openModal);