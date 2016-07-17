document.querySelector(".calendar__link--timing").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".schedule-modal").classList.add("schedule-modal-show");
});