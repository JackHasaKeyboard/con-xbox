import React, { Component } from 'react';

export default class Spotify extends Component {
	render() {
		return (
			<div className="pin" id="spotify">
				<div className="head">
					<h3>Spotify</h3>
					<input type="text"></input>
				</div>
				<div className="body">
					<div id="bar">
						<img src="/img/album/1.png"></img>
					</div>
					<div id="tracks">
						<div className="head">
							<h4 className="active">Skream - Outside the Box</h4>
						</div>
						<div className="body">
							<li>Perferated</li>
							<li>8 Bit Baby</li>
							<li>CPU	</li>
							<li className="active">Where You Should Be	</li>
							<li>How Real	</li>
							<li>Fields Of Emotion	</li>
							<li>I Love The Way	</li>
							<li>Listenin' To The Records On My Wall	</li>
							<li>Wibbler	</li>
							<li>Metamorphosis	</li>
							<li>Finally	</li>
							<li>Reflections	</li>
							<li>A Song For Lenny	</li>
							<li>The Epic Last Song</li>
						</div>
					</div>
				</div>
				<div id="album">
					<img src="/img/album/2.png"></img>
					<img src="/img/album/3.png"></img>
					<img src="/img/album/4.png"></img>
				</div>
				<div id="ctrl">
					<div>
						<span>1:16</span>
					</div>
					<div id="timeLine">
						<div id="current"></div>
					</div>
					<div>
						<span>3:12</span>
					</div>
				</div>
			</div>
		);
	}
}
