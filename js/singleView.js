"use strict";

//Her bliver url´en og nølgen fra restdb angivet.
const url = "https://fornature-c085.restdb.io/rest/nature";
const urlId = "https://fornature-c085.restdb.io/rest/nature/";
const key = "6139f60943cedb6d1f97eeed";
const options = {
  headers: {
    "x-apikey": key,
  },
};

//Her bliver der kigget efter en værdi i url´en.
const urlParams = new URLSearchParams(window.location.search);
//Her bliver der taget fat i værdien id.
const id = urlParams.get("id");

//Laver vi en let variable, for arrayet.
let natureArray;
//Laver vi en let variable, for det enkelte ojekbt i arrayet.
let nature;
//Angiver variable nummer er lig med nul.
let number = 0;

//Kontroller om DOM´en er loaded, og kører loadJSON.
document.addEventListener("DOMContentLoaded", loadJSON);

//Her hentes json data ind og sendes videre til loadJSONNatureArray().
async function loadJSON() {
  //Her tager vi en url og konkatinere med objekts id, giver nølgen.
  const JSONData = await fetch(urlId + id, options);
  nature = await JSONData.json();
  // console.log(nature);
  visNature(nature);
  loadJSONNatureArray();
}

//Her hentes json data ind og sendes videre til visNatureArray().
async function loadJSONNatureArray() {
  //Giver fetch en url og key med og venter på at fetch svarer tilbage.
  const JSONDataRetter = await fetch(url, options);
  //Venter på at fetch har sæt alt data ind i json() function, og siger natureArray er lig med array´et.
  natureArray = await JSONDataRetter.json();
  // console.log(natureArray);
  //Kører visNatureArray(), med element natureArray
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
    //Her genererer vi et tal mellem 1 og 21, som bliver klonet.
    nature = natureArray[Math.round(Math.random() * 20)];

    //if sætning kontroller om let er mindre end 3, hvis mindre, skal den klone.
    if (number < 3) {
      let klon = temp.cloneNode(true).content;
      klon.querySelector(".navn").textContent = nature.navn;
      klon.querySelector(".billede").src = "asstes/img/" + nature.billednavn;
      klon.querySelector(".kategori").textContent = nature.kategori;
      klon.querySelector("article").addEventListener("click", () => {
        location.href = "single_view.html?id=" + nature._id;
      });
      container.appendChild(klon);
      //Her lægges der en til.
      number++;
    }
  });
}

// document.querySelector("button").addEventListener("click", () => {
//   location.href = "index.html?id=";
// });

//Her lyttes der på om der bliver klikket på tilbage knappen, hvis der gør,
// kigges der tilbage i ens history og fører en tilbage på galleri siden.
document.querySelector("button").addEventListener("click", () => {
  window.history.back();
});
