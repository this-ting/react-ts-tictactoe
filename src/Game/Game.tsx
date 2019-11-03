import React, { Component } from "react";
import "./Game.css";
import Square from "../Square/Square";
import PlayerContext from "../PlayerContext";

interface GameProps {
	game: Array<string | null>;
	handlePlayerClick: Function;
}

class Game extends Component<GameProps> {
	static contextType = PlayerContext;
	player = this.context;

	renderSquare = (i: number) => {
		const { handlePlayerClick } = this.props;
		return (
			<Square
				input={this.props.game[i]}
				handlePlayerClick={handlePlayerClick}
			/>
		);
	};

	render() {
		return (
			<div className="Game">
				<div className="Game-HorizontalLine">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="Game-HorizontalLine">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Game;
