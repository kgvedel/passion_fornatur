"use strict";

//Kontroller om DOM´en er loaded
window.addEventListener("DOMContentLoaded", start);

let retter;
let filter = "alle";

function start() {
  console.log("start");
  document.querySelector("third_section a").addEventListener("click", () => {
    location.href = "single_view.html?kategori=" + "landskab";
  });
  // document
  // .querySelector("third_section a")
  // .addEventListener("click", () => visKategori());
}

// function visKategori() {
//   console.log();
//   document.querySelector("").addEventListener("click", () => {
//     location.href = "single_view.html?kategori=" + "landskab";
//   });
// }
