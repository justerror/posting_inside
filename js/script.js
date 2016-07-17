document.querySelector(".calendar__link--timing").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".schedule-modal").classList.add("schedule-modal-show");
});

document.querySelector(".dropbox__btn-edit").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".edit-modal").classList.add("edit-modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (document.querySelector(".schedule-modal").classList.contains("schedule-modal-show")) {
      document.querySelector(".schedule-modal").classList.remove("schedule-modal-show");
    }
    if (document.querySelector(".edit-modal").classList.contains("edit-modal-show")) {
      document.querySelector(".edit-modal").classList.remove("edit-modal-show");
    }
  }
});