import React, { Component } from "react";
import "./App.css";
import Game from "../Game/Game";
import GameOver from "../GameOver/GameOver";
import Restart from "../Restart/Restart";
import { PlayerProvider } from "../PlayerContext";

interface AppProps {}

interface AppState {
	player: string;
	game: Array<string | null>;
}

class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			player: "X",
			game: [null, null, null, null, null, null, null, null, null],
		};
	}

	determineWinner: Function = (game: Array<string | null>) => {
		const win: Array<Array<number>> = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < win.length; i++) {
			const [a, b, c] = win[i];
			if (game[a] && game[a] === game[b] && game[a] === game[c]) {
				console.log("winner " + game[a]);
				return game[a];
			}
		}
		return null;
	};

	handlePlayerClick = (event: Event, id: number) => {
		console.log(id);
		let squares: Array<string | null> = this.state.game.slice();
		const winner: string | null = this.determineWinner(this.state.game);
		if (squares[id] === null && !winner) {
			squares[id] = this.state.player;
			this.setState(state => ({
				player: state.player === "X" ? "O" : "X",
				game: squares,
			}));
		}
	};

	handleRestart = () => {
		this.setState(state => ({
			player: "X",
			game: [null, null, null, null, null, null, null, null, null],
		}));
	};

	render() {
		const winner = this.determineWinner(this.state.game);
		if (!winner) {
			return (
				<PlayerProvider value={this.state.player}>
					<div className="App">
						<header className="App-header">
							<h1>Tic Tac Toe</h1>
							<h3>It is player {this.state.player}'s turn!</h3>
						</header>
						<body>
							<Game
								game={this.state.game}
								handlePlayerClick={this.handlePlayerClick}
							/>
							<Restart handleRestart={this.handleRestart} />
						</body>
					</div>
				</PlayerProvider>
			);
		} else {
			return (
				<div className="App">
					<header className="App-header">
						<h1>Tic Tac Toe</h1>
						<h2>Player {winner} won!</h2>
						<h3>Play again by clicking on "Restart Game"</h3>
					</header>
					<body>
						<Game
							game={this.state.game}
							handlePlayerClick={this.handlePlayerClick}
						/>
						<Restart handleRestart={this.handleRestart} />
					</body>
				</div>
			);
		}
	}
}

export default App;
