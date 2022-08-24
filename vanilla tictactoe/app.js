let isRestart = true
let board = [null,null, null,null,null, null,null,null, null]
const boardContainer = document.querySelector('.board-container')
const boardFooter = document.querySelector('.board-footer')
let player = 'player1'
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')

// Winner

function winner () {
  if(board[0] === "player1" && board[1] === "player1" && board[2] === "player1" ||
    board[3] === "player1" && board[4] === "player1" && board[5] === "player1" ||
    board[6] === "player1" && board[7] === "player1" && board[8] === "player1" ||
    board[0] === "player1" && board[4] === "player1" && board[8] === "player1" ||
    board[2] === "player1" && board[4] === "player1" && board[6] === "player1" ||
    board[0] === "player1" && board[3] === "player1" && board[6] === "player1" ||
    board[1] === "player1" && board[4] === "player1" && board[7] === "player1" ||
    board[2] === "player1" && board[5] === "player1" && board[8] === "player1"){
      return'player1'
  }else if(board[0] === "player2" && board[1] === "player2" && board[2] === "player2" ||
          board[3] === "player2" && board[4] === "player2" && board[5] === "player2" ||
          board[6] === "player2" && board[7] === "player2" && board[8] === "player2" ||
          board[0] === "player2" && board[4] === "player2" && board[8] === "player2" ||
          board[2] === "player2" && board[4] === "player2" && board[6] === "player2" ||
          board[0] === "player2" && board[3] === "player2" && board[6] === "player2" ||
          board[1] === "player2" && board[4] === "player2" && board[7] === "player2" ||
          board[2] === "player2" && board[5] === "player2" && board[8] === "player2"){
      return'player2'
  }
}

//Main function
function clickSquare() {
  if(isRestart){
    board = [null,null, null,null,null, null,null,null, null]
    isRestart = false
  }
  return board.map((square, index, arr) => {
    const myDiv = document.querySelector(`#my-div${index.toString()}`)
    console.log(arr)

    myDiv.addEventListener('click', () => {
      console.log(player)
      if(square === null){
        arr[index] = player
        if(player === 'player1'){
          myDiv.style.backgroundImage = 'url(./images/x.svg)'

          player1.classList.remove('toggle')
          player2.classList.add('toggle')
          
          player = 'player2'
        }else{
          myDiv.style.backgroundImage = 'url(./images/o.svg)'

          player2.classList.remove('toggle')
          player1.classList.add('toggle')

          player = 'player1'
        }
      }else{
        window.alert('Choose another square')
      }
      const playerWon = winner()
      console.log(playerWon)
      if(playerWon === 'player1'){
        boardContainer.innerHTML = "<h1>Player 1 won</h1>"
        isRestart = true
        player = 'player1'
        boardFooter.innerHTML = "<button onClick='restart()'> Restart </button>"
      }else if(playerWon === 'player2'){
        boardContainer.innerHTML = "<h1>Player 2 won</h1>"
        isRestart = true
        player = 'player1'
        boardFooter.innerHTML = "<button onClick='restart()'> Restart </button>"
      }
    })
  })
}

// Reset game

function restart () {
  boardContainer.innerHTML = `
  <div id="my-div0" class="board reverse-l"></div>
  <div id="my-div1" class="board reverse-l"></div>
  <div id="my-div2" class="board board-right"></div>
  <div id="my-div3" class="board reverse-l"></div>
  <div id="my-div4" class="board reverse-l"></div>
  <div id="my-div5" class="board board-right"></div>
  <div id="my-div6" class="board board-bottom"></div>
  <div id="my-div7" class="board board-bottom"></div>
  <div id="my-div8" class="board"></div>
  `
  boardFooter.innerHTML = ""
  if(player === 'player1'){
    player2.classList.remove('toggle')
    player1.classList.add('toggle')
  }
  clickSquare()
}

clickSquare()

