import React, { Component } from 'react';

export default class YouTube extends Component {
	render() {
		return (
			<div className="pin" id="game_hub">
				<h4>Game Hub</h4>
				<h4>Destiny</h4>
				<Destiny />
				<div id="info">
					<h3>Hunter</h3>
					<h5>Exo Male</h5>
				</div>
				<div id="items"></div>
				<div id="achieve"></div>
			</div>
		);
	}
}
