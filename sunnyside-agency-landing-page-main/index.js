// Toggle function
const button = document.querySelector(".burger-button");
const navbar = document.querySelector("#navbar");
let toggle = false;
const windowSize = 870;

const handleToggle = (e) => {
  e.preventDefault();
  if (toggle) {
    navbar.classList.remove("toggle");
    toggle = false;
  } else {
    navbar.classList.add("toggle");
    toggle = true;
  }
};

window.addEventListener("resize", function () {
  if (toggle && window.innerWidth > windowSize) {
    navbar.classList.remove("toggle");
    toggle = false;
  }
});

button.addEventListener("click", handleToggle);

//Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
