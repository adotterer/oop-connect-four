export class Game {
    constructor(player1name, player2name) {
        this.player1name = player1name;
        this.player2name = player2name;
    }

    getName () {
        return `${this.player1name} vs ${this.player2name}`
    }


}
