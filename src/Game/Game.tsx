import React, { Component } from "react";
import "./Game.css";
import Square from "../Square/Square";

class Game extends Component {
	renderSquare() {
		return <Square />;
	}

	render() {
		return (
			<div className="Game">
				<div className="Game-HorizontalLine">
					{this.renderSquare()}
					{this.renderSquare()}
					{this.renderSquare()}
				</div>
				<div className="Game-HorizontalLine">
					{this.renderSquare()}
					{this.renderSquare()}
					{this.renderSquare()}
				</div>
				<div>
					{this.renderSquare()}
					{this.renderSquare()}
					{this.renderSquare()}
				</div>
			</div>
		);
	}
}

export default Game;
