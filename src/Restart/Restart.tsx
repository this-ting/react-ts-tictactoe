import React from "react";
import "./Restart.css";

interface RestartProps {
	handleRestart: Function;
}

const Restart: React.FC<RestartProps> = ({ handleRestart }) => {
	return (
		<>
			<button
				className="Restart"
				onClick={() => {
					handleRestart();
				}}
			>
				Restart Game
			</button>
		</>
	);
};

export default Restart;
