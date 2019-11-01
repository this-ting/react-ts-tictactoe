import React from "react";
import "./Square.css";

interface SquareProps {
	input: string;
	handlePlayerClick: any;
}

const Square: React.FC<SquareProps> = ({ input, handlePlayerClick }) => {
	return (
		<div className="Square" onClick={handlePlayerClick}>
			{input}
		</div>
	);
};

export default Square;
