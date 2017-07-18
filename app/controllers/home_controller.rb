class HomeController < ApplicationController
	def index
		@apps = {
			apps: {
				"Netflix": "#B9090B",
				"Spotify": "#6AE368",
				"Edge": "#0078D7",
				"YouTube": "#CD201F",
				"Twitch": "#6441A4",
				"ESPN": "#EF4135"
			},
			games: [
				"Minecraft",
				"Overwatch"
			]
		}
	end
end
