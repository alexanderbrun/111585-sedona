var link = document.querySelector(".brown-btn");
var popup = document.querySelector(".main-form");
var date = popup.querySelector("[name=date-in]");
var form = document.querySelector("form");
var date2 = popup.querySelector("[name=date-out]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("main-form-show");
  popup.classList.remove("main-form-error");
  date.focus();
});

form.addEventListener("submit", function(event) {
  if (!date.value || !date2.value) {
     event.preventDefault();
     popup.classList.remove("main-form-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("main-form-error");
   }
});
