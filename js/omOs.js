"use strict";

//Kontroller om DOM´en er loaded
document.addEventListener("DOMContentLoaded", start);

document.querySelector("#popup button").addEventListener("click", lukPopup);

function lukPopup() {
  document.querySelector("#popup").style.display = "none";
}

function start() {
  // console.log("start");
  document.querySelector("#popup button").querySelector("click", klikIndsend);
  // document
  //   .querySelector("#popup article")
  //   .addEventListener("click", () => klikIndsend());
}

function klikIndsend() {
  console.log("klikIndsend");
  const popup = document.querySelector("#popup");
  popup.style.display = "block";
}
