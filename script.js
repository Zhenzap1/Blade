const openMenu = document.getElementById("openMenu");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
});

link1.addEventListener("click", () => {
  menu.style.display = "none";
});

link2.addEventListener("click", () => {
  menu.style.display = "none";
});

link3.addEventListener("click", () => {
  menu.style.display = "none";
});

link4.addEventListener("click", () => {
  menu.style.display = "none";
});
