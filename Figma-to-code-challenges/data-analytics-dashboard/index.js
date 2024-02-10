const openbtn = document.querySelector(".openMenu");
const closebtn = document.querySelector(".closeMenu");
const nav = document.querySelector("nav");

closebtn.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  alert("close");
});

openbtn.addEventListener("click", () => {
  nav.style.transform = "translateX(100%)";
  alert("open");
});
