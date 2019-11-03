import React from "react";
import "./Square.css";

interface SquareProps {
	input: null | string;
	handlePlayerClick: Function;
}

const Square: React.FC<SquareProps> = ({ input, handlePlayerClick }) => {
	return (
		<div
			className="Square"
			onClick={() => {
				handlePlayerClick();
			}}
		>
			{input}
		</div>
	);
};

export default Square;
