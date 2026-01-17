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
function setWin() {
  point1++;
  playerPoint1.textContent = `POINT: ${point1}`;
  playerStatus1.textContent = "STATUS: WIN";
  playerStatus2.textContent = "STATUS: LOSE";
  playerStatus1.style.color = "green";
  playerStatus2.style.color = "red";
}

function setLose() {
  point2++;
  playerPoint2.textContent = `POINT: ${point2}`;
  playerStatus1.textContent = "STATUS: LOSE";
  playerStatus2.textContent = "STATUS: WIN";
  playerStatus1.style.color = "red";
  playerStatus2.style.color = "green";
}

function setDraw() {
  playerStatus1.textContent = "DRAW";
  playerStatus2.textContent = "DRAW";
  playerStatus1.style.color = "white";
  playerStatus2.style.color = "white";
}

window.addEventListener("keydown", (e) => {
  if (!arr.includes(e.key)) return alert("e,w,f den basqa her secmeyin");

  const userEl = e.key;
  const compEl = randomIndex(arr);
  if (userEl == "e" && compEl == "f") {
    setWin();
  } else if (userEl == "w" && compEl == "e") {
    setWin();
  } else if (userEl == "f" && compEl == "w") {
    setWin();
  } else if (userEl == compEl) {
    setDraw();
  } else {
    setLose();
  }

  playerImg1.src = images[userEl];
  playerImg2.src = images[compEl];
});
