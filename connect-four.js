import { Game } from './game.js';

let game = undefined;

window.addEventListener('DOMContentLoaded', () => {
    let player1 = document.getElementById('player-1-name');
    let player2 = document.getElementById('player-2-name');
    let newGameButton = document.getElementById('new-game');

    player1
        .addEventListener('keyup', (event) => {
            enableNewGameButton();
        })
    player2
        .addEventListener('keyup', (event) => {
            enableNewGameButton();
        })

    function enableNewGameButton() {
        let player1content = player1.value;
        let player2content = player2.value;
        newGameButton.disabled = (player1content.length === 0 ||
                                  player2content.length === 0)
    };

})