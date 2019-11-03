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
	state: AppState = {
		player: "X",
		game: [null, null, "X", null, null, null, null, null, null],
	};

	handlePlayerClick = () => {
		this.setState(state => ({
			player: state.player === "X" ? "O" : "X",
		}));
	};

	handleRestart = () => {
		this.setState(state => ({
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
