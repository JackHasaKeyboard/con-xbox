import React, { Component } from 'react';

export default class Apps extends Component {
	apps() {
		misc = [
			{
				name: "Netflix",
				color: "#B9090B"
			},
			{
				name: "Spotify",
				color: "#6AE368"
			},
			{
				name: "Edge",
				color: "#0078D7"
			},
			{
				name: "YouTube",
				color: "#CD201F"
			},
			{
				name: "Twitch",
				color: "#6441A4"
			},
			{
				name: "ESPN",
				color: "#EF4135"
			}
		];

		return misc.map((app) => (
			<div>
				<a href={app.name} style={{background: app.color}}>
					<img src={"/img/apps/" + app.name.toLowerCase() + ".svg"}></img>
				</a>
				<h3>{app.name}</h3>
			</div>
		));
	}

	games() {
		one = [
			{
				name: "Overwatch"
			},
			{
				name: "Minecraft"
			}
		];

		threeSixty = [
			{
				name: "Hg"
			}
		];

		return one.map((game) => (
			<div>
				<a href={game.name} style={{background: game.color}}>
					<img src={"/img/apps/" + game.name.toLowerCase() + ".png"}></img>
				</a>
				<h3>{game.name}</h3>
			</div>
		));
	}

	render() {
		return (
			<div className="pin" id="apps">
				<div className="head">
					<h3>Apps</h3>
				</div>
				<div className="body">
					<div id="misc">
						<div className="head">
							<h3>Misc</h3>
						</div>
						<div className="body">
							{this.apps()}
						</div>
					</div>
					<div id="games">
						<div className="head">
							<h3>Games</h3>
						</div>
						<div className="body">
							{this.games()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
