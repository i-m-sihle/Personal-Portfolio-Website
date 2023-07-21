const hamburger = document.querySelector(".hamburger");
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");
const navMenu = document.querySelector(".navMenu");

console.log(navMenu)

hamburger.addEventListener("click", () => {
  closeIcon.classList.toggle("active");
  openIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
});
