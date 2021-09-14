"use strict";

//Kontroller om DOM´en er loaded, og henviser til start function
document.addEventListener("DOMContentLoaded", start);

//start functionen starter
function start() {
  console.log("start");
  //Peger på knappen i form, som aktiverer functionen klikIndsend, hvis der klikkes på knappen i form.
  document
    .querySelector("form .knap")
    .addEventListener("click", () => klikPopup());
}

//denne function kan vise popup´en
function klikPopup() {
  console.log("klikPopup");
  const popup = document.querySelector("#popup");
  //her bliver popup´en vist på grund af den bliver til et block element istedet for none.
  popup.style.display = "block";
}

//her lyttes efter om knappen i popup´en bliver klikket på, og hvis den går aktivere den lukPopup.
document.querySelector("#popup button").addEventListener("click", lukPopup);

function lukPopup() {
  //her bliver popup´en display fra block til none, hvilket betyder den ikke er synlig mere.
  document.querySelector("#popup").style.display = "none";
}
