"use strict";

//Kontroller om DOM´en er loaded.
window.addEventListener("DOMContentLoaded", start);

//Her bliver der kigget efter en værdi i url´en.
const urlParams = new URLSearchParams(window.location.search);
//Her bliver der taget fat i værdien kategori.
const kat = urlParams.get("kategori");

//Her bliver url´en og nølgen fra restdb angivet.
const url = "https://fornature-c085.restdb.io/rest/nature";
const key = "6139f60943cedb6d1f97eeed";
const options = {
  headers: {
    "x-apikey": key,
  },
};

//Laver vi en let variable, for arrayet.
let natureArray;
//Sætter filteret lig med kat, så filtering sker ved når man fx trykker på landskab på forsiden,
//kommer der landskab frem på galleri.html.
let filter = kat;

//Sætter EventListener på alle knapper i #filter_menu og kører loadJSON().
function start() {
  //Vægler alle knapper i #filter_menu
  const filterKnapper = document.querySelectorAll("#filter_menu button");
  //Sætter en EventListener på alle knapper, som henviser til filtrerKategori.
  filterKnapper.forEach((knap) =>
    knap.addEventListener("click", filtrerKategori)
  );
  //Kører loadJSON function.
  loadJSON();
}

function filtrerKategori() {
  //Sætter filter lig med dataset fra den knap der klikkes på, det kan fx "plante".
  //this vælger det element der klikkes på, som er knappen.
  filter = this.dataset.kategori;
  //Fjerner class valgt
  document.querySelector(".valgt").classList.remove("valgt");
  //Tilføjer class til den knap der er klikket på
  this.classList.add("valgt");

  //Kører visNatureArray().
  visNatureArray();

  //Ændrer h3 tekst til navnet på den valgte filtering.
  const txtKategori = document.querySelector(".txt_kategori");
  console.log(this);
  txtKategori.textContent = this.textContent;
}

//Her hentes json data ind og sendes videre til visNatureArray().
async function loadJSON() {
  //Giver fetch en url og key med og venter på at fetch svarer tilbage.
  const JSONData = await fetch(url, options);
  //Venter på at fetch har sæt alt data ind i json() function, og siger natureArray er lig med array´et.
  natureArray = await JSONData.json();
  console.log(natureArray);
  //Kører visNatureArray()
  visNatureArray();
}

//visNatureArray sætter hver enkelt objekt ind i html.
function visNatureArray() {
  const container = document.querySelector("#galleri_article");
  const temp = document.querySelector("template");
  //html containeren tømmes før den fyldes med nyt indhold.
  container.textContent = "";

  //Tager array´et og kører alt data igennem ind til der ikke er mere. Den får element nature.
  natureArray.forEach((nature) => {
    //if sætning kontroller hvad fitler er lig med, hvis det er lige med alle, filter den efter det
    //hvis den er lig med "dyr", filter den kun efter dyr objekter i array´et.
    if (filter == nature.kategori || filter == "alle") {
      //Her bliver der lavet en klon variable, klonen bliver taget fra template, og tager html´en,
      //som vi så ændre herunder, til data fra vores array.
      let klon = temp.cloneNode(true).content;
      //Her bruges der let klon, og peger på .navn hvor der ændres i teksten,
      //med hjælp fra elementet og værdien fra objekt i array´et.
      klon.querySelector(".navn").textContent = nature.navn;
      //Her sker det samme, dog ændre vi src navnet, og sætte stien frem til hvor billedet ligger.
      klon.querySelector(".billede").src = "asstes/img/" + nature.billednavn;
      //Her bliver der lyttet på om billedet eller knappen bliver klikket på, som derefter fører videre til single_view.html.
      klon.querySelector("article img").addEventListener("click", () => {
        location.href = "single_view.html?id=" + nature._id;
      });
      klon.querySelector("article #klik_info").addEventListener("click", () => {
        location.href = "single_view.html?id=" + nature._id;
      });
      //Her tager vi alt data fra klonen og sætter ind i #galleri_article, som viser alt i DOM´en i browseren.
      container.appendChild(klon);
    }
  });
}
