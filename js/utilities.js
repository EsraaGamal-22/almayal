"use strict"
import {
  fadeOutAnimationKeyframes,
  fadeOutAnimationOptions,
  windowHeight,
} from "./helpers.js"

export const getById = (id) => document.getElementById(id)

export const getAllByClass = (className) =>
  Array.from(document.getElementsByClassName(className))

export const fadeOutElement = (element) => {
  const fadeOutAnimation = element.animate(
    fadeOutAnimationKeyframes,
    fadeOutAnimationOptions
  )
  fadeOutAnimation.onfinish = () => element.remove()
}

export const getElementHeight = (element) => element.offsetHeight

export const closeParent = (closeBtn) => {
  closeBtn.addEventListener("click", function () {
    const parent = this.parentElement
    fadeOutElement(parent)
  })
}

export const insertCurrentYear = (element) => {
  const elementHtml = element.innerHTML
  const currentYear = new Date().getFullYear()
  element.innerHTML = elementHtml + ` @${currentYear}`
}

export const setHeaderHeightAndMargin = () => {
  const navbar = getById("navbar")
  const header = getById("header")

  const isFullHeight = header.classList.contains('home-header')

  const navbarHeight = getElementHeight(navbar)
  if (isFullHeight) header.style.height = `${windowHeight - navbarHeight}px`
  header.style.marginTop = `${navbarHeight}px`
}
