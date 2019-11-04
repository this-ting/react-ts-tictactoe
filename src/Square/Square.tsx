import React from "react";
import "./Square.css";

interface SquareProps {
	input: string | null;
	handlePlayerClick: Function;
	id: number;
}

const Square: React.FC<SquareProps> = ({ input, handlePlayerClick, id }) => {
	return (
		<div
			className="Square"
			onClick={event => {
				handlePlayerClick(event, id);
			}}
		>
			{input}
		</div>
	);
};

export default Square;
