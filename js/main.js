class TicTacToe {
    constructor() {
        this.count = 0
        this.winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        this.xArray = []
        this.oArray = []
    }
    resetGame() {

    }
    append(cell) {
        if (this.count % 2 === 0) {
            cell.innerText = 'X'
            console.log(cell.dataset.value)
            this.xArray.push(Number(cell.dataset.value))
            // console.log(this.xArray)
        } else {
            cell.innerText = 'O'
            this.oArray.push(Number(cell.dataset.value))
            // console.log(this.oArray)
        }
        this.count++
    }
    checkWin() {

    }
    displayWin() {

    }
}

const cells = document.querySelectorAll('.cell')

let newGame = new TicTacToe()

cells.forEach(cell => cell.addEventListener('click', () => {
    console.log(cell)
    newGame.append(cell)
}))