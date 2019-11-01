import React, { Component } from "react";
import "./App.css";
import Game from "../Game/Game";

interface AppProps {}

interface AppState {
	player: string;
}

class App extends Component<AppProps, AppState> {
	state: AppState = {
		player: "A",
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Tic Tac Toe</h1>
					<h3>It is player {this.state.player}'s turn!</h3>
				</header>
				<body>
					<Game />
				</body>
			</div>
		);
	}
}

export default App;
