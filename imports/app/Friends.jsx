import React, { Component } from 'react';

export default class Friends extends Component {
	friends() {
		friends = {
			gen: [
				"mr_pink",
				"sabotage",
				"dennis_da_enace",
				"dennis_da_menace"
			],
			party: [
				party = [
					"Stacy",
					"dennis_da_menace"
				]
			]
		};

		return friends.gen.map((user, i) => (
			<div>
				<a>
					<img src={"/img/friends/" + i + ".png"}></img>
				</a>
				<h3>{user}</h3>
			</div>
		));
	}

	party() {
		return party.map((user, i) => (
			<div>
				<a>
					<img src={"/img/friends/" + (i + 4) + ".png"}></img>
				</a>
				<h3>{user}</h3>
			</div>
		));
	}

	render() {
		return (
			<div className="pin" id="friends">
				<div className="head">
					<h3>Friends</h3>
				</div>
				<div className="body">
					<div>
						{this.friends()}
					</div>
					<div className="party">
						{this.party()}
					</div>
				</div>
			</div>
		);
	}
}
