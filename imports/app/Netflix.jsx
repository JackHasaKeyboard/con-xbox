import React, { Component } from 'react';

export default class Netflix extends Component {
	render() {
		return (
			<div className="pin" id="netflix">
				<div className="head">
					<h3>Netflix</h3>
				</div>
				<div className="body">
					<div className="head">
						<h4>
							Star Wars: The Force Awakens
						</h4>
					</div>
					<div className="body">
						<div id="poster">
							<img src="/img/netflix/star_wars_the_force_awakens.png"></img>
						</div>
						<div id="theatre">
							<div id="vid">
								<img src="netflix/frame.png"></img>
								<i className="fa_icon play"></i>
							</div>
							<div id="ctrl">
								<div>
									<span>0:11:02</span>
								</div>
								<div id="prog">
									<div id="cur"></div>
								</div>
								<div>
									<span>2:16:32</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="info">
					<h5>
						<span>2015</span>
					</h5>
					<h5 id="rottenTomatoes">
						Rotten Tomatoes:
						<span>92%</span>
					</h5>
					<h5 id="metacritic">
						Metacritic
						<span>81</span>
					</h5>
				</div>
			</div>
			/* <img src="/img/netflix/futurama.png"> */
		);
	}
}
