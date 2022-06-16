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
        // clear grid
        cells.forEach(cell => {
            cell.innerText = ''
        })
        // reset count
        // reset xArray and oArray
    }
    append(cell) {
        if (this.count % 2 === 0) {
            cell.innerText = 'X'
            this.xArray.push(Number(cell.dataset.value))
        } else {
            cell.innerText = 'O'
            this.oArray.push(Number(cell.dataset.value))
        }
        this.count++
    }
    checkWin() {

    }
    displayWin() {
        displayWinner.innerText = 'X Player Wins!'
    }
}

const cells = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('.reset')
const displayWinner = document.querySelector('.display-winner')

let newGame = new TicTacToe()

cells.forEach(cell => cell.addEventListener('click', () => {
    // console.log(cell)
    newGame.append(cell)
}))

resetBtn.addEventListener('click', newGame.resetGame)