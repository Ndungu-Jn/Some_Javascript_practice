//get the button
//get the modal
//get its content
//when button clicked -- open modal
//when everywhere else is clicked close modal.
const btnElementModal = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const contentElememt = modalElement.querySelector(".modal__content");

btnElementModal.addEventListener("click", () => {
  modalElement.classList.add("open");
});

modalElement.addEventListener("click", () => {
  modalElement.classList.remove("open");
});
