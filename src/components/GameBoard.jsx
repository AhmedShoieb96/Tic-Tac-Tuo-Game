import { useState } from "react";

export default function GameBoard({ onSelectSquare , Board}) {


	// const [gameBoard, setGameBoard] = useState(board);

	// function handleClick(rowIndex, colIndex) {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedBoard[rowIndex][colIndex] = sympolSelected;

	// 		return updatedBoard;
	// 	});
	// 	onSelectSquare();
	// }
	return (
		<ol id="game-board">
			{Board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSympol, colIndex) => (
							<li key={colIndex}>
								<button onClick={ () => onSelectSquare(rowIndex , colIndex)} disabled={playerSympol !== null } >
									{playerSympol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
