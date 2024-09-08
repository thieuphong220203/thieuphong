/*=============== BASE ===============*/
function getElement(id) {
  return document.getElementById(id);
}
/*=============== SHOW MENU ===============*/
const navMenu = getElement("nav-menu");
const navToggle = getElement("nav-toggle");
const navClose = getElement("nav-close");

if (navToggle) {
  navToggle.onclick = () => {
    navMenu.classList.add("show-menu");
  };
  //   navToggle.addEventListener("click", () => {
  //     navMenu.classList.add("show-menu");
  //   });
}

if (navClose) {
  navClose.onclick = () => {
    navMenu.classList.remove("show-menu");
  };
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = getElement("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-fill" : "ri-sun-line";
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-fill" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.onclick = () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
};
