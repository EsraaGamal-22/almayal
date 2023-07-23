"use strict";

import {
  fadeOutElement,
  getById,
  insertCurrentYear,
  setHeaderHeightAndMargin,
} from "./utilities.js";

const preloader = getById("preloader");
const rightsReserved = getById("rightsReserved");

document.addEventListener("DOMContentLoaded", () => {
  // initialize animate onScroll
  AOS.init({ once: true });
  // set header height
  // setHeaderHeightAndMargin()

  // bootstrap forms
  const forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault(),
          event.stopPropagation(),
          form.classList.add("was-validated");
      },
      !1
    );
  });

  fadeOutElement(preloader);
});

// btn scroll to up
const scrollBtn = document.getElementById("btn-scroll");
window.onscroll = function () {
  if (scrollY >= 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.addEventListener("click", function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// insert current year in footer
insertCurrentYear(rightsReserved);

//window.addEventListener("resize", setHeaderHeightAndMargin)

// display menu
function displayMenu() {
  const menu = getById("navbar-container");
  menu.style.display = "flex";
  const open_btn = getById("menu-open");
  open_btn.style.display = "none";
}
// close menu
function closeMenu() {
  const menu = getById("navbar-container");
  menu.style.display = "none";
  const open_btn = getById("menu-open");
  open_btn.style.display = "block";
}

const open_menu = getById("menu-open");
open_menu.onclick = function () {
  displayMenu();
};

const close_menu = getById("menu-close");
close_menu.onclick = function () {
  closeMenu();
};

// close the menu when click on link for the same page
const nav_items = document.getElementsByClassName("nav-item");
Array.from(nav_items).forEach((item) =>
  item.addEventListener("click", closeMenu)
);
// const title = document.title;
// for (let i = 0; i < nav_items.length; i++) {
//   const nav_link = nav_items[i];
//   if (title === nav_link) {
//     nav_link.onclick = function () {
//       console.log(title);
//       closeMenu();
//     };
//   }
// }
