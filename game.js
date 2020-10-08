import { Column } from "./column.js";
import { ColumnWinInspector } from "./columnWinInspector.js";

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
    this.winnerNumber = 0;

  }

  getName() {
    if (this.winnerNumber === 3) {
        return `${this.player1name} ties ${this.player2name}`;
    } else if (this.winnerNumber === 1) {
        return `${this.player1name} WINS!!`
    } else if (this.winnerNumber === 2) {
        return `${this.player2name} WINS!!`
    }
    return `${this.player1name} vs ${this.player2name}`;
  }

  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }

  isColumnFull(columnIndex) {
      if (this.winnerNumber === 1 || this.winnerNumber === 2) {
          return true
      }
    return this.columns[columnIndex].isFull();
  }

  playInColumn(columnIndex) {
    this.columns[columnIndex].add(this.currentPlayer);
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
    this.checkForTie();
    this.checkForColumnWin();
  }

  checkForTie() {
      if (this.columns.every((columnIndex) => columnIndex.isFull())) {
        this.winnerNumber = 3;
      }
  }

  checkForColumnWin() {
    if (this.winnerNumber !== 0) {
        return;
    } else {
        for (let i = 0; i < this.columns.length; i++) {
            let column = this.columns[i];
            let winInspector = new ColumnWinInspector(column);
            if (winInspector.inspect() === 1 ||
                winInspector.inspect() === 2) {
                    this.winnerNumber = winInspector.inspect();
                }
        }
    }
  }


}
