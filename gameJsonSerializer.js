export class GameJsonSerializer {
  constructor(game) {
    this.game = game;

    let data = this.serialize();
    this.storeLocal(data);
  }

  serialize() {
    return JSON.stringify(this.game);
  }

  storeLocal(data) {
    localStorage.setItem("savedGame", data);
  }
}
