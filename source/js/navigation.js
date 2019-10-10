var menu_toggle = document.querySelector(".header__menu");
var nav_block = document.querySelector(".header__nav");

if (nav_block.classList.contains("header__nav--open")) {
  menu_toggle.classList.remove("header__menu--open"),
  nav_block.classList.remove("header__nav--open");
}

menu_toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  nav_block.classList.toggle("header__nav--open");
  menu_toggle.classList.toggle("header__menu--open");
});
