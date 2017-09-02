import React, { Component } from 'react';

export default class YouTube extends Component {
	render() {
		return (
			<div className="pin" id="espn">
				<div className="head">
					<h3>ESPN</h3>
				</div>
				<div className="body">
					<div className="head">
						<h5>Lakers vs. Clippers</h5>
					</div>
					<div id="disp">
						<img src="lakersVClippers.png"></img>
					</div>
				</div>
			</div>
		);
	}
}
