import { Column } from "./column.js";
import { GameJsonSerializer } from "./gameJsonSerializer.js";

export class Game {
  constructor(player1name, player2name) {
    this.player1name = player1name;
    this.player2name = player2name;
    this.currentPlayer = 1;
    this.columns = [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
    ];
  }

  getName() {
    return `${this.player1name} vs ${this.player2name}`;
  }

  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }

  isColumnFull(columnIndex) {
    return this.columns[columnIndex].isFull();
  }

  playInColumn(columnIndex) {
    this.columns[columnIndex].add(this.currentPlayer);
    console.log(this.columns[columnIndex]);
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }

  saveGame(game) {
    let savedGame = new GameJsonSerializer(game);
  }

  unsaveGame() {}
}
