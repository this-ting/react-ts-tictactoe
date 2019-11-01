import React from "react";
import "./App.css";

interface AppProps {}

interface AppState {
	player: string;
}

class App extends React.Component<AppProps, AppState> {
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
			</div>
		);
	}
}

export default App;
