import React from "react";
import "./GameOver.css";

const GameOver: React.FC = () => {
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
