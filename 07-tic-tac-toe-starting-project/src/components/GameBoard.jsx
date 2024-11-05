import { useState } from "react";



export default function GameBoard({onSelectSqare, board}){
   

    /*const [gameBoard,setGameBoard] = useState(initialGameBoard);

    function handleGameBoard(rowIndex,colIndex){
        setGameBoard( (prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map( innerArray => [...innerArray] )];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        } )
        
        onSelectSqare();

*/
    //}

    return <ol id="game-board">
        {board.map( (row,rowIndex)=> <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol,colIndex) => <li key={colIndex}>
                     <button onClick={() => onSelectSqare(rowIndex,colIndex)} disabled={playerSymbol !== null}>
                         {playerSymbol} 
                         </button></li> )}
            </ol>
        </li> )}


    </ol>
}