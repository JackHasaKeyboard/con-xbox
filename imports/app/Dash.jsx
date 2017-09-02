import React, { Component } from 'react';

import Friends from './Friends.jsx'
import Spotify from './Spotify.jsx'
import Apps    from './Apps.jsx'

export default class Dash extends Component {
	render() {
		return (
			<div className="dash">
				<div className="cell">
					<Friends />
				</div>
				<div className="cell">
					<Spotify />
				</div>
				<div className="cell">
					<Apps />
				</div>
			</div>
		);
	}
}
