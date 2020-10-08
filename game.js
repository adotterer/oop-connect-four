export class Game {
  constructor(player1name, player2name) {
    this.player1name = player1name;
    this.player2name = player2name;
    this.currentPlayer = 1;
  }

  getName() {
    return `${this.player1name} vs ${this.player2name}`;
  }

  playInColumn() {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }
}
