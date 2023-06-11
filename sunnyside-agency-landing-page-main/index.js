// Toggle function
const button = document.querySelector(".burger-button");
const navbarContainer = document.querySelector("#navbar");
const nav = document.querySelector("nav");
let toggle = false;
const windowSize = 870;

const handleToggle = (e) => {
  e.preventDefault();
  if (toggle) {
    navbarContainer.classList.remove("toggle");
    toggle = false;
  } else {
    navbarContainer.classList.add("toggle");
    toggle = true;
  }
};

window.addEventListener("resize", () => {
  if (toggle && window.innerWidth > windowSize) {
    navbarContainer.classList.remove("toggle");
    toggle = false;
  }
});

button.addEventListener("click", handleToggle);

//Navbar scroll effect
window.onscroll = () => {
  const scrollDistance = 100;
  if (window.pageYOffset > scrollDistance) {
    nav.classList.add("nav-scroll");
  } else if (window.pageYOffset < scrollDistance) {
    nav.classList.remove("nav-scroll");
  }
};

//Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
