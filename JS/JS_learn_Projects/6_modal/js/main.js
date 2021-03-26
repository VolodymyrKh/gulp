const openModal = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
  overlay.classList.add("open-modal");
});

closeModal.addEventListener('click', () => {
    overlay.classList.remove("open-modal");
})

overlay.addEventListener("click", (e) => {
  if ( e.target === e.currentTarget) {
    overlay.classList.remove("open-modal");
  }
});
