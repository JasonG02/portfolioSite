const menu = document.querySelector(".menu");
const hidden = document.querySelector(".hidden");
const sideBar = document.querySelector(".sidebar--container");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
  sideBar.classList.remove("hidden");
});

close.addEventListener("click", function () {
  sideBar.classList.add("hidden");
});
