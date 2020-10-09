export class DiagonalWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
        for (let i = 0; i < 3; i++) {
            let token1 = this.column[0].getTokenAt(i)
            let token2 = this.column[1].getTokenAt(i + 1)
            let token3 = this.column[2].getTokenAt(i + 2)
            let token4 = this.column[3].getTokenAt(i + 3)

            if (token1 === token2 &&
                token2 === token3 &&
                token3 === token4 &&
                token4 !== null) {
                return token1
            }
        }

        for (let i = 0; i < 3; i++) {
            let token1 = this.column[0].getTokenAt(i+3)
            let token2 = this.column[1].getTokenAt(i+2)
            let token3 = this.column[2].getTokenAt(i+1)
            let token4 = this.column[3].getTokenAt(i)

            if (token1 === token2 &&
                token2 === token3 &&
                token3 === token4 &&
                token4 !== null) {
                return token1
            }
        }
        return 0;

    }
}