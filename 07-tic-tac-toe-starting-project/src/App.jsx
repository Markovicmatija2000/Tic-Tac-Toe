import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx"
import GameOver from "./components/GameOver.jsx"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if( gameTurns.length >0 && gameTurns[0].player ==='X')
  {
    currentPlayer = 'O'
  };

  return currentPlayer;
}

function App() {
  const [playerName, setPlayerName] = useState({
    X: 'Player 1',
    O: 'Player 2'
  })
  const [gameTurns, setGameTurns] = useState([]);
 // const [activePlayer, setActivePlayer] = useState('X');

 const activePlayer = deriveActivePlayer(gameTurns);

 let gameBoard = [...initialGameBoard.map(array => [...array])];

 for(const turn of gameTurns) {
     const { square, player} = turn;
     const {row, col} = square;

     gameBoard[row][col] = player;
 }

let winner;

for( const commbination of WINNING_COMBINATIONS){
  const firstSquare = gameBoard[commbination[0].row][commbination[0].column]
  const secondSquare = gameBoard[commbination[1].row][commbination[1].column]
  const thirdSquare = gameBoard[commbination[2].row][commbination[2].column]

  if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare)
     
  {
    winner = playerName[firstSquare];
    console.log(winner)
  }

}

const hasDraw = gameTurns.length ===9 &&  !winner

  function handleSelectSquare(rowIndex,colIndex){
   // setActivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X' )
    setGameTurns( (prevTurns) =>
    {
      const currentPlayer = deriveActivePlayer(prevTurns);
     


      const updatedTurns = [{ square : {row : rowIndex, col : colIndex}, player : currentPlayer } ,...prevTurns];
      return updatedTurns;
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerName(symbol, newName){
    setPlayerName(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      };
    });
  }

  

  return <main> 
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}  onChangeName={handlePlayerName} />
        <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}  onChangeName={handlePlayerName} />

       
       
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      <GameBoard onSelectSqare={handleSelectSquare} board ={gameBoard} />
    </div>

    <Log  turns={gameTurns} />
  </main>
}

export default App
