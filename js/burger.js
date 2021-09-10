"use strict";

// Siden loades

window.addEventListener("load", sidenVises);

function sidenVises() {
  document.querySelector("#burger_btn").addEventListener("click", openMenu);
}

// Open Menu

function openMenu() {
  const burgerBtn = document.querySelector("#burger_btn");
  const menu = document.querySelector("#menu");
  const allStrokes = document.querySelectorAll("#burger_btn .stroke");

  burgerBtn.removeEventListener("click", openMenu);

  burgerBtn.classList = "";
  allStrokes.forEach(offsetHeigthOnStroke);
  burgerBtn.classList = "open";
  menu.classList = "open";

  burgerBtn.addEventListener("click", hideMenu);
}

// Hide Menu
function hideMenu() {
  const burgerBtn = document.querySelector("#burger_btn");
  const menu = document.querySelector("#menu");
  const allStrokes = document.querySelectorAll("#burger_btn .stroke");

  burgerBtn.removeEventListener("click", hideMenu);

  burgerBtn.classList = "";
  allStrokes.forEach(offsetHeigthOnStroke);
  burgerBtn.classList = "hide";
  menu.classList = "hide";

  burgerBtn.addEventListener("click", openMenu);
}

// Kan vi på en eller anden måde optimere hvordan vi genstarter alle animationerne?
function offsetHeigthOnStroke(elm) {
  elm.offsetHeight;
}
