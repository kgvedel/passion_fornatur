"use strict";

//Kontroller om DOM´en er loaded
document.addEventListener("DOMContentLoaded", start);

const knapSumit = document.querySelector(".knap_sumit");
const popup = document.querySelector("#popup");

function start() {
  // console.log("start")
  knapSumit.addEventListener("click", sumitPopup);
  popup.querySelector(knapSumit).addEventListener("click", sumitPopup);
}

function sumitPopup() {
  popup.style.display = "block";
}

document.querySelector("#popup button").addEventListener("click", lukPopup);

function lukPopup() {
  document.querySelector("#popup").style.display = "none";
}
