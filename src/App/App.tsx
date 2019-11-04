import React, { Component } from "react";
import "./App.css";
import Game from "../Game/Game";
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
			game: [null, null, "X", null, null, null, null, null, null],
		};
	}

	handlePlayerClick = (event: Event, id: number) => {
		console.log(id);
		let squares: Array<string | null> = this.state.game.slice();
		if (squares[id] === null) {
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
	}
}

export default App;
