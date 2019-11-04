import React from "react";
import "./GameOver.css";

interface GameOverProps {
	handleRestart: Function;
	winner: string;
}

const GameOver: React.FC<GameOverProps> = ({ handleRestart, winner }) => {
	return (
		<div className="GameOver">
			<div className="GameOver-box">
				{winner === "tie" ? `It was a tie!` : `Player ${winner} won!`}
				<button
					className="GameOver-button"
					onClick={() => {
						handleRestart();
					}}
				>
					Play Again
				</button>
			</div>
		</div>
	);
};

export default GameOver;
