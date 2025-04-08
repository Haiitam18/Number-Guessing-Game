const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const infoDiv = document.getElementById("infoDiv");

let heart = [heart1, heart2, heart3];
let remainingLife = 3;

let globalUserInput = "";
let botNumber = randomNumber();

function checkAnswer(globalUserInput) {
  if (globalUserInput === botNumber) {
    infoDiv.innerHTML = "Congrats you guessed the number";
    // Text style
    infoDiv.style.color = "green";
    infoDiv.style.fontSize = "20px";
    infoDiv.style.fontWeight = "bold";
    showWinPopup();
  } else if (globalUserInput > botNumber) {
    infoDiv.innerHTML = "You guessed too high";
    loseheart();

    // Text style
    infoDiv.style.color = "red";
    infoDiv.style.fontSize = "18px";
    infoDiv.style.fontWeight = "normal";
  } else {
    infoDiv.innerHTML = "You guessed too low";
    loseheart();

    // Text style
    infoDiv.style.color = "blue";
    infoDiv.style.fontSize = "18px";
    infoDiv.style.fontWeight = "normal";
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function loseheart() {
  if (remainingLife > 1) {
    heart[remainingLife - 1].src = "./Img/broken-heart.png";
    remainingLife--;
  } else if (remainingLife === 1) {
    heart[remainingLife - 1].src = "./Img/broken-heart.png";
    showLosePopup();
  }
}

function showWinPopup() {
  const popup = document.getElementById("win-popup");
  popup.style.display = "block";
}

function showLosePopup() {
  const popup = document.getElementById("lose-popup");
  popup.style.display = "block";
}

document.getElementById("submitBtn").addEventListener("click", function () {
  let globalUserInput = document.getElementById("userInput").value;
  if (
    !isNaN(globalUserInput) &&
    globalUserInput >= 0 &&
    globalUserInput <= 100
  ) {
    checkAnswer();
    document.getElementById("userInput").value = "";
  } else {
    alert("Please enter a number between 0 and 100.");
  }
});

document
  .getElementById("userInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let userInput = parseInt(document.getElementById("userInput").value);

      if (!isNaN(userInput) && userInput >= 0 && userInput <= 100) {
        checkAnswer(userInput);

        document.getElementById("userInput").value = "";
      } else {
        alert("Please enter a number between 0 and 100.");
      }
    }
  });

document
  .getElementById("restart-btn-win")
  .addEventListener("click", function () {
    restart();
  });
document
  .getElementById("restart-btn-lose")
  .addEventListener("click", function () {
    restart();
  });

function restart() {
  botNumber = randomNumber();
  remainingLife = 3;
  heart1.src = "./Img/heart-full.png";
  heart2.src = "./Img/heart-full.png";
  heart3.src = "./Img/heart-full.png";
  document.getElementById("userInput").value = "";
  infoDiv.innerHTML = "";
  let popup1 = document.getElementById("lose-popup");
  popup1.style.display = "none";
  let popup2 = document.getElementById("win-popup");
  popup2.style.display = "none";
}

showWinPopup();
