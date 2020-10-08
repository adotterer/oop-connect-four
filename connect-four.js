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
    clickTarget.classList.remove("red");
    clickTarget.classList.add("black");
  } else {
    clickTarget.classList.remove("black");
    clickTarget.classList.add("red");
  }

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
      let space = document.querySelector(`#square-${rowIndex}-${columnIndex}`);
      space.innerHTML = "";
      let player = game.getTokenAt(rowIndex, columnIndex);
      if (player === 1) {
        let token = document.createElement("div");
        token.classList.add("token");
        token.classList.add("black");
        space.appendChild(token);
      } else if (player === 2) {
        let token = document.createElement("div");
        token.classList.add("token");
        token.classList.add("red");
        space.appendChild(token);
      }
    }
  }
  for (let i = 0; i <= 6; i++) {
    let isColumnFull = game.isColumnFull(i);
    let column = document.getElementById(`column-${i}`);
    if (isColumnFull) {
      column.classList.add("full");
    } else {
      column.classList.remove("full");
    }
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
    let columnIndex = Number.parseInt(targetId[targetId.length - 1]);
    console.log(columnIndex);
    game.playInColumn(columnIndex);
    updateUI();
  });
});
