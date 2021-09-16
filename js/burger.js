"use strict";

//Kontroller om DOM´en er loaded.
window.addEventListener("DOMContentLoaded", start);

function start() {
  //Lytter efter om #burger_btn bliver klikket på, som efter vil kører openMenu() functionen.
  document.querySelector("#burger_btn").addEventListener("click", openMenu);
}

// Open Menu
function openMenu() {
  //Her bliver der defineret conste variabler, så koden bliver mere læslig, men også nemmere at arbejde.
  const burgerBtn = document.querySelector("#burger_btn");
  const menu = document.querySelector("#menu");
  //Her bliver der peget på alle storkes i #burger_btn, dette sker på grund af querySelectorAll.
  const allStrokes = document.querySelectorAll("#burger_btn .stroke");

  //Her bliver EventListener fjernet fra openMenu
  burgerBtn.removeEventListener("click", openMenu);

  //Alle class bliver fjernet.
  burgerBtn.classList = "";
  //Her bliver alle animationer sendt hen til en function der genstarter dem.
  allStrokes.forEach(offsetHeigthOnStroke);
  //Her bliver der tilføjet class open til #burger_btn og #menu.
  burgerBtn.classList = "open";
  menu.classList = "open";

  //Lytter efter om #burger_btn bliver klikket på, som efter vil kører hideMenu() functionen.
  burgerBtn.addEventListener("click", hideMenu);
}

// Hide Menu
function hideMenu() {
  //Her gør vi det samme som i openMenu, dog arbjeder vi med hide istedet for open.
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

//Her genstarter vi alle animationerne, som der sker i #burger_btn.
function offsetHeigthOnStroke(elm) {
  elm.offsetHeight;
}
