import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
function deriveActivePlayer(currentTurn) {
  let playerSympol = "X";
  if (currentTurn.length > 0 && currentTurn[0].player === "X") {
    playerSympol = "O";
  }

  return playerSympol;
}
function deriveWinner(gameBoard, playersName) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSympol = gameBoard[combination[0].row][combination[0].column];
    const socenedSympol = gameBoard[combination[1].row][combination[1].column];
    const thirdSympol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSympol &&
      firstSympol === socenedSympol &&
      firstSympol === thirdSympol
    ) {
      winner = playersName[firstSympol];
      console.log(winner);
    }
  }
  return winner;
}
function deriveGameBoard(board, currentTurn) {
  let gameBoard = [...board.map((array) => [...array])];

  for (const turn of currentTurn) {
    let { square, player } = turn;
    let { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

const PLAYERS = {
  X: "player 1",
  O: " player 2",
};
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [currentTurn, setCurrentTurn] = useState([]);
  const [playersName, setPlayersName] = useState(PLAYERS);

  const gameBoard = deriveGameBoard(board, currentTurn);
  const playerSympol = deriveActivePlayer(currentTurn);
  const winner = deriveWinner(gameBoard, playersName);

  const noWinner = currentTurn.length === 9 && !winner;
  function handeleActivePlayer(rowIndex, colIndex) {
    setCurrentTurn((pervturn) => {
      const playerSympol = deriveActivePlayer(pervturn);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: playerSympol },
        ...pervturn,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setCurrentTurn([]);
  }

  function handlePlayerNameChange(sympol, playerName) {
    setPlayersName((prevPlayersName) => {
      return { ...playersName, [sympol]: playerName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            onNameChange={handlePlayerNameChange}
            isActive={playerSympol === PLAYERS.X}
            initialName="player 1"
            sympol="X"
          />
          <Player
            onNameChange={handlePlayerNameChange}
            isActive={playerSympol === PLAYERS.O}
            initialName="player 2"
            sympol="O"
          />
        </ol>

        {(winner || noWinner) && (
          <GameOver onRestart={handleRestart} winner={winner} />
        )}
        <GameBoard Board={gameBoard} onSelectSquare={handeleActivePlayer} />
      </div>
      <div>
        <ol id="log">
          <Log turns={currentTurn} />
        </ol>
      </div>
    </main>
  );
}

export default App;
