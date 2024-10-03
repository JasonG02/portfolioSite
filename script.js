const menu = document.querySelector(".menu");
const hidden = document.querySelector(".hidden");
const sideBar = document.querySelector(".sidebar--container");
const close = document.querySelector(".close");
const sb = menu.addEventListener("click", function () {
  sideBar.classList.remove("hidden");
});

close.addEventListener("click", function () {
  sideBar.classList.add("hidden");
});

let typingEffect = new Typed(".typedText", {
  strings: [" a Developer", "Jason"],
  loop: true,
  typeSpeed: 110,
  backspeed: 110,
  backdelay: 2000,
});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".about-pic", { delay: 100 });
srRight.reveal(".box", {});
srRight.reveal(".boxTwo", {});
sr.reveal(".detail", {});
sr.reveal(".learn", {});
sr.reveal(".top-header", {});
sr.reveal(".links", {});
srRight.reveal(".proj", {});
srRight.reveal(".proj-h1", {});
