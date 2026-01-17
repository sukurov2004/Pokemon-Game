// e > f
// w > e
// f > w

const playerImg1 = document.querySelector("#playerImg1");
const playerImg2 = document.querySelector("#playerImg2");
const playerStatus1 = document.querySelector("#playerStatus1");
const playerStatus2 = document.querySelector("#playerStatus2");
const playerPoint1 = document.querySelector("#playerPoint1");
const playerPoint2 = document.querySelector("#playerPoint2");

const arr = ["e", "w", "f"];
const images = {
  e: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
  f: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Charmander.png/250px-Charmander.png",
  w: "https://upload.wikimedia.org/wikipedia/en/5/59/Pok%C3%A9mon_Squirtle_art.png",
};

let point1 = 0;
let point2 = 0;

//! kompyuterin random element secme funksiyasi
function randomIndex(arr) {
  const randomEl = Math.floor(Math.random() * arr.length);
  return arr[randomEl];
}

window.addEventListener("keydown", function (e) {
  if (!arr.includes(e.key)) alert("e,w,f den basqa her secmeyin");
  const userEl = e.key;
  const compEl = randomIndex(arr);
 
  if (userEl == "e" && compEl == "f") {
    //!qelebe zamani point 1 vahid artirma
    point1++;
    playerPoint1.innerHTML = `POINT: ${point1}`;
    //!status ui da yazilmasi
    playerStatus1.innerHTML = `STATUS: WIN`;
    playerStatus2.innerHTML = `STATUS: LOSE`;
    //!qelebe zamani status rengi
    playerStatus1.style.color = "green";
    playerStatus2.style.color = "red";
   
  } else if (userEl == "w" && compEl == "e") {
    //!qelebe zamani point 1 vahid artirma
    point1++;
    playerPoint1.innerHTML = `POINT: ${point1}`;
    //!status ui da yazilmasi
    playerStatus1.innerHTML = `STATUS: WIN`;
    playerStatus2.innerHTML = `STATUS: LOSE`;
    //!qelebe zamani status rengi
    playerStatus1.style.color = "green";
    playerStatus2.style.color = "red";
  } else if (userEl == "f" && compEl == "w") {
    //!qelebe zamani point 1 vahid artirma
    point1++;
    playerPoint1.innerHTML = `POINT: ${point1}`;
    //!status ui da yazilmasi
    playerStatus1.innerHTML = `STATUS: WIN`;
    playerStatus2.innerHTML = `STATUS: LOSE`;
    //!qelebe zamani status rengi
    playerStatus1.style.color = "green";
    playerStatus2.style.color = "red";
  } else if (userEl == compEl) {
    //!berabere zamani olacaq prosesler
    playerStatus1.innerHTML = `DRAF`;
    playerStatus2.innerHTML = `DRAF`;
    playerStatus1.style.color = "white";
    playerStatus2.style.color = "white";
  } else {
    point2++;
    playerPoint2.textContent = `POINT: ${point2}`;
    playerStatus1.innerHTML = `STATUS: LOSE`;
    playerStatus2.innerHTML = `STATUS: WIN`;
    playerStatus1.style.color = "red";
    playerStatus2.style.color = "green";
  }


  playerImg1.src = images[userEl]
  playerImg2.src = images[compEl]
});
