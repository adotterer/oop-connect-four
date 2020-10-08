export class RowWinInspector {
    constructor(columns) {
        this.columns = columns:
    }

    inspect() {
        for (let i = 0; i < 4; i++) {
            let token1 = this.columns[i].getTokenAt()
            let token2 = this.columns[i+1].getTokenAt()
            let token3 = this.columns[i+2].getTokenAt()
            let token4 = this.columns[i+3].getTokenAt()

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