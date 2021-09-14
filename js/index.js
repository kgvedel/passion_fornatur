"use strict";

window.addEventListener("DOMContentLoaded", start);
let filter = "landskab";

function start() {
  console.log("start");
  const knapperTilGalleri = document.querySelectorAll("#third_section a");
  knapperTilGalleri.forEach((knap) =>
    knap.addEventListener("click", filtrerKategori)
  );
}

function filtrerKategori() {
  filter = this.dataset.kategori;
  console.log(this);
}
