import { Game } from "./game.js";
 

export class Column {
  constructor(tokens = []) {
    this.tokens = [null, null, null, null, null, null];
  }

  add(playerNumber) {
    for (let i = 5; i >= 0; i--) {
      if (this.tokens[i] === null) {
        this.tokens[i] = playerNumber;
        return;
      }
    }
  }

  isFull() {
    return this.tokens[0] !== null;
  }

  getTokenAt(rowIndex) {
    return this.tokens[rowIndex];
  }
}
