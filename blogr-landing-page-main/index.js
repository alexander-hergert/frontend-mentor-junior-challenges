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
  }
};
menuIcon.addEventListener("click", handleToggle);

//Hover over Navlinks
const linksContainer = document.body.querySelectorAll(".links-container");
const navLinks = document.body.querySelectorAll(".nav-link");
const sublinksContainer = document.body.querySelectorAll(".sublinks-container");

const handleOnMouseEnter = (e) => {
  e.target.nextElementSibling.classList.add("sublinks-container-active");
};

const handleOnMouseLeave = (e) => {
  e.target.childNodes[1].nextElementSibling.classList.remove(
    "sublinks-container-active"
  );
};

navLinks.forEach((link) => {
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
