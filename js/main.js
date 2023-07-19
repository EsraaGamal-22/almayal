"use strict"

import { fadeOutElement, getById, insertCurrentYear, setHeaderHeightAndMargin } from "./utilities.js"

const preloader = getById("preloader")
const rightsReserved = getById("rightsReserved")

document.addEventListener("DOMContentLoaded", () => {
  // set header height
  setHeaderHeightAndMargin()

  // bootstrap forms
  const forms = document.querySelectorAll(".needs-validation")
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault(),
          event.stopPropagation(),
          form.classList.add("was-validated")
      },
      !1
    )
  })

  fadeOutElement(preloader)
})

// btn scroll to up
const scrollBtn = document.getElementById("btn-scroll")
window.onscroll = function () {
  if (scrollY >= 400) {
    scrollBtn.style.display = "block"
  } else {
    scrollBtn.style.display = "none"
  }
}
scrollBtn.addEventListener("click", function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

// insert current year in footer
insertCurrentYear(rightsReserved)

window.addEventListener("resize", setHeaderHeightAndMargin)