import { Game } from "./game.js";


let game = undefined;
let clickTarget = document.getElementById("click-targets");

function updateUI() {
  let boardHolder = document.getElementById("board-holder");
  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    document.getElementById("game-name").innerHTML = game.getName();
  }
  let currentPlayer = game.currentPlayer;
  if (currentPlayer === 1) {
    clickTarget.classList.remove("black");
    clickTarget.classList.add("red");
  } else {
    clickTarget.classList.remove("red");
    clickTarget.classList.add("black");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  let player1 = document.getElementById("player-1-name");
  let player2 = document.getElementById("player-2-name");
  let newGameButton = document.getElementById("new-game");

  player1.addEventListener("keyup", (event) => {
    enableNewGameButton();
  });
  player2.addEventListener("keyup", (event) => {
    enableNewGameButton();
  });

  function enableNewGameButton() {
    let player1content = player1.value;
    let player2content = player2.value;
    newGameButton.disabled =
      player1content.length === 0 || player2content.length === 0;
  }

  newGameButton.addEventListener("click", (event) => {
    game = new Game(player1.value, player2.value);
    player1.value = "";
    player2.value = "";
    enableNewGameButton();

    updateUI();
  });

  clickTarget.addEventListener("click", (event) => {
    let targetId = event.target.id;
    let columnIndex = Number.parseInt(targetId[targetId.length-1]);
    console.log(columnIndex);
    game.playInColumn(columnIndex);
    updateUI();
  });
});
