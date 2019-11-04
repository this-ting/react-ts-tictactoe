import React from "react";
import "./GameOver.css";

interface GameOverProps {
	handleRestart: Function;
}

const GameOver: React.FC<GameOverProps> = () => {
	return (
		<div className="GameOver">
			<div className="GameOver-box">
				Player __ Won!
				<button className="GameOver-button">Play Again</button>
			</div>
		</div>
	);
};

export default GameOver;
