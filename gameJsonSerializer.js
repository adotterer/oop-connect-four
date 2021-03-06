import { Game } from "./game.js";

export class GameJsonSerializer {
  constructor(game) {
    this.game = game;
  }

  serialize() {
    // console.log(this.game.player);
    const data = {
      playerOneName: this.game.player1name,
      playerTwoName: this.game.player2name,
      tokens: [[], [], [], [], [], []],
    };
    for (let rowIndex = 0; rowIndex < 6; rowIndex += 1) {
      for (let columnIndex = 0; columnIndex < 7; columnIndex += 1) {
        const tokenValue = this.game.getTokenAt(rowIndex, columnIndex);
        data.tokens[rowIndex][columnIndex] = tokenValue;
      }
    }
    return JSON.stringify(data);
  }
}
