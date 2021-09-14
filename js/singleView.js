"use strict";

//Kontroller om DOM´en er loaded

const url = "https://fornature-c085.restdb.io/rest/nature";
const urlId = "https://fornature-c085.restdb.io/rest/nature/";
const key = "6139f60943cedb6d1f97eeed";
const options = {
  headers: {
    "x-apikey": key,
  },
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let natureArray;
let nature;
let number = 0;

document.addEventListener("DOMContentLoaded", loadJSON);

async function loadJSON() {
  const JSONData = await fetch(urlId + id, options);
  nature = await JSONData.json();
  // console.log(nature);
  visNature(nature);
  loadJSONNatureArray();
}

async function loadJSONNatureArray() {
  const JSONDataRetter = await fetch(url, options);
  natureArray = await JSONDataRetter.json();
  // console.log(natureArray);
  visNatureArray(natureArray);
}

function visNature(nature) {
  document.querySelector(".navn").textContent = nature.navn;
  document.querySelector(".billede").src = "asstes/img/" + nature.billednavn;
  document.querySelector(".kategori").textContent = nature.kategori;
  document.querySelector(".langbeskrivelse").textContent =
    nature.langbeskrivelse;
}

function visNatureArray(natureArray) {
  // console.log(natureArray);
  const container = document.querySelector(".flere_forslag");
  const temp = document.querySelector(".flere_forslag_temp");
  // container.textContent = "";

  natureArray.forEach((nature) => {
    // console.log("retter forEach");
    nature = natureArray[Math.round(Math.random() * 20)];

    if (number < 3) {
      let klon = temp.cloneNode(true).content;
      klon.querySelector(".navn").textContent = nature.navn;
      klon.querySelector(".billede").src = "asstes/img/" + nature.billednavn;
      klon.querySelector(".kategori").textContent = nature.kategori;
      klon.querySelector("article").addEventListener("click", () => {
        location.href = "single_view.html?id=" + nature._id;
      });
      container.appendChild(klon);
      number++;
    }
  });
}

// document.querySelector("button").addEventListener("click", () => {
//   location.href = "index.html?id=";
// });

document.querySelector("button").addEventListener("click", () => {
  window.history.back();
});
