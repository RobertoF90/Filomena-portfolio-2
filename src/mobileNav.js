///////////////////////////////////////
// Nav Btn
const navBtn = document.querySelector(".mobile");
const navLinks = document.querySelector(".nav__links");

navBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
});
