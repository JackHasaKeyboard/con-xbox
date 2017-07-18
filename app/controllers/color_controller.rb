class ColorController < ApplicationController
	def index
		@colors = {
			"Xbox": {
				primary: "#6b6b6b",
				secondary: "#c2c2c2",
				tertiary: "#107c10"
			},
			"Sky": {
				primary: "grey",
				secondary: "blue",
				tertiary: "white"
			},
			"Burgundy": {
				primary: "white",
				secondary: "#800020",
				tertiary: "white"
			},
			"Hot Dog Stand": {
				primary: "red",
				secondary: "yellow",
				tertiary: "white"
			},
			"95": {
				primary: "#6c6c6c",
				secondary: "#208c71",
				tertiary: "white"
			},
			"Spiderbite": {
				primary: "white",
				secondary: "#262626",
				tertiary: "red"
			},
			"Seafoam": {
				primary: "white",
				secondary: "#262626",
				tertiary: "#00140E"
			}
		}
	end
end
