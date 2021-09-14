"use strict";

//Kontroller om DOM´en er loaded
window.addEventListener("DOMContentLoaded", start);

const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kategori");

const url = "https://fornature-c085.restdb.io/rest/nature";
const key = "6139f60943cedb6d1f97eeed";
const options = {
  headers: {
    "x-apikey": key,
  },
};

let natureArray;
let filter = "alle";
// let filter = kat;

function start() {
  const filterKnapper = document.querySelectorAll("#filter_menu button");
  filterKnapper.forEach((knap) =>
    knap.addEventListener("click", filtrerKategori)
  );
  loadJSON();
}

function filtrerKategori() {
  filter = this.dataset.kategori;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");

  visNatureArray();

  const txtKategori = document.querySelector(".txt_kategori");
  console.log(this);
  txtKategori.textContent = this.textContent;
}

async function loadJSON() {
  const JSONData = await fetch(url, options);
  natureArray = await JSONData.json();
  console.log(natureArray);
  visNatureArray();
}

function visNatureArray() {
  const container = document.querySelector("#galleri_article");
  const temp = document.querySelector("template");
  container.textContent = "";

  natureArray.forEach((nature) => {
    if (filter == nature.kategori || filter == "alle") {
      let klon = temp.cloneNode(true).content;
      // const makeHr = document.createElement("hr");
      // klon.appendChild(makeHr);
      klon.querySelector(".navn").textContent = nature.navn;
      klon.querySelector(".billede").src = "asstes/img/" + nature.billednavn;
      klon.querySelector(".kategori").textContent = nature.kategori;
      klon.querySelector("article").addEventListener("click", () => {
        location.href = "single_view.html?id=" + nature._id;
      });
      container.appendChild(klon);
    }
  });
}
