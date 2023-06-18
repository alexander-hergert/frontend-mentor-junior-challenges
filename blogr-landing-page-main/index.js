//Toggle menu button
const menuIcon = document.body.querySelector(".nav-burger-buttons img");
const menu = document.body.querySelector(".menu");
let toggle = false;

const handleToggle = () => {
  toggle = !toggle;
  if (toggle) {
    menuIcon.src = "./images/icon-close.svg";
    menu.classList.add("menu-active");
  } else {
    menuIcon.src = "./images/icon-hamburger.svg";
    menu.classList.remove("menu-active");
    sublinksContainerMenu.forEach((container) => {
      container.classList.remove("sublinks-container-menu-active");
    });
  }
};
menuIcon.addEventListener("click", handleToggle);

//Hover over Navlinks
const linksContainer = document.body.querySelectorAll(".links-container");
const navLinkContainer = document.body.querySelectorAll(".nav-link-container");
const sublinksContainer = document.body.querySelectorAll(".sublinks-container");

const handleOnMouseEnter = (e) => {
  e.target.nextElementSibling.classList.add("sublinks-container-active");
};

const handleOnMouseLeave = (e) => {
  e.target.childNodes[1].nextElementSibling.classList.remove(
    "sublinks-container-active"
  );
};

navLinkContainer.forEach((link) => {
  link.addEventListener("mouseenter", handleOnMouseEnter);
});

linksContainer.forEach((container) => {
  container.addEventListener("mouseleave", handleOnMouseLeave);
});

//Click on Menulinks
const navLinksContainerMenu = document.body.querySelectorAll(
  ".nav-link-container-menu"
);
const sublinksContainerMenu = document.body.querySelectorAll(
  ".sublinks-container-menu"
);
const iconsMenu = document.body.querySelectorAll(
  'img[src="./images/icon-arrow-dark.svg"]'
);

const handleClick = (e) => {
  e.preventDefault();
  sublinksContainerMenu.forEach((container) => {
    container.classList.remove("sublinks-container-menu-active");
  });
  e.target.nextElementSibling.classList.add("sublinks-container-menu-active");

  iconsMenu.forEach((icon) => {
    icon.style.transform = "rotate(0deg)";
  });
  e.target.childNodes[1].nextElementSibling.style.transform = "rotate(180deg)";
};

navLinksContainerMenu.forEach((container) => {
  container.addEventListener("click", handleClick);
});

//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Close menu on resizing screen
let windowSize = window.innerWidth;

const closeMenu = () => {
  windowSize = window.innerWidth;
  if (windowSize > 900) {
    toggle = false;
    sublinksContainerMenu.forEach((container) => {
      container.classList.remove("sublinks-container-menu-active");
    });
    menuIcon.src = "./images/icon-hamburger.svg";
    menu.classList.remove("menu-active");
  }
};

window.addEventListener("resize", closeMenu);

//Navbar scroll effect
const nav = document.body.querySelector("nav");

window.onscroll = () => {
  const scrollDistance = 500;
  if (window.scrollY > scrollDistance) {
    nav.classList.add("nav-scroll");
  } else if (window.scrollY < scrollDistance) {
    nav.classList.remove("nav-scroll");
  }
};
